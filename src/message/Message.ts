/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright 2021 Victor Norgren
 * Released under the MIT license
 */
import { FieldEnum as Fields } from '../fieldtypes/FieldEnum';
import { Enums } from '../enums/Enums';
import { ISpecEnums } from '../../spec/SpecEnums';
import { ISpecMessageContents } from '../../spec/SpecMessageContents';
import { Field } from '../fields/Field';
import { DEFAULT_FIX_VERSION, pad, SOH } from '../util/util';

const TAG_CHECKSUM: string = '10=';
const TAG_MSGTYPE: string = '35=';
const MARKER_BODYLENGTH: string = '\x02';
const MARKER_CHECKSUM: string = '\x03';

interface IMessageContents {
    componentID: string;
    tagText: string;
    indent: string;
    position: string;
    reqd: string;
    description?: string;
    updated?: string;
    updatedEP?: string;
    added: string;
    addedEP?: string;
    issue?: string;
    deprecated?: string;

    // Dynamic types
    components?: IMessageContent[];
    validated?: boolean;
}

interface IMessageContent {
    field: Field;
    hasValue: boolean;
    position: number;
    reqd: string;
    spec: any;
    tagText: number;
    valid: boolean;

    // Dynamic types
    validated?: boolean;
}

type FieldValues = {
    [tag: string]: any;
};

type FieldExplains = {
    [tag: string]: any;
};

export class Message {
    public fixVersion: string = DEFAULT_FIX_VERSION;
    public data: Field[] = [];
    public messageString: string = '';
    public description: string = '';
    public messageType: string = '';
    public messageSequence: number = -1;
    public messageContents: ISpecMessageContents[] = [];
    public bodyLengthValid: boolean = false;
    public checksumValid: boolean = false;
    public checksumValue: string | null = null;
    public checksumExpected: string | null = null;
    public bodyLengthValue: number | null = null;
    public bodyLengthExpected: number | null = null;

    constructor(fixVersion: string = DEFAULT_FIX_VERSION, ...fields: Field[]) {
        this.fixVersion = fixVersion;
        this.reset();

        // Add other tags
        fields.forEach((field: Field) => {
            if (field.tag === Fields.MsgType) {
                this.data.splice(0, 0, field);
            } else {
                this.data.push(field);
            }
        });
    }

    #calculateBodyLength = (value: string): number => {
        const startLength: number = value.indexOf(TAG_MSGTYPE) === -1 ? 0 : value.indexOf(TAG_MSGTYPE) + 1;
        const endLength: number =
            value.lastIndexOf(TAG_CHECKSUM) === -1 ? value.length : value.lastIndexOf(TAG_CHECKSUM) + 1;

        return endLength - startLength;
    };

    #calculateChecksum = (value: string): string => {
        let integerValues: number = 0;

        for (let i: number = 0; i < value.length; i++) {
            integerValues += value.charCodeAt(i);
        }

        return pad(integerValues & 255, 3);
    };

    #calculatePosition = (spec: any, tag: number): number => {
        if (spec.tagText === 'StandardHeader' && tag === 8) {
            return 0;
        } else if (spec.tagText === 'StandardHeader' && tag === 9) {
            return 1;
        } else if (spec.tagText === 'StandardHeader' && tag === 35) {
            return 2;
        } else if (spec.tagText === 'StandardTrailer') {
            return 999999999;
        } else {
            return Number(spec.position) + 100;
        }
    };

    #nonEmpty = (parts: TemplateStringsArray, ...args: string[]): string => {
        let res: string = parts[0];
        for (let i: number = 1; i < parts.length; i++) {
            if (args[i - 1] || args[i - 1] === '0') {
                res += args[i - 1];
            }
            res += parts[i];
        }
        return res;
    };

    #validateMessage = (message: Message): any[] => {
        const result: any[] = [];

        const messageDataCloned: Field[] = JSON.parse(JSON.stringify(message.data));
        const messageContentsCloned: IMessageContents[] = JSON.parse(JSON.stringify(message.messageContents));

        messageDataCloned.forEach((field: Field, index: number) => {
            const spec = messageContentsCloned.find((item: any) => {
                if (item.components!.length > 0) {
                    return item.components!.find((subItem: any) => {
                        const found = Number(subItem.tagText) === field.tag;
                        if (found) {
                            subItem.validated = true;
                        }
                        return found;
                    });
                } else {
                    item.validated = true;
                    return Number(item.tagText) === field.tag;
                }
            });

            result.push({
                field,
                hasValue: true,
                message: spec ? '' : 'Unknown/unsupported field',
                position: spec ? this.#calculatePosition(spec, field.tag) : index,
                reqd: spec ? spec.reqd : '0',
                spec: spec ? spec : null,
                valid: true,
            });
        });

        messageContentsCloned
            .filter((item: any) => !item.validated)
            .forEach((spec: any) => {
                if (spec.components.length > 0) {
                    spec.components
                        .filter((subItem: IMessageContent) => !subItem.validated)
                        .forEach((subSpec: IMessageContent) => {
                            if (!subSpec.validated) {
                                result.push({
                                    field: null,
                                    hasValue: false,
                                    position: this.#calculatePosition(subSpec, subSpec.tagText),
                                    reqd: subSpec.reqd,
                                    spec: subSpec,
                                    tagText: subSpec.tagText,
                                    valid: !(subSpec.reqd === '1'),
                                });
                            }
                        });
                } else if (!spec.validated) {
                    result.push({
                        field: null,
                        hasValue: false,
                        position: this.#calculatePosition(spec, spec.tagText),
                        reqd: spec.reqd,
                        spec,
                        tagText: spec.tagText,
                        valid: !(spec.reqd === '1'),
                    });
                }
            });

        return result;
    };

    public addField(field: Field): void {
        this.data.push(field);
    }

    public addFields(...fields: Field[]): void {
        fields.forEach((field: Field) => {
            if (field.tag === Fields.MsgType) {
                this.data.splice(0, 0, field);
            } else {
                this.data.push(field);
            }
        });
    }

    public removeFieldByTag(tag: number) {
        const index: number = this.data.findIndex((field: Field) => field.tag === tag);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    }

    public getField(tag: number): Field | undefined {
        return this.data.find((field: Field) => field.tag === tag);
    }

    public getFieldValues(): FieldValues {
        const values: FieldValues = {};
        this.data.forEach((field: Field) => {
            if (values[field.tag]) {
                values[field.tag] = [values[field.tag], field.value];
            } else {
                values[field.tag] = field.value;
            }
        });
        return values;
    }

    public getFieldNameValues(): FieldValues {
        const values: FieldValues = {};
        this.data.forEach((field: Field) => {
            if (values[field.name!]) {
                values[field.name!] = [values[field.name!], field.value];
            } else {
                values[field.name!] = field.value;
            }
        });
        return values;
    }

    public getFieldExplains(): FieldExplains {
        const values: FieldValues = {};
        this.data.forEach((field: Field) => {
            const explain = field.enumeration?.symbolicName || field.value;
            if (values[field.name!]) {
                values[field.name!] = [values[field.name!], explain];
            } else {
                values[field.name!] = explain;
            }
        });
        return values;
    }

    public getFields(tag: number): Field[] | undefined {
        return this.data.filter((field: Field) => field.tag === tag);
    }

    public setField(field: Field): void {
        const index = this.data.findIndex((item: Field) => item.tag === field.tag);
        if (index > -1) {
            this.data[index] = field;
        }
    }

    public setString(fixString: string): void {
        this.messageString = fixString;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public setMessageType(messageType: string): void {
        this.messageType = messageType;
    }

    public setMessageSequence(messageSequence: number): void {
        this.messageSequence = messageSequence;
    }

    public setMessageContents(messageContents: ISpecMessageContents[]): void {
        this.messageContents = messageContents;
    }

    public getEnum(tag: number, value: string): ISpecEnums | undefined | null {
        if (!this.getField(Fields.MsgType) || !this.getField(Fields.MsgType)!.tag) {
            return null;
        }

        if (!this.getField(Fields.MsgType) || !this.getField(Fields.MsgType)!.value) {
            return null;
        }

        const enums = new Enums();
        return enums.getEnum(tag.toString(), value);
    }

    public getBriefDescription(): string | null {
        let returnValue: string = '';
        const sideField: any = this.getField(Fields.Side)!;
        let side: string | null = '';
        if (sideField && sideField.enumeration!) {
            side = sideField.enumeration!.symbolicName;
            side = side ? side.replace('Sell', 'SL').toUpperCase() : null;
        }

        if (this.getField(Fields.LeavesQty) !== undefined) {
            let quantity = null;

            if (this.getField(Fields.ContraTradeQty)) {
                quantity = this.getField(Fields.ContraTradeQty)!.value;
            } else {
                quantity = this.getField(Fields.OrderQty) ? this.getField(Fields.OrderQty)!.value : '';
            }
            const leavesQuantity = this.getField(Fields.LeavesQty)!.value;
            const lastPrice = this.getField(Fields.LastPx) ? this.getField(Fields.LastPx)!.value : '';
            returnValue = this.#nonEmpty`${quantity} @${
                lastPrice || lastPrice === '0' ? lastPrice.toFixed(2) : '0.00'
            } ${this.getField(Fields.LeavesQty)!.name!.replace('LeavesQty', 'LvsQty')} ${parseInt(
                leavesQuantity,
                10,
            ).toString()}`;
        } else if (this.getField(Fields.OrderQty)) {
            const orderQuantity = this.getField(Fields.OrderQty)!.value;
            const symbol = this.getField(Fields.Symbol) ? this.getField(Fields.Symbol)!.value : '';
            const orderType = this.getField(Fields.OrdType)!;
            let symbolicName: string | null = '';
            if (orderType && orderType.enumeration!) {
                symbolicName = orderType.enumeration.symbolicName;
            }
            const timeInForceField = this.getField(Fields.TimeInForce)!;
            let timeInForce: string | null = null;
            if (timeInForceField && timeInForceField.enumeration!) {
                timeInForce = timeInForceField.enumeration.symbolicName;
            }

            if (this.getField(Fields.Price)) {
                let price = this.getField(Fields.Price)!.value;
                if (price && price >= 1) {
                    price = price.toFixed(2);
                } else if (price !== undefined && price < 1) {
                    price = price.toString().replace('0.', '.');
                }
                returnValue = this.#nonEmpty`${side || ''} ${orderQuantity} ${symbol ? symbol.toUpperCase() : ''} ${
                    symbolicName ? symbolicName.replace('Market', 'MKT').replace('Limit', 'LMT').toUpperCase() : ''
                } @${price} ${timeInForce ? timeInForce.toUpperCase() : ''}`;
            } else {
                returnValue = this.#nonEmpty`${side || ''} ${orderQuantity} ${symbol ? symbol.toUpperCase() : ''} ${
                    symbolicName ? symbolicName.replace('Market', 'MKT').replace('Limit', 'LMT').toUpperCase() : ''
                } ${timeInForce ? timeInForce.toUpperCase() : ''}`;
            }
        } else {
            const messageType = this.getField(Fields.MsgType);
            if (messageType && messageType.tag && messageType.value) {
                return this.getEnum(messageType.tag, messageType.value)!.SymbolicName;
            } else {
                return null;
            }
        }

        return returnValue.trim();
    }

    public validateBodyLength(value: string): boolean {
        const startLength: number =
            this.messageString.indexOf(TAG_MSGTYPE) === -1 ? 0 : this.messageString.indexOf(TAG_MSGTYPE);
        const endLength: number =
            this.messageString.lastIndexOf(TAG_CHECKSUM) === -1
                ? this.messageString.length
                : this.messageString.lastIndexOf(TAG_CHECKSUM);
        const bodyLength: number = endLength - startLength;

        this.bodyLengthValue = Number(value) >> 0;
        this.bodyLengthExpected = bodyLength;
        this.bodyLengthValid = Number(value) >> 0 === bodyLength;
        return this.bodyLengthValid;
    }

    public validateChecksum(value: string): boolean {
        const length: number =
            this.messageString.lastIndexOf(TAG_CHECKSUM) === -1
                ? this.messageString.length
                : this.messageString.lastIndexOf(TAG_CHECKSUM);
        const data: string = this.messageString.substring(0, length);
        const calculatedChecksum: string = this.#calculateChecksum(data);

        this.checksumValue = value;
        this.checksumExpected = calculatedChecksum;
        this.checksumValid = value === calculatedChecksum;
        return this.checksumValid;
    }

    public validate(): any[] {
        return this.#validateMessage(this);
    }

    public encode(separator: string = SOH): string {
        const fields: any[] = this.data.map((field: Field) => new Field(field.tag, field.value));
        const data = [];

        let beginString = new Field(Fields.BeginString, this.fixVersion).toString();
        let bodyLength = new Field(Fields.BodyLength, MARKER_BODYLENGTH).toString();
        let checksum = new Field(Fields.CheckSum, MARKER_CHECKSUM).toString();
        let index = fields.findIndex((field) => field.tag === Fields.BeginString);

        // Check for header
        if (index > -1) {
            beginString = fields[index].toString();
            fields.splice(index, 1);
        }

        // Check for body length
        index = fields.findIndex((field) => field.tag === Fields.BodyLength);
        if (index > -1) {
            bodyLength = fields[index].toString();
            fields.splice(index, 1);
        }

        // Check for trailer
        index = fields.findIndex((field) => field.tag === Fields.CheckSum);
        if (index > -1) {
            checksum = fields[index].toString();
            fields.splice(index, 1);
        }

        data.push(beginString);
        data.push(bodyLength);

        // Add other fields
        fields.forEach((field) => {
            data.push(field.toString());
        });

        data.push(checksum);

        let fixMessage = `${data.join(separator)}${separator}`;
        fixMessage = fixMessage.replace(MARKER_BODYLENGTH, this.#calculateBodyLength(fixMessage).toString());

        const length =
            fixMessage.lastIndexOf(TAG_CHECKSUM) === -1 ? fixMessage.length : fixMessage.lastIndexOf(TAG_CHECKSUM);
        const calculatedChecksum = this.#calculateChecksum(fixMessage.substring(0, length));
        fixMessage = fixMessage.replace(MARKER_CHECKSUM, calculatedChecksum);

        return fixMessage;
    }

    public clone(): Message {
        const cloned: Message = new Message(this.fixVersion, ...this.data);
        cloned.messageSequence = this.messageSequence;
        cloned.messageType = this.messageType;
        return cloned;
    }

    private reset(): void {
        this.data = [];
        this.messageString = '';
        this.description = '';
        this.messageType = '';
        this.messageContents = [];
        this.messageSequence = -1;
        this.bodyLengthValid = false;
        this.checksumValid = false;
        this.checksumValue = null;
        this.checksumExpected = null;
        this.bodyLengthValue = null;
        this.bodyLengthExpected = null;
    }
}

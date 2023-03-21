/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright 2021 Victor Norgren
 * Released under the MIT license
 */
import { Enums as EnumsCache } from './enums/Enums';
import { Field } from './fields/Field';
import { Fields as FieldsCache } from './fields/Fields';
import { FieldEnum } from './fieldtypes/FieldEnum';
import { Message } from './message/Message';
import { DEFAULT_FIX_VERSION, RE_BEGINSTRING, RE_ESCAPE, RE_FIND, SOH, STRING_EQUALS } from './util/util';

export class FIXParserBase {
    public fixVersion: string = DEFAULT_FIX_VERSION;
    public message: Message | null = null;
    public messageTags: string[] = [];
    public messageString: string = '';
    public fields: FieldsCache = new FieldsCache();
    public enums: EnumsCache = new EnumsCache();

    public processMessage(): void {
        const matches: RegExpExecArray | null = RE_FIND.exec(this.messageString);
        if (matches && matches.length === 2) {
            const stringData: string = this.messageString.replace(
                new RegExp(matches[1].replace(RE_ESCAPE, '\\$&'), 'g'),
                SOH,
            );
            this.message!.setString(stringData);
            this.messageTags = stringData.split(SOH);
        } else {
            this.message = null;
            this.messageTags = [];
        }
    }

    public processFields(): void {
        let tag: number;
        let value: string | number | null;
        let i: number = 0;
        let equalsOperator: number;
        let field: Field;

        for (i; i < this.messageTags.length - 1; i++) {
            equalsOperator = this.messageTags[i].indexOf(STRING_EQUALS);

            tag = parseInt(this.messageTags[i].substring(0, equalsOperator), 10);
            value = this.messageTags[i].substring(equalsOperator + 1);

            field = new Field(tag, value);

            this.fields.processField(this.message!, field);
            this.enums.processEnum(field);

            if (field.tag === FieldEnum.BodyLength) {
                this.message!.validateBodyLength(value);
            } else if (field.tag === FieldEnum.CheckSum) {
                this.message!.validateChecksum(value);
            }

            this.message!.addField(field);
        }
    }

    public parse(data: string): Message[] {
        let i: number = 0;

        const messageStrings = data ? data.split(RE_BEGINSTRING) : [];
        const messages = [];

        for (i; i < messageStrings.length; i++) {
            this.message = new Message(this.fixVersion);
            this.messageString = messageStrings[i];
            if (this.messageString.indexOf(SOH) > -1) {
                this.message.setString(this.messageString);
                this.messageTags = this.messageString.split(SOH);
            } else {
                this.processMessage();
            }

            if (this.message) {
                this.processFields();
                messages.push(this.message);
            }
        }

        return messages;
    }
}

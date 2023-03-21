/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright 2021 Victor Norgren
 * Released under the MIT license
 */
import { FIELDS, ISpecFields } from '../../spec/SpecFields';
import { Message } from '../message/Message';
import { Messages } from '../messages/Messages';
import { Categories } from './categories/Categories';
import { DataTypes } from './datatypes/Datatypes';
import { Field } from './Field';
import { Sections } from './sections/Sections';
import { FieldEnum } from '../fieldtypes/FieldEnum';

export class Fields {
    public fields: ISpecFields[] = FIELDS;
    public cacheMap: Map<number, ISpecFields> = new Map<number, ISpecFields>();
    public messages: Messages = new Messages();
    public categories: Categories = new Categories();
    public sections: Sections = new Sections();
    public dataTypes: DataTypes = new DataTypes();

    constructor() {
        this.fields.forEach((item: ISpecFields) => {
            this.cacheMap.set(Number(item.Tag) >> 0, item);
        });
    }

    public getField(field: Field): void {
        const data = this.cacheMap.get(field.tag);
        if (data) {
            field.setName(data.Name);
            field.setDescription(data.Description);

            if (data.BaseCategory) {
                this.categories.processCategory(field, data.BaseCategory);

                if (field.category!.sectionID) {
                    this.sections.processSection(field, field.category!.sectionID);
                }
            }

            this.dataTypes.processDatatype(field, data.Type);
        } else {
            field.setType(null);
            field.setValue(field.value);
        }
    }

    public processField(message: Message, field: Field): void {
        const data = this.cacheMap.get(field.tag);
        if (data) {
            if (field.tag === FieldEnum.MsgType) {
                this.messages.setMessageType(message, field);
            }
            if (field.tag === FieldEnum.MsgSeqNum) {
                this.messages.setMessageSequence(message, Number(field.value));
            }

            field.setName(data.Name);
            field.setDescription(data.Description);

            if (data.BaseCategory) {
                this.categories.processCategory(field, data.BaseCategory);

                if (field.category!.sectionID) {
                    this.sections.processSection(field, field.category!.sectionID);
                }
            }

            this.dataTypes.processDatatype(field, data.Type);
        } else {
            field.setType(null);
            field.setValue(field.value);
        }
    }
}

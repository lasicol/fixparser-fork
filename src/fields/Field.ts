/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright 2021 Victor Norgren
 * Released under the MIT license
 */
import { EnumType } from '../enums/EnumType';
import { CategoryType } from './categories/CategoryType';
import { FieldType } from './datatypes/FieldType';
import { SectionType } from './sections/SectionType';

export class Field {
    public tag: number;
    public value: any;
    public name: string | null = null;
    public description: string | null = null;
    public type: FieldType | null = null;
    public category: CategoryType | null = null;
    public section: SectionType | null = null;
    public enumeration: EnumType | null = null;
    public validated: boolean = false;

    constructor(tag: number, value: string | number | null) {
        this.tag = tag >> 0;
        this.value = value;
        this.name = null;
        this.description = null;
        this.type = null;
        this.category = null;
        this.section = null;
        this.enumeration = null;
        this.validated = false;
    }

    public setTag(tag: number): void {
        this.tag = tag >> 0;
    }

    public setValue(value: number | string): void {
        this.value = value;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public setType(type: FieldType | null): void {
        this.type = type;
    }

    public setCategory(category: CategoryType): void {
        this.category = category;
    }

    public setSection(section: SectionType): void {
        this.section = section;
    }

    public setEnumeration(enumeration: EnumType): void {
        this.enumeration = enumeration;
    }

    public setValidated(isValid: boolean): void {
        this.validated = isValid;
    }

    public toString(): string {
        return `${this.tag}=${this.value}`;
    }
}

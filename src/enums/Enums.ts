/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright 2021 Victor Norgren
 * Released under the MIT license
 */
import { ENUMS, ISpecEnums } from '../../spec/SpecEnums';
import { Field } from '../fields/Field';
import { EnumType } from './EnumType';

export class Enums {
    public enums: ISpecEnums[] = ENUMS;
    public cacheMap: Map<string, ISpecEnums> = new Map<string, ISpecEnums>();

    constructor() {
        this.enums.forEach((enumType: ISpecEnums) => {
            this.cacheMap.set(`${enumType.Tag}|${enumType.Value}`, enumType);
        });
    }

    public getEnum(tag: string, value: string | number): ISpecEnums | undefined {
        return this.cacheMap.get(`${tag}|${value}`);
    }

    public processEnum(field: Field): void {
        const enumTypes = new EnumType();
        const foundEnum: ISpecEnums | undefined = this.cacheMap.get(`${field.tag}|${field.value}`);
        if (foundEnum) {
            enumTypes.setEnumeration(foundEnum);
            field.setEnumeration(enumTypes);
        }
    }
}

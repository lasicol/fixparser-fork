/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright 2021 Victor Norgren
 * Released under the MIT license
 */
import { ISpecCategories } from '../../../spec/SpecCategories';

export class CategoryType {
    public categoryID: string | null = null;
    public fixmlFileName: string | null = null;
    public notReqXML: string | null = null;
    public generateImplFile: string | null = null;
    public componentType: string | null = null;
    public sectionID: string | null = null;
    public volume: string | null = null;
    public includeFile: string | null = null;

    public reset(): void {
        this.categoryID = null;
        this.fixmlFileName = null;
        this.notReqXML = null;
        this.generateImplFile = null;
        this.componentType = null;
        this.sectionID = null;
        this.volume = null;
        this.includeFile = null;
    }

    public setCategory(category: ISpecCategories): void {
        this.categoryID = category.CategoryID;
        this.fixmlFileName = category.FIXMLFileName;
        this.notReqXML = category.NotReqXML;
        this.generateImplFile = category.GenerateImplFile;
        this.componentType = category.ComponentType;
        this.sectionID = category.SectionID!;
        this.volume = category.Volume;
        this.includeFile = category.IncludeFile!;
    }
}

/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright 2021 Victor Norgren
 * Released under the MIT license
 */
import { COMPONENTS, ISpecComponents } from '../../spec/SpecComponents';

export class Components {
    public components: ISpecComponents[] = COMPONENTS;
    public cacheMap = new Map<string, ISpecComponents>();
    public cacheMapByName = new Map<string, ISpecComponents>();

    constructor() {
        this.components.forEach((component) => {
            this.cacheMap.set(component.ComponentID, component);
        });
        this.components.forEach((component) => {
            this.cacheMapByName.set(component.Name, component);
        });
    }

    public find(componentId: string): ISpecComponents | undefined {
        return this.cacheMap.get(componentId);
    }

    public findByName(name: string): ISpecComponents | undefined {
        return this.cacheMapByName.get(name);
    }
}

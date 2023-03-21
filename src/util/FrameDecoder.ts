/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright 2021 Victor Norgren
 * Released under the MIT license
 */
import { Transform, TransformCallback, TransformOptions } from 'stream';

export class FrameDecoder extends Transform {
    public data: string | null;

    constructor(opts?: TransformOptions) {
        super(opts);
        this.data = '';
    }

    public override _transform(chunk: string, encoding: string, callback: TransformCallback): void {
        const chunks = (String(this.data) + chunk).split(/(8=.+?\x0110=\d\d\d\x01)/gs);
        for (let i: number = 0; i < chunks.length - 1; i++) {
            this.push(chunks[i]);
        }
        this.data = chunks[chunks.length - 1];
        callback();
    }

    public override destroy(error?: Error): this {
        this.data = null;
        return this;
    }
}

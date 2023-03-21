import FIXParser, { Options as FIXParserOptions, Protocol } from './FIXParser';
import { Options as FIXParserBrowserOptions } from './FIXParserBrowser';
import { Field } from './fields/Field';
import { Message } from './message/Message';
import { FIXParserBase } from './FIXParserBase';
import { MessageBuffer } from './util/MessageBuffer';
import { Parser } from './util/util';

export interface IFIXParser {
    host: string | null;
    port: number | null;
    protocol: Protocol | null;
    sender: string | null;
    target: string | null;
    heartBeatInterval: number | undefined;
    fixVersion: string;
    parserName: Parser;
    fixParserBase?: FIXParserBase;
    nextNumIn: number;
    nextNumOut?: number;
    heartBeatIntervalId: ReturnType<typeof setInterval> | null;
    connected: boolean;
    messageBuffer: MessageBuffer;
    fixParser?: FIXParser;

    connect?(options: FIXParserOptions | FIXParserBrowserOptions): void;
    getNextTargetMsgSeqNum(): number;
    setNextTargetMsgSeqNum(nextMsgSeqNum: number): number;
    getTimestamp(dateObject: Date): string;
    createMessage(...fields: Field[]): Message;
    parse(data: string): Message[];
    send(message: Message): void;
    isConnected(): boolean;
    close(): void;
    stopHeartbeat(): void;
    startHeartbeat(heartBeatInterval: number): void;
}

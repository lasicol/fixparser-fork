/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright 2021 Victor Norgren
 * Released under the MIT license
 */
import { EventEmitter } from 'events';

import { IFIXParser } from './IFIXParser';
import * as Constants from './fieldtypes';
import { Field } from './fields/Field';
import { FIXParserBase } from './FIXParserBase';
import { Message } from './message/Message';
import { version, timestamp, log, logError, DEFAULT_FIX_VERSION, Version, Parser } from './util/util';
import { Options as FIXParserOptions, Protocol } from './FIXParser';
import { clientProcessMessage } from './util/ClientMessageProcessor';
import { heartBeat } from './messagetemplates/MessageTemplates';
import { MessageBuffer } from './util/MessageBuffer';

export type Options = Pick<
    FIXParserOptions,
    'host' | 'port' | 'sender' | 'target' | 'heartbeatIntervalSeconds' | 'fixVersion'
>;

export default class FIXParserBrowser extends EventEmitter implements IFIXParser {
    public static version: Version = version;
    public parserName: Parser = 'FIXParserBrowser';
    public fixParserBase: FIXParserBase = new FIXParserBase();
    public nextNumIn: number = 1;
    public nextNumOut: number = 1;
    public heartBeatIntervalId: ReturnType<typeof setInterval> | null = null;
    public socket: WebSocket | null = null;
    public connected: boolean = false;
    public host: string | null = null;
    public port: number | null = null;
    public protocol: Protocol | null = 'websocket';
    public sender: string | null = null;
    public target: string | null = null;
    public heartBeatInterval: number | undefined;
    public fixVersion: string = DEFAULT_FIX_VERSION;
    public messageBuffer: MessageBuffer = new MessageBuffer();

    public connect({
        host = 'localhost',
        port = 9878,
        sender = 'SENDER',
        target = 'TARGET',
        heartbeatIntervalSeconds = 30,
        fixVersion = this.fixVersion,
    }: Options = {}): void {
        this.host = host;
        this.port = port;
        this.protocol = 'websocket';
        this.sender = sender;
        this.target = target;
        this.heartBeatInterval = heartbeatIntervalSeconds;
        this.fixVersion = fixVersion;
        this.fixParserBase.fixVersion = fixVersion;
        this.socket = new WebSocket(
            this.host.indexOf('ws://') === -1 && this.host.indexOf('wss://') === -1
                ? `ws://${this.host}:${this.port}`
                : `${this.host}:${this.port}`,
        );

        this.socket.addEventListener('open', (event) => {
            this.connected = true;
            log(
                `FIXParser (${this.protocol!.toUpperCase()}): -- Connected: ${event}, readyState: ${
                    this.socket!.readyState
                }`,
            );
            this.emit('open');
        });
        this.socket.addEventListener('close', (event) => {
            this.connected = false;
            log(
                `FIXParser (${this.protocol!.toUpperCase()}): -- Connection closed: ${event}, readyState: ${
                    this.socket!.readyState
                }`,
            );
            this.emit('close');
            this.stopHeartbeat();
        });
        this.socket.addEventListener('message', (event) => {
            const messages = this.fixParserBase.parse(event.data);
            let i: number = 0;
            for (i; i < messages.length; i++) {
                clientProcessMessage(this, messages[i]);
                this.emit('message', messages[i]);
            }
        });
    }

    public getNextTargetMsgSeqNum(): number {
        return this.nextNumOut;
    }

    public setNextTargetMsgSeqNum(nextMsgSeqNum: number): number {
        this.nextNumOut = nextMsgSeqNum;
        return this.nextNumOut;
    }

    public getTimestamp(dateObject = new Date()): string {
        return timestamp(dateObject);
    }

    public createMessage(...fields: Field[]): Message {
        return new Message(this.fixVersion, ...fields);
    }

    public parse(data: string): Message[] {
        return this.fixParserBase.parse(data);
    }

    public send(message: Message): void {
        if (this.socket!.readyState === 1) {
            this.setNextTargetMsgSeqNum(this.getNextTargetMsgSeqNum() + 1);
            this.socket!.send(message.encode());
            this.messageBuffer.add(message.clone());
        } else {
            logError(
                `FIXParser (${this.protocol!.toUpperCase()}): -- Could not send message, socket not open`,
                message,
            );
        }
    }

    public isConnected(): boolean {
        return this.connected;
    }

    public close(): void {
        this.socket!.close();
        this.connected = false;
    }

    public stopHeartbeat(): void {
        clearInterval(this.heartBeatIntervalId!);
    }

    public startHeartbeat(heartBeatInterval: number = this.heartBeatInterval!): void {
        this.stopHeartbeat();
        log(`FIXParser (${this.protocol!.toUpperCase()}): -- Heartbeat configured to ${heartBeatInterval} seconds`);
        this.heartBeatInterval = heartBeatInterval;
        this.heartBeatIntervalId = setInterval(() => {
            const heartBeatMessage: Message = heartBeat(this);
            this.send(heartBeatMessage);
            log(`FIXParser (${this.protocol!.toUpperCase()}): >> sent Heartbeat`);
        }, this.heartBeatInterval * 1000);
    }
}

export { EncryptMethodEnum as EncryptMethod } from './fieldtypes/EncryptMethodEnum';
export { ExecTypeEnum as ExecType } from './fieldtypes/ExecTypeEnum';
export { FieldEnum as Fields } from './fieldtypes/FieldEnum';
export { HandlInstEnum as HandlInst } from './fieldtypes/HandlInstEnum';
export { MarketDepthEnum as MarketDepth } from './fieldtypes/MarketDepthEnum';
export { MDUpdateTypeEnum as MDUpdateType } from './fieldtypes/MDUpdateTypeEnum';
export { MDEntryTypeEnum as MDEntryType } from './fieldtypes/MDEntryTypeEnum';
export { MessageEnum as Messages } from './fieldtypes/MessageEnum';
export { OrderTypesEnum as OrderTypes } from './fieldtypes/OrderTypesEnum';
export { OrderStatusEnum as OrderStatus } from './fieldtypes/OrderStatusEnum';
export { AllocPositionEffectEnum as AllocPositionEffect } from './fieldtypes/AllocPositionEffectEnum';
export { SideEnum as Side } from './fieldtypes/SideEnum';
export { SubscriptionRequestTypeEnum as SubscriptionRequestType } from './fieldtypes/SubscriptionRequestTypeEnum';
export { TimeInForceEnum as TimeInForce } from './fieldtypes/TimeInForceEnum';
export { Constants };
export { Field };
export { Message };
export { FIXParserBrowser };

/**
 * Export FIXParser to the window object.
 */
(global as any).FIXParser = FIXParserBrowser;

/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright 2021 Victor Norgren
 * Released under the MIT license
 */
import { IFIXParser } from '../IFIXParser';
import { Message } from '../message/Message';
import { logWarning } from '../util/util';

export const handleSequence = (parser: IFIXParser, message: Message): void => {
    if (message.messageSequence !== parser.nextNumIn) {
        logWarning(
            `FIXServer (${parser.protocol!.toUpperCase()}): Expected MsgSeqNum ${parser.nextNumIn}, but got ${
                message.messageSequence
            }`,
        );
    }
};

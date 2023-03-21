/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright 2021 Victor Norgren
 * Released under the MIT license
 */
import { IFIXParser } from '../IFIXParser';
import { Message } from '../message/Message';
import { FieldEnum } from '../fieldtypes/FieldEnum';
import { log } from '../util/util';
import { Field } from '../fields/Field';
import { heartBeat } from '../messagetemplates/MessageTemplates';

export const handleTestRequest = (parser: IFIXParser, message: Message): void => {
    let heartBeatMessage: Message = heartBeat(parser);
    const testReqIdValue: string | null = message.getField(FieldEnum.TestReqID)
        ? message.getField(FieldEnum.TestReqID)!.value
        : null;
    if (testReqIdValue) {
        const testReqId: Field = new Field(FieldEnum.TestReqID, testReqIdValue);
        heartBeatMessage = heartBeat(parser, testReqId);
        parser.send(heartBeatMessage);
        log(
            `${
                parser.parserName
            } (${parser.protocol!.toUpperCase()}): >> responded to TestRequest with Heartbeat<TestReqID=${testReqIdValue}>`,
        );
    } else {
        parser.send(heartBeatMessage);
        log(`${parser.parserName} (${parser.protocol!.toUpperCase()}): >> responded to TestRequest with Heartbeat`);
    }
};

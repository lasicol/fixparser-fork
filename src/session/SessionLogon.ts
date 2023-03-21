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
import { log, logWarning } from '../util/util';
import { Field } from '../fields/Field';
import { MessageEnum } from '../fieldtypes/MessageEnum';
import { EncryptMethodEnum } from '../fieldtypes/EncryptMethodEnum';
import { MessageBuffer } from '../util/MessageBuffer';

export const handleLogon = (parser: IFIXParser, messageBuffer: MessageBuffer, message: Message): void => {
    if (parser.parserName === 'FIXServer') {
        const fixVersion: string | null = message.getField(FieldEnum.BeginString)!.value;
        let validSender: boolean = true;
        let validTarget: boolean = true;

        if (fixVersion) {
            log(`FIXServer (${parser.protocol!.toUpperCase()}): -- FIX version set to ${fixVersion}`);
            parser.fixVersion = fixVersion;
            parser.fixParser!.fixVersion = fixVersion;
        }

        const target: string | null = message.getField(FieldEnum.TargetCompID)
            ? message.getField(FieldEnum.TargetCompID)!.value.toString()
            : parser.sender;
        const sender: string | null = message.getField(FieldEnum.SenderCompID)
            ? message.getField(FieldEnum.SenderCompID)!.value.toString()
            : parser.target;
        if (target && target !== parser.sender) {
            logWarning(
                `FIXServer (${parser.protocol!.toUpperCase()}): -- Expected TargetCompID=${
                    parser.sender
                }, but got ${target}`,
            );
            validTarget = false;
        }
        if (sender && sender !== parser.target) {
            logWarning(
                `FIXServer (${parser.protocol!.toUpperCase()}): -- Expected SenderCompID=${
                    parser.target
                }, but got ${sender}`,
            );
            validSender = false;
        }

        if (validSender && validTarget) {
            const logonAcknowledge = parser.createMessage(
                new Field(FieldEnum.MsgType, MessageEnum.Logon),
                new Field(FieldEnum.MsgSeqNum, parser.getNextTargetMsgSeqNum()),
                new Field(FieldEnum.SenderCompID, sender),
                new Field(FieldEnum.SendingTime, parser.getTimestamp(new Date())),
                new Field(FieldEnum.TargetCompID, target),
                new Field(FieldEnum.ResetSeqNumFlag, 'Y'),
                new Field(FieldEnum.EncryptMethod, EncryptMethodEnum.None),
                new Field(
                    FieldEnum.HeartBtInt,
                    message.getField(FieldEnum.HeartBtInt)
                        ? (message.getField(FieldEnum.HeartBtInt)!.value as number)
                        : parser.heartBeatInterval!,
                ),
            );

            if (
                message.getField(FieldEnum.ResetSeqNumFlag) &&
                message.getField(FieldEnum.ResetSeqNumFlag)!.value.toString() === 'Y'
            ) {
                log(
                    `FIXServer (${parser.protocol!.toUpperCase()}): -- Logon contains ResetSeqNumFlag=Y, resetting sequence numbers to 1`,
                );
                parser.nextNumIn = 1;
                parser.setNextTargetMsgSeqNum(1);
                messageBuffer.clear();
            }

            parser.send(logonAcknowledge);
            log(`FIXServer (${parser.protocol!.toUpperCase()}): >> sent Logon acknowledge`);
            const heartBeatInterval = message.getField(FieldEnum.HeartBtInt)
                ? message.getField(FieldEnum.HeartBtInt)!.value
                : parser.heartBeatInterval;
            parser.startHeartbeat(heartBeatInterval);
        } else {
            const logonReject = parser.createMessage(
                new Field(FieldEnum.MsgType, MessageEnum.Logout),
                new Field(FieldEnum.MsgSeqNum, parser.getNextTargetMsgSeqNum()),
                new Field(FieldEnum.SenderCompID, validSender ? sender : 'INVALID_SENDER'),
                new Field(FieldEnum.SendingTime, parser.getTimestamp(new Date())),
                new Field(FieldEnum.TargetCompID, validTarget ? target : 'INVALID_TARGET'),
                new Field(FieldEnum.Text, 'Invalid Logon TARGET or SENDER.'),
            );
            parser.send(logonReject);
            logWarning(`FIXServer (${parser.protocol!.toUpperCase()}): >> sent Logout due to invalid Logon`);
            parser.stopHeartbeat();
            parser.close();
        }
    } else if (parser.parserName === 'FIXParser' || parser.parserName === 'FIXParserBrowser') {
        if (
            message.getField(FieldEnum.ResetSeqNumFlag) &&
            message.getField(FieldEnum.ResetSeqNumFlag)!.value.toString() === 'Y'
        ) {
            log(
                `FIXParser (${parser.protocol!.toUpperCase()}): -- Logon contains ResetSeqNumFlag=Y, resetting sequence numbers to 1`,
            );
            parser.nextNumIn = 1;
            parser.setNextTargetMsgSeqNum(2);
        }

        const heartBeatInterval = message.getField(FieldEnum.HeartBtInt)
            ? message.getField(FieldEnum.HeartBtInt)!.value
            : parser.heartBeatInterval;
        parser.startHeartbeat(heartBeatInterval);
    }
};

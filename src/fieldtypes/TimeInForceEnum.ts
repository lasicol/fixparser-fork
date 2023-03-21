/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright 2021 Victor Norgren
 * Released under the MIT license
 */
export enum TimeInForceEnum {
    Day = '0',
    GoodTillCancel = '1',
    AtTheOpening = '2',
    ImmediateOrCancel = '3',
    FillOrKill = '4',
    GoodTillCrossing = '5',
    GoodTillDate = '6',
    AtTheClose = '7',
    GoodThroughCrossing = '8',
    AtCrossing = '9',
    GoodForTime = 'A',
    GoodForAuction = 'B',
    GoodForThisMonth = 'C',
}

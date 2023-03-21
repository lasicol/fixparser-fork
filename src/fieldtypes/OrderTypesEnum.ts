/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright 2021 Victor Norgren
 * Released under the MIT license
 */
export enum OrderTypesEnum {
    Market = '1',
    Limit = '2',
    Stop = '3',
    StopLimit = '4',
    MarketOnClose = '5',
    WithOrWithout = '6',
    LimitOrBetter = '7',
    LimitWithOrWithout = '8',
    OnBasis = '9',
    OnClose = 'A',
    LimitOnClose = 'B',
    ForexMarket = 'C',
    PreviouslyQuoted = 'D',
    PreviouslyIndicated = 'E',
    ForexLimit = 'F',
    ForexSwap = 'G',
    ForexPreviouslyQuoted = 'H',
    Funari = 'I',
    MarketIfTouched = 'J',
    MarketWithLeftOverAsLimit = 'K',
    PreviousFundValuationPoint = 'L',
    NextFundValuationPoint = 'M',
    Pegged = 'P',
    CounterOrderSelection = 'Q',
    StopOnBidOrOffer = 'R',
    StopLimitOnBidOrOffer = 'S',
}

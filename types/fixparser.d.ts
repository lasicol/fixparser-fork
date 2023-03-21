/// <reference types="node" />
/// <reference types="ws" />
declare module 'src/fieldtypes/AllocPositionEffectEnum' {
    export enum AllocPositionEffectEnum {
        Open = 'O',
        Close = 'C',
        Rolled = 'R',
        Fifo = 'F',
    }
}
declare module 'src/fieldtypes/EncryptMethodEnum' {
    export enum EncryptMethodEnum {
        None = 0,
        PKCS = 1,
        DES = 2,
        PKCSDES = 3,
        PGPDES = 4,
        PGPDESMD5 = 5,
        PEM = 6,
    }
}
declare module 'src/fieldtypes/ExecTypeEnum' {
    export enum ExecTypeEnum {
        New = '0',
        PartialFill = '1',
        Fill = '2',
        DoneForDay = '3',
        Canceled = '4',
        Replaced = '5',
        PendingCancel = '6',
        Stopped = '7',
        Rejected = '8',
        Suspended = '9',
        PendingNew = 'A',
        Calculated = 'B',
        Expired = 'C',
        Restated = 'D',
        PendingReplace = 'E',
        Trade = 'F',
        TradeCorrect = 'G',
        TradeCancel = 'H',
        OrderStatus = 'I',
        TradeInClearing = 'J',
        TradeReleasedClearing = 'K',
        TriggeredBySystem = 'L',
        Locked = 'M',
        Released = 'N',
    }
}
declare module 'src/fieldtypes/FieldEnum' {
    export enum FieldEnum {
        Account = 1,
        AdvId = 2,
        AdvRefID = 3,
        AdvSide = 4,
        AdvTransType = 5,
        AvgPx = 6,
        BeginSeqNo = 7,
        BeginString = 8,
        BodyLength = 9,
        CheckSum = 10,
        ClOrdID = 11,
        Commission = 12,
        CommType = 13,
        CumQty = 14,
        Currency = 15,
        EndSeqNo = 16,
        ExecID = 17,
        ExecInst = 18,
        ExecRefID = 19,
        ExecTransType = 20,
        HandlInst = 21,
        SecurityIDSource = 22,
        IOIID = 23,
        IOIOthSvc = 24,
        IOIQltyInd = 25,
        IOIRefID = 26,
        IOIQty = 27,
        IOITransType = 28,
        LastCapacity = 29,
        LastMkt = 30,
        LastPx = 31,
        LastQty = 32,
        NoLinesOfText = 33,
        MsgSeqNum = 34,
        MsgType = 35,
        NewSeqNo = 36,
        OrderID = 37,
        OrderQty = 38,
        OrdStatus = 39,
        OrdType = 40,
        OrigClOrdID = 41,
        OrigTime = 42,
        PossDupFlag = 43,
        Price = 44,
        RefSeqNum = 45,
        RelatdSym = 46,
        Rule80A = 47,
        SecurityID = 48,
        SenderCompID = 49,
        SenderSubID = 50,
        SendingDate = 51,
        SendingTime = 52,
        Quantity = 53,
        Side = 54,
        Symbol = 55,
        TargetCompID = 56,
        TargetSubID = 57,
        Text = 58,
        TimeInForce = 59,
        TransactTime = 60,
        Urgency = 61,
        ValidUntilTime = 62,
        SettlType = 63,
        SettlDate = 64,
        SymbolSfx = 65,
        ListID = 66,
        ListSeqNo = 67,
        TotNoOrders = 68,
        ListExecInst = 69,
        AllocID = 70,
        AllocTransType = 71,
        RefAllocID = 72,
        NoOrders = 73,
        AvgPxPrecision = 74,
        TradeDate = 75,
        ExecBroker = 76,
        PositionEffect = 77,
        NoAllocs = 78,
        AllocAccount = 79,
        AllocQty = 80,
        ProcessCode = 81,
        NoRpts = 82,
        RptSeq = 83,
        CxlQty = 84,
        NoDlvyInst = 85,
        DlvyInst = 86,
        AllocStatus = 87,
        AllocRejCode = 88,
        Signature = 89,
        SecureDataLen = 90,
        SecureData = 91,
        BrokerOfCredit = 92,
        SignatureLength = 93,
        EmailType = 94,
        RawDataLength = 95,
        RawData = 96,
        PossResend = 97,
        EncryptMethod = 98,
        StopPx = 99,
        ExDestination = 100,
        CxlRejReason = 102,
        OrdRejReason = 103,
        IOIQualifier = 104,
        WaveNo = 105,
        Issuer = 106,
        SecurityDesc = 107,
        HeartBtInt = 108,
        ClientID = 109,
        MinQty = 110,
        MaxFloor = 111,
        TestReqID = 112,
        ReportToExch = 113,
        LocateReqd = 114,
        OnBehalfOfCompID = 115,
        OnBehalfOfSubID = 116,
        QuoteID = 117,
        NetMoney = 118,
        SettlCurrAmt = 119,
        SettlCurrency = 120,
        ForexReq = 121,
        OrigSendingTime = 122,
        GapFillFlag = 123,
        NoExecs = 124,
        CxlType = 125,
        ExpireTime = 126,
        DKReason = 127,
        DeliverToCompID = 128,
        DeliverToSubID = 129,
        IOINaturalFlag = 130,
        QuoteReqID = 131,
        BidPx = 132,
        OfferPx = 133,
        BidSize = 134,
        OfferSize = 135,
        NoMiscFees = 136,
        MiscFeeAmt = 137,
        MiscFeeCurr = 138,
        MiscFeeType = 139,
        PrevClosePx = 140,
        ResetSeqNumFlag = 141,
        SenderLocationID = 142,
        TargetLocationID = 143,
        OnBehalfOfLocationID = 144,
        DeliverToLocationID = 145,
        NoRelatedSym = 146,
        Subject = 147,
        Headline = 148,
        URLLink = 149,
        ExecType = 150,
        LeavesQty = 151,
        CashOrderQty = 152,
        AllocAvgPx = 153,
        AllocNetMoney = 154,
        SettlCurrFxRate = 155,
        SettlCurrFxRateCalc = 156,
        NumDaysInterest = 157,
        AccruedInterestRate = 158,
        AccruedInterestAmt = 159,
        SettlInstMode = 160,
        AllocText = 161,
        SettlInstID = 162,
        SettlInstTransType = 163,
        EmailThreadID = 164,
        SettlInstSource = 165,
        SettlLocation = 166,
        SecurityType = 167,
        EffectiveTime = 168,
        StandInstDbType = 169,
        StandInstDbName = 170,
        StandInstDbID = 171,
        SettlDeliveryType = 172,
        SettlDepositoryCode = 173,
        SettlBrkrCode = 174,
        SettlInstCode = 175,
        SecuritySettlAgentName = 176,
        SecuritySettlAgentCode = 177,
        SecuritySettlAgentAcctNum = 178,
        SecuritySettlAgentAcctName = 179,
        SecuritySettlAgentContactName = 180,
        SecuritySettlAgentContactPhone = 181,
        CashSettlAgentName = 182,
        CashSettlAgentCode = 183,
        CashSettlAgentAcctNum = 184,
        CashSettlAgentAcctName = 185,
        CashSettlAgentContactName = 186,
        CashSettlAgentContactPhone = 187,
        BidSpotRate = 188,
        BidForwardPoints = 189,
        OfferSpotRate = 190,
        OfferForwardPoints = 191,
        OrderQty2 = 192,
        SettlDate2 = 193,
        LastSpotRate = 194,
        LastForwardPoints = 195,
        AllocLinkID = 196,
        AllocLinkType = 197,
        SecondaryOrderID = 198,
        NoIOIQualifiers = 199,
        MaturityMonthYear = 200,
        PutOrCall = 201,
        StrikePrice = 202,
        CoveredOrUncovered = 203,
        CustomerOrFirm = 204,
        MaturityDay = 205,
        OptAttribute = 206,
        SecurityExchange = 207,
        NotifyBrokerOfCredit = 208,
        AllocHandlInst = 209,
        MaxShow = 210,
        PegOffsetValue = 211,
        XmlDataLen = 212,
        XmlData = 213,
        SettlInstRefID = 214,
        NoRoutingIDs = 215,
        RoutingType = 216,
        RoutingID = 217,
        Spread = 218,
        Benchmark = 219,
        BenchmarkCurveCurrency = 220,
        BenchmarkCurveName = 221,
        BenchmarkCurvePoint = 222,
        CouponRate = 223,
        CouponPaymentDate = 224,
        IssueDate = 225,
        RepurchaseTerm = 226,
        RepurchaseRate = 227,
        Factor = 228,
        TradeOriginationDate = 229,
        ExDate = 230,
        ContractMultiplier = 231,
        NoStipulations = 232,
        StipulationType = 233,
        StipulationValue = 234,
        YieldType = 235,
        Yield = 236,
        TotalTakedown = 237,
        Concession = 238,
        RepoCollateralSecurityType = 239,
        RedemptionDate = 240,
        UnderlyingCouponPaymentDate = 241,
        UnderlyingIssueDate = 242,
        UnderlyingRepoCollateralSecurityType = 243,
        UnderlyingRepurchaseTerm = 244,
        UnderlyingRepurchaseRate = 245,
        UnderlyingFactor = 246,
        UnderlyingRedemptionDate = 247,
        LegCouponPaymentDate = 248,
        LegIssueDate = 249,
        LegRepoCollateralSecurityType = 250,
        LegRepurchaseTerm = 251,
        LegRepurchaseRate = 252,
        LegFactor = 253,
        LegRedemptionDate = 254,
        CreditRating = 255,
        UnderlyingCreditRating = 256,
        LegCreditRating = 257,
        TradedFlatSwitch = 258,
        BasisFeatureDate = 259,
        BasisFeaturePrice = 260,
        MDReqID = 262,
        SubscriptionRequestType = 263,
        MarketDepth = 264,
        MDUpdateType = 265,
        AggregatedBook = 266,
        NoMDEntryTypes = 267,
        NoMDEntries = 268,
        MDEntryType = 269,
        MDEntryPx = 270,
        MDEntrySize = 271,
        MDEntryDate = 272,
        MDEntryTime = 273,
        TickDirection = 274,
        MDMkt = 275,
        QuoteCondition = 276,
        TradeCondition = 277,
        MDEntryID = 278,
        MDUpdateAction = 279,
        MDEntryRefID = 280,
        MDReqRejReason = 281,
        MDEntryOriginator = 282,
        LocationID = 283,
        DeskID = 284,
        DeleteReason = 285,
        OpenCloseSettlFlag = 286,
        SellerDays = 287,
        MDEntryBuyer = 288,
        MDEntrySeller = 289,
        MDEntryPositionNo = 290,
        FinancialStatus = 291,
        CorporateAction = 292,
        DefBidSize = 293,
        DefOfferSize = 294,
        NoQuoteEntries = 295,
        NoQuoteSets = 296,
        QuoteStatus = 297,
        QuoteCancelType = 298,
        QuoteEntryID = 299,
        QuoteRejectReason = 300,
        QuoteResponseLevel = 301,
        QuoteSetID = 302,
        QuoteRequestType = 303,
        TotNoQuoteEntries = 304,
        UnderlyingSecurityIDSource = 305,
        UnderlyingIssuer = 306,
        UnderlyingSecurityDesc = 307,
        UnderlyingSecurityExchange = 308,
        UnderlyingSecurityID = 309,
        UnderlyingSecurityType = 310,
        UnderlyingSymbol = 311,
        UnderlyingSymbolSfx = 312,
        UnderlyingMaturityMonthYear = 313,
        UnderlyingMaturityDay = 314,
        UnderlyingPutOrCall = 315,
        UnderlyingStrikePrice = 316,
        UnderlyingOptAttribute = 317,
        UnderlyingCurrency = 318,
        RatioQty = 319,
        SecurityReqID = 320,
        SecurityRequestType = 321,
        SecurityResponseID = 322,
        SecurityResponseType = 323,
        SecurityStatusReqID = 324,
        UnsolicitedIndicator = 325,
        SecurityTradingStatus = 326,
        HaltReason = 327,
        InViewOfCommon = 328,
        DueToRelated = 329,
        BuyVolume = 330,
        SellVolume = 331,
        HighPx = 332,
        LowPx = 333,
        Adjustment = 334,
        TradSesReqID = 335,
        TradingSessionID = 336,
        ContraTrader = 337,
        TradSesMethod = 338,
        TradSesMode = 339,
        TradSesStatus = 340,
        TradSesStartTime = 341,
        TradSesOpenTime = 342,
        TradSesPreCloseTime = 343,
        TradSesCloseTime = 344,
        TradSesEndTime = 345,
        NumberOfOrders = 346,
        MessageEncoding = 347,
        EncodedIssuerLen = 348,
        EncodedIssuer = 349,
        EncodedSecurityDescLen = 350,
        EncodedSecurityDesc = 351,
        EncodedListExecInstLen = 352,
        EncodedListExecInst = 353,
        EncodedTextLen = 354,
        EncodedText = 355,
        EncodedSubjectLen = 356,
        EncodedSubject = 357,
        EncodedHeadlineLen = 358,
        EncodedHeadline = 359,
        EncodedAllocTextLen = 360,
        EncodedAllocText = 361,
        EncodedUnderlyingIssuerLen = 362,
        EncodedUnderlyingIssuer = 363,
        EncodedUnderlyingSecurityDescLen = 364,
        EncodedUnderlyingSecurityDesc = 365,
        AllocPrice = 366,
        QuoteSetValidUntilTime = 367,
        QuoteEntryRejectReason = 368,
        LastMsgSeqNumProcessed = 369,
        OnBehalfOfSendingTime = 370,
        RefTagID = 371,
        RefMsgType = 372,
        SessionRejectReason = 373,
        BidRequestTransType = 374,
        ContraBroker = 375,
        ComplianceID = 376,
        SolicitedFlag = 377,
        ExecRestatementReason = 378,
        BusinessRejectRefID = 379,
        BusinessRejectReason = 380,
        GrossTradeAmt = 381,
        NoContraBrokers = 382,
        MaxMessageSize = 383,
        NoMsgTypes = 384,
        MsgDirection = 385,
        NoTradingSessions = 386,
        TotalVolumeTraded = 387,
        DiscretionInst = 388,
        DiscretionOffsetValue = 389,
        BidID = 390,
        ClientBidID = 391,
        ListName = 392,
        TotNoRelatedSym = 393,
        BidType = 394,
        NumTickets = 395,
        SideValue1 = 396,
        SideValue2 = 397,
        NoBidDescriptors = 398,
        BidDescriptorType = 399,
        BidDescriptor = 400,
        SideValueInd = 401,
        LiquidityPctLow = 402,
        LiquidityPctHigh = 403,
        LiquidityValue = 404,
        EFPTrackingError = 405,
        FairValue = 406,
        OutsideIndexPct = 407,
        ValueOfFutures = 408,
        LiquidityIndType = 409,
        WtAverageLiquidity = 410,
        ExchangeForPhysical = 411,
        OutMainCntryUIndex = 412,
        CrossPercent = 413,
        ProgRptReqs = 414,
        ProgPeriodInterval = 415,
        IncTaxInd = 416,
        NumBidders = 417,
        BidTradeType = 418,
        BasisPxType = 419,
        NoBidComponents = 420,
        Country = 421,
        TotNoStrikes = 422,
        PriceType = 423,
        DayOrderQty = 424,
        DayCumQty = 425,
        DayAvgPx = 426,
        GTBookingInst = 427,
        NoStrikes = 428,
        ListStatusType = 429,
        NetGrossInd = 430,
        ListOrderStatus = 431,
        ExpireDate = 432,
        ListExecInstType = 433,
        CxlRejResponseTo = 434,
        UnderlyingCouponRate = 435,
        UnderlyingContractMultiplier = 436,
        ContraTradeQty = 437,
        ContraTradeTime = 438,
        ClearingFirm = 439,
        ClearingAccount = 440,
        LiquidityNumSecurities = 441,
        MultiLegReportingType = 442,
        StrikeTime = 443,
        ListStatusText = 444,
        EncodedListStatusTextLen = 445,
        EncodedListStatusText = 446,
        PartyIDSource = 447,
        PartyID = 448,
        TotalVolumeTradedDate = 449,
        TotalVolumeTradedTime = 450,
        NetChgPrevDay = 451,
        PartyRole = 452,
        NoPartyIDs = 453,
        NoSecurityAltID = 454,
        SecurityAltID = 455,
        SecurityAltIDSource = 456,
        NoUnderlyingSecurityAltID = 457,
        UnderlyingSecurityAltID = 458,
        UnderlyingSecurityAltIDSource = 459,
        Product = 460,
        CFICode = 461,
        UnderlyingProduct = 462,
        UnderlyingCFICode = 463,
        TestMessageIndicator = 464,
        QuantityType = 465,
        BookingRefID = 466,
        IndividualAllocID = 467,
        RoundingDirection = 468,
        RoundingModulus = 469,
        CountryOfIssue = 470,
        StateOrProvinceOfIssue = 471,
        LocaleOfIssue = 472,
        NoRegistDtls = 473,
        MailingDtls = 474,
        InvestorCountryOfResidence = 475,
        PaymentRef = 476,
        DistribPaymentMethod = 477,
        CashDistribCurr = 478,
        CommCurrency = 479,
        CancellationRights = 480,
        MoneyLaunderingStatus = 481,
        MailingInst = 482,
        TransBkdTime = 483,
        ExecPriceType = 484,
        ExecPriceAdjustment = 485,
        DateOfBirth = 486,
        TradeReportTransType = 487,
        CardHolderName = 488,
        CardNumber = 489,
        CardExpDate = 490,
        CardIssNum = 491,
        PaymentMethod = 492,
        RegistAcctType = 493,
        Designation = 494,
        TaxAdvantageType = 495,
        RegistRejReasonText = 496,
        FundRenewWaiv = 497,
        CashDistribAgentName = 498,
        CashDistribAgentCode = 499,
        CashDistribAgentAcctNumber = 500,
        CashDistribPayRef = 501,
        CashDistribAgentAcctName = 502,
        CardStartDate = 503,
        PaymentDate = 504,
        PaymentRemitterID = 505,
        RegistStatus = 506,
        RegistRejReasonCode = 507,
        RegistRefID = 508,
        RegistDtls = 509,
        NoDistribInsts = 510,
        RegistEmail = 511,
        DistribPercentage = 512,
        RegistID = 513,
        RegistTransType = 514,
        ExecValuationPoint = 515,
        OrderPercent = 516,
        OwnershipType = 517,
        NoContAmts = 518,
        ContAmtType = 519,
        ContAmtValue = 520,
        ContAmtCurr = 521,
        OwnerType = 522,
        PartySubID = 523,
        NestedPartyID = 524,
        NestedPartyIDSource = 525,
        SecondaryClOrdID = 526,
        SecondaryExecID = 527,
        OrderCapacity = 528,
        OrderRestrictions = 529,
        MassCancelRequestType = 530,
        MassCancelResponse = 531,
        MassCancelRejectReason = 532,
        TotalAffectedOrders = 533,
        NoAffectedOrders = 534,
        AffectedOrderID = 535,
        AffectedSecondaryOrderID = 536,
        QuoteType = 537,
        NestedPartyRole = 538,
        NoNestedPartyIDs = 539,
        TotalAccruedInterestAmt = 540,
        MaturityDate = 541,
        UnderlyingMaturityDate = 542,
        InstrRegistry = 543,
        CashMargin = 544,
        NestedPartySubID = 545,
        Scope = 546,
        MDImplicitDelete = 547,
        CrossID = 548,
        CrossType = 549,
        CrossPrioritization = 550,
        OrigCrossID = 551,
        NoSides = 552,
        Username = 553,
        Password = 554,
        NoLegs = 555,
        LegCurrency = 556,
        TotNoSecurityTypes = 557,
        NoSecurityTypes = 558,
        SecurityListRequestType = 559,
        SecurityRequestResult = 560,
        RoundLot = 561,
        MinTradeVol = 562,
        MultiLegRptTypeReq = 563,
        LegPositionEffect = 564,
        LegCoveredOrUncovered = 565,
        LegPrice = 566,
        TradSesStatusRejReason = 567,
        TradeRequestID = 568,
        TradeRequestType = 569,
        PreviouslyReported = 570,
        TradeReportID = 571,
        TradeReportRefID = 572,
        MatchStatus = 573,
        MatchType = 574,
        OddLot = 575,
        NoClearingInstructions = 576,
        ClearingInstruction = 577,
        TradeInputSource = 578,
        TradeInputDevice = 579,
        NoDates = 580,
        AccountType = 581,
        CustOrderCapacity = 582,
        ClOrdLinkID = 583,
        MassStatusReqID = 584,
        MassStatusReqType = 585,
        OrigOrdModTime = 586,
        LegSettlType = 587,
        LegSettlDate = 588,
        DayBookingInst = 589,
        BookingUnit = 590,
        PreallocMethod = 591,
        UnderlyingCountryOfIssue = 592,
        UnderlyingStateOrProvinceOfIssue = 593,
        UnderlyingLocaleOfIssue = 594,
        UnderlyingInstrRegistry = 595,
        LegCountryOfIssue = 596,
        LegStateOrProvinceOfIssue = 597,
        LegLocaleOfIssue = 598,
        LegInstrRegistry = 599,
        LegSymbol = 600,
        LegSymbolSfx = 601,
        LegSecurityID = 602,
        LegSecurityIDSource = 603,
        NoLegSecurityAltID = 604,
        LegSecurityAltID = 605,
        LegSecurityAltIDSource = 606,
        LegProduct = 607,
        LegCFICode = 608,
        LegSecurityType = 609,
        LegMaturityMonthYear = 610,
        LegMaturityDate = 611,
        LegStrikePrice = 612,
        LegOptAttribute = 613,
        LegContractMultiplier = 614,
        LegCouponRate = 615,
        LegSecurityExchange = 616,
        LegIssuer = 617,
        EncodedLegIssuerLen = 618,
        EncodedLegIssuer = 619,
        LegSecurityDesc = 620,
        EncodedLegSecurityDescLen = 621,
        EncodedLegSecurityDesc = 622,
        LegRatioQty = 623,
        LegSide = 624,
        TradingSessionSubID = 625,
        AllocType = 626,
        NoHops = 627,
        HopCompID = 628,
        HopSendingTime = 629,
        HopRefID = 630,
        MidPx = 631,
        BidYield = 632,
        MidYield = 633,
        OfferYield = 634,
        ClearingFeeIndicator = 635,
        WorkingIndicator = 636,
        LegLastPx = 637,
        PriorityIndicator = 638,
        PriceImprovement = 639,
        Price2 = 640,
        LastForwardPoints2 = 641,
        BidForwardPoints2 = 642,
        OfferForwardPoints2 = 643,
        RFQReqID = 644,
        MktBidPx = 645,
        MktOfferPx = 646,
        MinBidSize = 647,
        MinOfferSize = 648,
        QuoteStatusReqID = 649,
        LegalConfirm = 650,
        UnderlyingLastPx = 651,
        UnderlyingLastQty = 652,
        SecDefStatus = 653,
        LegRefID = 654,
        ContraLegRefID = 655,
        SettlCurrBidFxRate = 656,
        SettlCurrOfferFxRate = 657,
        QuoteRequestRejectReason = 658,
        SideComplianceID = 659,
        AcctIDSource = 660,
        AllocAcctIDSource = 661,
        BenchmarkPrice = 662,
        BenchmarkPriceType = 663,
        ConfirmID = 664,
        ConfirmStatus = 665,
        ConfirmTransType = 666,
        ContractSettlMonth = 667,
        DeliveryForm = 668,
        LastParPx = 669,
        NoLegAllocs = 670,
        LegAllocAccount = 671,
        LegIndividualAllocID = 672,
        LegAllocQty = 673,
        LegAllocAcctIDSource = 674,
        LegSettlCurrency = 675,
        LegBenchmarkCurveCurrency = 676,
        LegBenchmarkCurveName = 677,
        LegBenchmarkCurvePoint = 678,
        LegBenchmarkPrice = 679,
        LegBenchmarkPriceType = 680,
        LegBidPx = 681,
        LegIOIQty = 682,
        NoLegStipulations = 683,
        LegOfferPx = 684,
        LegOrderQty = 685,
        LegPriceType = 686,
        LegQty = 687,
        LegStipulationType = 688,
        LegStipulationValue = 689,
        LegSwapType = 690,
        Pool = 691,
        QuotePriceType = 692,
        QuoteRespID = 693,
        QuoteRespType = 694,
        QuoteQualifier = 695,
        YieldRedemptionDate = 696,
        YieldRedemptionPrice = 697,
        YieldRedemptionPriceType = 698,
        BenchmarkSecurityID = 699,
        ReversalIndicator = 700,
        YieldCalcDate = 701,
        NoPositions = 702,
        PosType = 703,
        LongQty = 704,
        ShortQty = 705,
        PosQtyStatus = 706,
        PosAmtType = 707,
        PosAmt = 708,
        PosTransType = 709,
        PosReqID = 710,
        NoUnderlyings = 711,
        PosMaintAction = 712,
        OrigPosReqRefID = 713,
        PosMaintRptRefID = 714,
        ClearingBusinessDate = 715,
        SettlSessID = 716,
        SettlSessSubID = 717,
        AdjustmentType = 718,
        ContraryInstructionIndicator = 719,
        PriorSpreadIndicator = 720,
        PosMaintRptID = 721,
        PosMaintStatus = 722,
        PosMaintResult = 723,
        PosReqType = 724,
        ResponseTransportType = 725,
        ResponseDestination = 726,
        TotalNumPosReports = 727,
        PosReqResult = 728,
        PosReqStatus = 729,
        SettlPrice = 730,
        SettlPriceType = 731,
        UnderlyingSettlPrice = 732,
        UnderlyingSettlPriceType = 733,
        PriorSettlPrice = 734,
        NoQuoteQualifiers = 735,
        AllocSettlCurrency = 736,
        AllocSettlCurrAmt = 737,
        InterestAtMaturity = 738,
        LegDatedDate = 739,
        LegPool = 740,
        AllocInterestAtMaturity = 741,
        AllocAccruedInterestAmt = 742,
        DeliveryDate = 743,
        AssignmentMethod = 744,
        AssignmentUnit = 745,
        OpenInterest = 746,
        ExerciseMethod = 747,
        TotNumTradeReports = 748,
        TradeRequestResult = 749,
        TradeRequestStatus = 750,
        TradeReportRejectReason = 751,
        SideMultiLegReportingType = 752,
        NoPosAmt = 753,
        AutoAcceptIndicator = 754,
        AllocReportID = 755,
        NoNested2PartyIDs = 756,
        Nested2PartyID = 757,
        Nested2PartyIDSource = 758,
        Nested2PartyRole = 759,
        Nested2PartySubID = 760,
        BenchmarkSecurityIDSource = 761,
        SecuritySubType = 762,
        UnderlyingSecuritySubType = 763,
        LegSecuritySubType = 764,
        AllowableOneSidednessPct = 765,
        AllowableOneSidednessValue = 766,
        AllowableOneSidednessCurr = 767,
        NoTrdRegTimestamps = 768,
        TrdRegTimestamp = 769,
        TrdRegTimestampType = 770,
        TrdRegTimestampOrigin = 771,
        ConfirmRefID = 772,
        ConfirmType = 773,
        ConfirmRejReason = 774,
        BookingType = 775,
        IndividualAllocRejCode = 776,
        SettlInstMsgID = 777,
        NoSettlInst = 778,
        LastUpdateTime = 779,
        AllocSettlInstType = 780,
        NoSettlPartyIDs = 781,
        SettlPartyID = 782,
        SettlPartyIDSource = 783,
        SettlPartyRole = 784,
        SettlPartySubID = 785,
        SettlPartySubIDType = 786,
        DlvyInstType = 787,
        TerminationType = 788,
        NextExpectedMsgSeqNum = 789,
        OrdStatusReqID = 790,
        SettlInstReqID = 791,
        SettlInstReqRejCode = 792,
        SecondaryAllocID = 793,
        AllocReportType = 794,
        AllocReportRefID = 795,
        AllocCancReplaceReason = 796,
        CopyMsgIndicator = 797,
        AllocAccountType = 798,
        OrderAvgPx = 799,
        OrderBookingQty = 800,
        NoSettlPartySubIDs = 801,
        NoPartySubIDs = 802,
        PartySubIDType = 803,
        NoNestedPartySubIDs = 804,
        NestedPartySubIDType = 805,
        NoNested2PartySubIDs = 806,
        Nested2PartySubIDType = 807,
        AllocIntermedReqType = 808,
        NoUsernames = 809,
        UnderlyingPx = 810,
        PriceDelta = 811,
        ApplQueueMax = 812,
        ApplQueueDepth = 813,
        ApplQueueResolution = 814,
        ApplQueueAction = 815,
        NoAltMDSource = 816,
        AltMDSourceID = 817,
        SecondaryTradeReportID = 818,
        AvgPxIndicator = 819,
        TradeLinkID = 820,
        OrderInputDevice = 821,
        UnderlyingTradingSessionID = 822,
        UnderlyingTradingSessionSubID = 823,
        TradeLegRefID = 824,
        ExchangeRule = 825,
        TradeAllocIndicator = 826,
        ExpirationCycle = 827,
        TrdType = 828,
        TrdSubType = 829,
        TransferReason = 830,
        AsgnReqID = 831,
        TotNumAssignmentReports = 832,
        AsgnRptID = 833,
        ThresholdAmount = 834,
        PegMoveType = 835,
        PegOffsetType = 836,
        PegLimitType = 837,
        PegRoundDirection = 838,
        PeggedPrice = 839,
        PegScope = 840,
        DiscretionMoveType = 841,
        DiscretionOffsetType = 842,
        DiscretionLimitType = 843,
        DiscretionRoundDirection = 844,
        DiscretionPrice = 845,
        DiscretionScope = 846,
        TargetStrategy = 847,
        TargetStrategyParameters = 848,
        ParticipationRate = 849,
        TargetStrategyPerformance = 850,
        LastLiquidityInd = 851,
        PublishTrdIndicator = 852,
        ShortSaleReason = 853,
        QtyType = 854,
        SecondaryTrdType = 855,
        TradeReportType = 856,
        AllocNoOrdersType = 857,
        SharedCommission = 858,
        ConfirmReqID = 859,
        AvgParPx = 860,
        ReportedPx = 861,
        NoCapacities = 862,
        OrderCapacityQty = 863,
        NoEvents = 864,
        EventType = 865,
        EventDate = 866,
        EventPx = 867,
        EventText = 868,
        PctAtRisk = 869,
        NoInstrAttrib = 870,
        InstrAttribType = 871,
        InstrAttribValue = 872,
        DatedDate = 873,
        InterestAccrualDate = 874,
        CPProgram = 875,
        CPRegType = 876,
        UnderlyingCPProgram = 877,
        UnderlyingCPRegType = 878,
        UnderlyingQty = 879,
        TrdMatchID = 880,
        SecondaryTradeReportRefID = 881,
        UnderlyingDirtyPrice = 882,
        UnderlyingEndPrice = 883,
        UnderlyingStartValue = 884,
        UnderlyingCurrentValue = 885,
        UnderlyingEndValue = 886,
        NoUnderlyingStips = 887,
        UnderlyingStipType = 888,
        UnderlyingStipValue = 889,
        MaturityNetMoney = 890,
        MiscFeeBasis = 891,
        TotNoAllocs = 892,
        LastFragment = 893,
        CollReqID = 894,
        CollAsgnReason = 895,
        CollInquiryQualifier = 896,
        NoTrades = 897,
        MarginRatio = 898,
        MarginExcess = 899,
        TotalNetValue = 900,
        CashOutstanding = 901,
        CollAsgnID = 902,
        CollAsgnTransType = 903,
        CollRespID = 904,
        CollAsgnRespType = 905,
        CollAsgnRejectReason = 906,
        CollAsgnRefID = 907,
        CollRptID = 908,
        CollInquiryID = 909,
        CollStatus = 910,
        TotNumReports = 911,
        LastRptRequested = 912,
        AgreementDesc = 913,
        AgreementID = 914,
        AgreementDate = 915,
        StartDate = 916,
        EndDate = 917,
        AgreementCurrency = 918,
        DeliveryType = 919,
        EndAccruedInterestAmt = 920,
        StartCash = 921,
        EndCash = 922,
        UserRequestID = 923,
        UserRequestType = 924,
        NewPassword = 925,
        UserStatus = 926,
        UserStatusText = 927,
        StatusValue = 928,
        StatusText = 929,
        RefCompID = 930,
        RefSubID = 931,
        NetworkResponseID = 932,
        NetworkRequestID = 933,
        LastNetworkResponseID = 934,
        NetworkRequestType = 935,
        NoCompIDs = 936,
        NetworkStatusResponseType = 937,
        NoCollInquiryQualifier = 938,
        TrdRptStatus = 939,
        AffirmStatus = 940,
        UnderlyingStrikeCurrency = 941,
        LegStrikeCurrency = 942,
        TimeBracket = 943,
        CollAction = 944,
        CollInquiryStatus = 945,
        CollInquiryResult = 946,
        StrikeCurrency = 947,
        NoNested3PartyIDs = 948,
        Nested3PartyID = 949,
        Nested3PartyIDSource = 950,
        Nested3PartyRole = 951,
        NoNested3PartySubIDs = 952,
        Nested3PartySubID = 953,
        Nested3PartySubIDType = 954,
        LegContractSettlMonth = 955,
        LegInterestAccrualDate = 956,
        NoStrategyParameters = 957,
        StrategyParameterName = 958,
        StrategyParameterType = 959,
        StrategyParameterValue = 960,
        HostCrossID = 961,
        SideTimeInForce = 962,
        MDReportID = 963,
        SecurityReportID = 964,
        SecurityStatus = 965,
        SettleOnOpenFlag = 966,
        StrikeMultiplier = 967,
        StrikeValue = 968,
        MinPriceIncrement = 969,
        PositionLimit = 970,
        NTPositionLimit = 971,
        UnderlyingAllocationPercent = 972,
        UnderlyingCashAmount = 973,
        UnderlyingCashType = 974,
        UnderlyingSettlementType = 975,
        QuantityDate = 976,
        ContIntRptID = 977,
        LateIndicator = 978,
        InputSource = 979,
        SecurityUpdateAction = 980,
        NoExpiration = 981,
        ExpirationQtyType = 982,
        ExpQty = 983,
        NoUnderlyingAmounts = 984,
        UnderlyingPayAmount = 985,
        UnderlyingCollectAmount = 986,
        UnderlyingSettlementDate = 987,
        UnderlyingSettlementStatus = 988,
        SecondaryIndividualAllocID = 989,
        LegReportID = 990,
        RndPx = 991,
        IndividualAllocType = 992,
        AllocCustomerCapacity = 993,
        TierCode = 994,
        UnitOfMeasure = 996,
        TimeUnit = 997,
        UnderlyingUnitOfMeasure = 998,
        LegUnitOfMeasure = 999,
        UnderlyingTimeUnit = 1000,
        LegTimeUnit = 1001,
        AllocMethod = 1002,
        TradeID = 1003,
        SideTradeReportID = 1005,
        SideFillStationCd = 1006,
        SideReasonCd = 1007,
        SideTrdSubTyp = 1008,
        SideQty = 1009,
        MessageEventSource = 1011,
        SideTrdRegTimestamp = 1012,
        SideTrdRegTimestampType = 1013,
        SideTrdRegTimestampSrc = 1014,
        AsOfIndicator = 1015,
        NoSideTrdRegTS = 1016,
        LegOptionRatio = 1017,
        NoInstrumentParties = 1018,
        InstrumentPartyID = 1019,
        TradeVolume = 1020,
        MDBookType = 1021,
        MDFeedType = 1022,
        MDPriceLevel = 1023,
        MDOriginType = 1024,
        FirstPx = 1025,
        MDEntrySpotRate = 1026,
        MDEntryForwardPoints = 1027,
        ManualOrderIndicator = 1028,
        CustDirectedOrder = 1029,
        ReceivedDeptID = 1030,
        CustOrderHandlingInst = 1031,
        OrderHandlingInstSource = 1032,
        DeskType = 1033,
        DeskTypeSource = 1034,
        DeskOrderHandlingInst = 1035,
        ExecAckStatus = 1036,
        UnderlyingDeliveryAmount = 1037,
        UnderlyingCapValue = 1038,
        UnderlyingSettlMethod = 1039,
        SecondaryTradeID = 1040,
        FirmTradeID = 1041,
        SecondaryFirmTradeID = 1042,
        CollApplType = 1043,
        UnderlyingAdjustedQuantity = 1044,
        UnderlyingFXRate = 1045,
        UnderlyingFXRateCalc = 1046,
        AllocPositionEffect = 1047,
        DealingCapacity = 1048,
        InstrmtAssignmentMethod = 1049,
        InstrumentPartyIDSource = 1050,
        InstrumentPartyRole = 1051,
        NoInstrumentPartySubIDs = 1052,
        InstrumentPartySubID = 1053,
        InstrumentPartySubIDType = 1054,
        PositionCurrency = 1055,
        CalculatedCcyLastQty = 1056,
        AggressorIndicator = 1057,
        NoUndlyInstrumentParties = 1058,
        UndlyInstrumentPartyID = 1059,
        UndlyInstrumentPartyIDSource = 1060,
        UndlyInstrumentPartyRole = 1061,
        NoUndlyInstrumentPartySubIDs = 1062,
        UndlyInstrumentPartySubID = 1063,
        UndlyInstrumentPartySubIDType = 1064,
        BidSwapPoints = 1065,
        OfferSwapPoints = 1066,
        LegBidForwardPoints = 1067,
        LegOfferForwardPoints = 1068,
        SwapPoints = 1069,
        MDQuoteType = 1070,
        LastSwapPoints = 1071,
        SideGrossTradeAmt = 1072,
        LegLastForwardPoints = 1073,
        LegCalculatedCcyLastQty = 1074,
        LegGrossTradeAmt = 1075,
        MaturityTime = 1079,
        RefOrderID = 1080,
        RefOrderIDSource = 1081,
        SecondaryDisplayQty = 1082,
        DisplayWhen = 1083,
        DisplayMethod = 1084,
        DisplayLowQty = 1085,
        DisplayHighQty = 1086,
        DisplayMinIncr = 1087,
        RefreshQty = 1088,
        MatchIncrement = 1089,
        MaxPriceLevels = 1090,
        PreTradeAnonymity = 1091,
        PriceProtectionScope = 1092,
        LotType = 1093,
        PegPriceType = 1094,
        PeggedRefPrice = 1095,
        PegSecurityIDSource = 1096,
        PegSecurityID = 1097,
        PegSymbol = 1098,
        PegSecurityDesc = 1099,
        TriggerType = 1100,
        TriggerAction = 1101,
        TriggerPrice = 1102,
        TriggerSymbol = 1103,
        TriggerSecurityID = 1104,
        TriggerSecurityIDSource = 1105,
        TriggerSecurityDesc = 1106,
        TriggerPriceType = 1107,
        TriggerPriceTypeScope = 1108,
        TriggerPriceDirection = 1109,
        TriggerNewPrice = 1110,
        TriggerOrderType = 1111,
        TriggerNewQty = 1112,
        TriggerTradingSessionID = 1113,
        TriggerTradingSessionSubID = 1114,
        OrderCategory = 1115,
        NoRootPartyIDs = 1116,
        RootPartyID = 1117,
        RootPartyIDSource = 1118,
        RootPartyRole = 1119,
        NoRootPartySubIDs = 1120,
        RootPartySubID = 1121,
        RootPartySubIDType = 1122,
        TradeHandlingInstr = 1123,
        OrigTradeHandlingInstr = 1124,
        OrigTradeDate = 1125,
        OrigTradeID = 1126,
        OrigSecondaryTradeID = 1127,
        ApplVerID = 1128,
        CstmApplVerID = 1129,
        RefApplVerID = 1130,
        RefCstmApplVerID = 1131,
        TZTransactTime = 1132,
        ExDestinationIDSource = 1133,
        ReportedPxDiff = 1134,
        RptSys = 1135,
        AllocClearingFeeIndicator = 1136,
        DefaultApplVerID = 1137,
        DisplayQty = 1138,
        ExchangeSpecialInstructions = 1139,
        MaxTradeVol = 1140,
        NoMDFeedTypes = 1141,
        MatchAlgorithm = 1142,
        MaxPriceVariation = 1143,
        ImpliedMarketIndicator = 1144,
        EventTime = 1145,
        MinPriceIncrementAmount = 1146,
        UnitOfMeasureQty = 1147,
        LowLimitPrice = 1148,
        HighLimitPrice = 1149,
        TradingReferencePrice = 1150,
        SecurityGroup = 1151,
        LegNumber = 1152,
        SettlementCycleNo = 1153,
        SideCurrency = 1154,
        SideSettlCurrency = 1155,
        ApplExtID = 1156,
        CcyAmt = 1157,
        NoSettlDetails = 1158,
        SettlObligMode = 1159,
        SettlObligMsgID = 1160,
        SettlObligID = 1161,
        SettlObligTransType = 1162,
        SettlObligRefID = 1163,
        SettlObligSource = 1164,
        NoSettlOblig = 1165,
        QuoteMsgID = 1166,
        QuoteEntryStatus = 1167,
        TotNoCxldQuotes = 1168,
        TotNoAccQuotes = 1169,
        TotNoRejQuotes = 1170,
        PrivateQuote = 1171,
        RespondentType = 1172,
        MDSubBookType = 1173,
        SecurityTradingEvent = 1174,
        NoStatsIndicators = 1175,
        StatsType = 1176,
        NoOfSecSizes = 1177,
        MDSecSizeType = 1178,
        MDSecSize = 1179,
        ApplID = 1180,
        ApplSeqNum = 1181,
        ApplBegSeqNum = 1182,
        ApplEndSeqNum = 1183,
        SecurityXMLLen = 1184,
        SecurityXML = 1185,
        SecurityXMLSchema = 1186,
        RefreshIndicator = 1187,
        Volatility = 1188,
        TimeToExpiration = 1189,
        RiskFreeRate = 1190,
        PriceUnitOfMeasure = 1191,
        PriceUnitOfMeasureQty = 1192,
        SettlMethod = 1193,
        ExerciseStyle = 1194,
        OptPayAmount = 1195,
        PriceQuoteMethod = 1196,
        FuturesValuationMethod = 1197,
        ListMethod = 1198,
        CapPrice = 1199,
        FloorPrice = 1200,
        NoStrikeRules = 1201,
        StartStrikePxRange = 1202,
        EndStrikePxRange = 1203,
        StrikeIncrement = 1204,
        NoTickRules = 1205,
        StartTickPriceRange = 1206,
        EndTickPriceRange = 1207,
        TickIncrement = 1208,
        TickRuleType = 1209,
        NestedInstrAttribType = 1210,
        NestedInstrAttribValue = 1211,
        LegMaturityTime = 1212,
        UnderlyingMaturityTime = 1213,
        DerivativeSymbol = 1214,
        DerivativeSymbolSfx = 1215,
        DerivativeSecurityID = 1216,
        DerivativeSecurityIDSource = 1217,
        NoDerivativeSecurityAltID = 1218,
        DerivativeSecurityAltID = 1219,
        DerivativeSecurityAltIDSource = 1220,
        SecondaryLowLimitPrice = 1221,
        MaturityRuleID = 1222,
        StrikeRuleID = 1223,
        LegUnitOfMeasureQty = 1224,
        DerivativeOptPayAmount = 1225,
        EndMaturityMonthYear = 1226,
        ProductComplex = 1227,
        DerivativeProductComplex = 1228,
        MaturityMonthYearIncrement = 1229,
        SecondaryHighLimitPrice = 1230,
        MinLotSize = 1231,
        NoExecInstRules = 1232,
        NoLotTypeRules = 1234,
        NoMatchRules = 1235,
        NoMaturityRules = 1236,
        NoOrdTypeRules = 1237,
        NoTimeInForceRules = 1239,
        SecondaryTradingReferencePrice = 1240,
        StartMaturityMonthYear = 1241,
        FlexProductEligibilityIndicator = 1242,
        DerivFlexProductEligibilityIndicator = 1243,
        FlexibleIndicator = 1244,
        TradingCurrency = 1245,
        DerivativeProduct = 1246,
        DerivativeSecurityGroup = 1247,
        DerivativeCFICode = 1248,
        DerivativeSecurityType = 1249,
        DerivativeSecuritySubType = 1250,
        DerivativeMaturityMonthYear = 1251,
        DerivativeMaturityDate = 1252,
        DerivativeMaturityTime = 1253,
        DerivativeSettleOnOpenFlag = 1254,
        DerivativeInstrmtAssignmentMethod = 1255,
        DerivativeSecurityStatus = 1256,
        DerivativeInstrRegistry = 1257,
        DerivativeCountryOfIssue = 1258,
        DerivativeStateOrProvinceOfIssue = 1259,
        DerivativeLocaleOfIssue = 1260,
        DerivativeStrikePrice = 1261,
        DerivativeStrikeCurrency = 1262,
        DerivativeStrikeMultiplier = 1263,
        DerivativeStrikeValue = 1264,
        DerivativeOptAttribute = 1265,
        DerivativeContractMultiplier = 1266,
        DerivativeMinPriceIncrement = 1267,
        DerivativeMinPriceIncrementAmount = 1268,
        DerivativeUnitOfMeasure = 1269,
        DerivativeUnitOfMeasureQty = 1270,
        DerivativeTimeUnit = 1271,
        DerivativeSecurityExchange = 1272,
        DerivativePositionLimit = 1273,
        DerivativeNTPositionLimit = 1274,
        DerivativeIssuer = 1275,
        DerivativeIssueDate = 1276,
        DerivativeEncodedIssuerLen = 1277,
        DerivativeEncodedIssuer = 1278,
        DerivativeSecurityDesc = 1279,
        DerivativeEncodedSecurityDescLen = 1280,
        DerivativeEncodedSecurityDesc = 1281,
        DerivativeSecurityXMLLen = 1282,
        DerivativeSecurityXML = 1283,
        DerivativeSecurityXMLSchema = 1284,
        DerivativeContractSettlMonth = 1285,
        NoDerivativeEvents = 1286,
        DerivativeEventType = 1287,
        DerivativeEventDate = 1288,
        DerivativeEventTime = 1289,
        DerivativeEventPx = 1290,
        DerivativeEventText = 1291,
        NoDerivativeInstrumentParties = 1292,
        DerivativeInstrumentPartyID = 1293,
        DerivativeInstrumentPartyIDSource = 1294,
        DerivativeInstrumentPartyRole = 1295,
        NoDerivativeInstrumentPartySubIDs = 1296,
        DerivativeInstrumentPartySubID = 1297,
        DerivativeInstrumentPartySubIDType = 1298,
        DerivativeExerciseStyle = 1299,
        MarketSegmentID = 1300,
        MarketID = 1301,
        MaturityMonthYearIncrementUnits = 1302,
        MaturityMonthYearFormat = 1303,
        StrikeExerciseStyle = 1304,
        SecondaryPriceLimitType = 1305,
        PriceLimitType = 1306,
        DerivativeSecurityListRequestType = 1307,
        ExecInstValue = 1308,
        NoTradingSessionRules = 1309,
        NoMarketSegments = 1310,
        NoDerivativeInstrAttrib = 1311,
        NoNestedInstrAttrib = 1312,
        DerivativeInstrAttribType = 1313,
        DerivativeInstrAttribValue = 1314,
        DerivativePriceUnitOfMeasure = 1315,
        DerivativePriceUnitOfMeasureQty = 1316,
        DerivativeSettlMethod = 1317,
        DerivativePriceQuoteMethod = 1318,
        DerivativeFuturesValuationMethod = 1319,
        DerivativeListMethod = 1320,
        DerivativeCapPrice = 1321,
        DerivativeFloorPrice = 1322,
        DerivativePutOrCall = 1323,
        ListUpdateAction = 1324,
        ParentMktSegmID = 1325,
        TradingSessionDesc = 1326,
        TradSesUpdateAction = 1327,
        RejectText = 1328,
        FeeMultiplier = 1329,
        UnderlyingLegSymbol = 1330,
        UnderlyingLegSymbolSfx = 1331,
        UnderlyingLegSecurityID = 1332,
        UnderlyingLegSecurityIDSource = 1333,
        NoUnderlyingLegSecurityAltID = 1334,
        UnderlyingLegSecurityAltID = 1335,
        UnderlyingLegSecurityAltIDSource = 1336,
        UnderlyingLegSecurityType = 1337,
        UnderlyingLegSecuritySubType = 1338,
        UnderlyingLegMaturityMonthYear = 1339,
        UnderlyingLegStrikePrice = 1340,
        UnderlyingLegSecurityExchange = 1341,
        NoOfLegUnderlyings = 1342,
        UnderlyingLegPutOrCall = 1343,
        UnderlyingLegCFICode = 1344,
        UnderlyingLegMaturityDate = 1345,
        ApplReqID = 1346,
        ApplReqType = 1347,
        ApplResponseType = 1348,
        ApplTotalMessageCount = 1349,
        ApplLastSeqNum = 1350,
        NoApplIDs = 1351,
        ApplResendFlag = 1352,
        ApplResponseID = 1353,
        ApplResponseError = 1354,
        RefApplID = 1355,
        ApplReportID = 1356,
        RefApplLastSeqNum = 1357,
        LegPutOrCall = 1358,
        EncodedSymbolLen = 1359,
        EncodedSymbol = 1360,
        TotNoFills = 1361,
        NoFills = 1362,
        FillExecID = 1363,
        FillPx = 1364,
        FillQty = 1365,
        LegAllocID = 1366,
        LegAllocSettlCurrency = 1367,
        TradSesEvent = 1368,
        MassActionReportID = 1369,
        NoNotAffectedOrders = 1370,
        NotAffectedOrderID = 1371,
        NotAffOrigClOrdID = 1372,
        MassActionType = 1373,
        MassActionScope = 1374,
        MassActionResponse = 1375,
        MassActionRejectReason = 1376,
        MultilegModel = 1377,
        MultilegPriceMethod = 1378,
        LegVolatility = 1379,
        DividendYield = 1380,
        LegDividendYield = 1381,
        CurrencyRatio = 1382,
        LegCurrencyRatio = 1383,
        LegExecInst = 1384,
        ContingencyType = 1385,
        ListRejectReason = 1386,
        NoTrdRepIndicators = 1387,
        TrdRepPartyRole = 1388,
        TrdRepIndicator = 1389,
        TradePublishIndicator = 1390,
        UnderlyingLegOptAttribute = 1391,
        UnderlyingLegSecurityDesc = 1392,
        MarketReqID = 1393,
        MarketReportID = 1394,
        MarketUpdateAction = 1395,
        MarketSegmentDesc = 1396,
        EncodedMktSegmDescLen = 1397,
        EncodedMktSegmDesc = 1398,
        ApplNewSeqNum = 1399,
        EncryptedPasswordMethod = 1400,
        EncryptedPasswordLen = 1401,
        EncryptedPassword = 1402,
        EncryptedNewPasswordLen = 1403,
        EncryptedNewPassword = 1404,
        UnderlyingLegMaturityTime = 1405,
        RefApplExtID = 1406,
        DefaultApplExtID = 1407,
        DefaultCstmApplVerID = 1408,
        SessionStatus = 1409,
        DefaultVerIndicator = 1410,
        Nested4PartySubIDType = 1411,
        Nested4PartySubID = 1412,
        NoNested4PartySubIDs = 1413,
        NoNested4PartyIDs = 1414,
        Nested4PartyID = 1415,
        Nested4PartyIDSource = 1416,
        Nested4PartyRole = 1417,
        LegLastQty = 1418,
        UnderlyingExerciseStyle = 1419,
        LegExerciseStyle = 1420,
        LegPriceUnitOfMeasure = 1421,
        LegPriceUnitOfMeasureQty = 1422,
        UnderlyingUnitOfMeasureQty = 1423,
        UnderlyingPriceUnitOfMeasure = 1424,
        UnderlyingPriceUnitOfMeasureQty = 1425,
        ApplReportType = 1426,
    }
}
declare module 'src/fieldtypes/HandlInstEnum' {
    export enum HandlInstEnum {
        AutomatedExecutionNoIntervention = 1,
        AutomatedExecutionInterventionOK = 2,
        ManualOrder = 3,
    }
}
declare module 'src/fieldtypes/MarketDepthEnum' {
    export enum MarketDepthEnum {
        FullBook = 0,
        TopofBook = 1,
        Best_2_PriceTiers = 2,
        Best_3_PriceTiers = 3,
        Best_4_PriceTiers = 4,
        Best_5_PriceTiers = 5,
        Best_6_PriceTiers = 6,
        Best_7_PriceTiers = 7,
        Best_8_PriceTiers = 8,
        Best_9_PriceTiers = 9,
        Best_10_PriceTiers = 10,
    }
}
declare module 'src/fieldtypes/MDEntryTypeEnum' {
    export enum MDEntryTypeEnum {
        Bid = '0',
        Offer = '1',
        Trade = '2',
        IndexValue = '3',
        OpeningPrice = '4',
        ClosingPrice = '5',
        SettlementPrice = '6',
        TradingSessionHighPrice = '7',
        TradingSessionLowPrice = '8',
        TradingSessionVWAPPrice = '9',
        Imbalance = 'A',
        TradeVolume = 'B',
        OpenInterest = 'C',
        CompositeUnderlyingPrice = 'D',
        SimulatedSellPrice = 'E',
        SimulatedBuyPrice = 'F',
        MarginRate = 'G',
        MidPrice = 'H',
        EmptyBook = 'J',
        SettleHighPrice = 'K',
        SettleLowPrice = 'L',
        PriorSettlePrice = 'M',
        SessionHighBid = 'N',
        SessionLowOffer = 'O',
        EarlyPrices = 'P',
        AuctionClearingPrice = 'Q',
        SwapValueFactor = 'S',
        DailyValueAdjustmentLongPosition = 'R',
        CumulativeValueAdjustmentLongPosition = 'T',
        DailyValueAdjustmentShortPosition = 'U',
        CumulativeValueAdjustmentShortPosition = 'V',
        FixingPrice = 'W',
        CashRate = 'X',
        RecoveryRate = 'Y',
        RecoveryRateLongPosition = 'Z',
        RecoveryRateShortPosition = 'a',
        MarketBid = 'b',
        MarketOffer = 'c',
        ShortSaleMinPrice = 'd',
        PreviousClosingPrice = 'e',
    }
}
declare module 'src/fieldtypes/MDUpdateTypeEnum' {
    export enum MDUpdateTypeEnum {
        FullRefresh = 0,
        IncrementalRefresh = 1,
    }
}
declare module 'src/fieldtypes/MessageEnum' {
    export enum MessageEnum {
        Heartbeat = '0',
        TestRequest = '1',
        ResendRequest = '2',
        Reject = '3',
        SequenceReset = '4',
        Logout = '5',
        IOI = '6',
        Advertisement = '7',
        ExecutionReport = '8',
        OrderCancelReject = '9',
        Logon = 'A',
        News = 'B',
        Email = 'C',
        NewOrderSingle = 'D',
        NewOrderList = 'E',
        OrderCancelRequest = 'F',
        OrderCancelReplaceRequest = 'G',
        OrderStatusRequest = 'H',
        AllocationInstruction = 'J',
        ListCancelRequest = 'K',
        ListExecute = 'L',
        ListStatusRequest = 'M',
        ListStatus = 'N',
        AllocationInstructionAck = 'P',
        DontKnowTrade = 'Q',
        QuoteRequest = 'R',
        Quote = 'S',
        SettlementInstructions = 'T',
        MarketDataRequest = 'V',
        MarketDataSnapshotFullRefresh = 'W',
        MarketDataIncrementalRefresh = 'X',
        MarketDataRequestReject = 'Y',
        QuoteCancel = 'Z',
        QuoteStatusRequest = 'a',
        MassQuoteAcknowledgement = 'b',
        SecurityDefinitionRequest = 'c',
        SecurityDefinition = 'd',
        SecurityStatusRequest = 'e',
        SecurityStatus = 'f',
        TradingSessionStatusRequest = 'g',
        TradingSessionStatus = 'h',
        MassQuote = 'i',
        BusinessMessageReject = 'j',
        BidRequest = 'k',
        BidResponse = 'l',
        ListStrikePrice = 'm',
        XMLnonFIX = 'n',
        RegistrationInstructions = 'o',
        RegistrationInstructionsResponse = 'p',
        OrderMassCancelRequest = 'q',
        OrderMassCancelReport = 'r',
        NewOrderCross = 's',
        CrossOrderCancelReplaceRequest = 't',
        CrossOrderCancelRequest = 'u',
        SecurityTypeRequest = 'v',
        SecurityTypes = 'w',
        SecurityListRequest = 'x',
        SecurityList = 'y',
        DerivativeSecurityListRequest = 'z',
        DerivativeSecurityList = 'AA',
        NewOrderMultileg = 'AB',
        MultilegOrderCancelReplace = 'AC',
        TradeCaptureReportRequest = 'AD',
        TradeCaptureReport = 'AE',
        OrderMassStatusRequest = 'AF',
        QuoteRequestReject = 'AG',
        RFQRequest = 'AH',
        QuoteStatusReport = 'AI',
        QuoteResponse = 'AJ',
        Confirmation = 'AK',
        PositionMaintenanceRequest = 'AL',
        PositionMaintenanceReport = 'AM',
        RequestForPositions = 'AN',
        RequestForPositionsAck = 'AO',
        PositionReport = 'AP',
        TradeCaptureReportRequestAck = 'AQ',
        TradeCaptureReportAck = 'AR',
        AllocationReport = 'AS',
        AllocationReportAck = 'AT',
        ConfirmationAck = 'AU',
        SettlementInstructionRequest = 'AV',
        AssignmentReport = 'AW',
        CollateralRequest = 'AX',
        CollateralAssignment = 'AY',
        CollateralResponse = 'AZ',
        CollateralReport = 'BA',
        CollateralInquiry = 'BB',
        NetworkCounterpartySystemStatusRequest = 'BC',
        NetworkCounterpartySystemStatusResponse = 'BD',
        UserRequest = 'BE',
        UserResponse = 'BF',
        CollateralInquiryAck = 'BG',
        ConfirmationRequest = 'BH',
        TradingSessionListRequest = 'BI',
        TradingSessionList = 'BJ',
        SecurityListUpdateReport = 'BK',
        AdjustedPositionReport = 'BL',
        AllocationInstructionAlert = 'BM',
        ExecutionAcknowledgement = 'BN',
        ContraryIntentionReport = 'BO',
        SecurityDefinitionUpdateReport = 'BP',
        SettlementObligationReport = 'BQ',
        DerivativeSecurityListUpdateReport = 'BR',
        TradingSessionListUpdateReport = 'BS',
        MarketDefinitionRequest = 'BT',
        MarketDefinition = 'BU',
        MarketDefinitionUpdateReport = 'BV',
        ApplicationMessageRequest = 'BW',
        ApplicationMessageRequestAck = 'BX',
        ApplicationMessageReport = 'BY',
        OrderMassActionReport = 'BZ',
        OrderMassActionRequest = 'CA',
        UserNotification = 'CB',
        StreamAssignmentRequest = 'CC',
        StreamAssignmentReport = 'CD',
        StreamAssignmentReportACK = 'CE',
        MarginRequirementInquiry = 'CH',
        MarginRequirementInquiryAck = 'CI',
        MarginRequirementReport = 'CJ',
        PartyDetailsListRequest = 'CF',
        PartyDetailsListReport = 'CG',
        PartyDetailsListUpdateReport = 'CK',
        PartyRiskLimitsRequest = 'CL',
        PartyRiskLimitsReport = 'CM',
        SecurityMassStatusRequest = 'CN',
        SecurityMassStatus = 'CO',
        AccountSummaryReport = 'CQ',
        PartyRiskLimitsUpdateReport = 'CR',
        PartyRiskLimitsDefinitionRequest = 'CS',
        PartyRiskLimitsDefinitionRequestAck = 'CT',
        PartyEntitlementsRequest = 'CU',
        PartyEntitlementsReport = 'CV',
        QuoteAck = 'CW',
        PartyDetailsDefinitionRequest = 'CX',
        PartyDetailsDefinitionRequestAck = 'CY',
        PartyEntitlementsUpdateReport = 'CZ',
        PartyEntitlementsDefinitionRequest = 'DA',
        PartyEntitlementsDefinitionRequestAck = 'DB',
        TradeMatchReport = 'DC',
        TradeMatchReportAck = 'DD',
        PartyRiskLimitsReportAck = 'DE',
        PartyRiskLimitCheckRequest = 'DF',
        PartyRiskLimitCheckRequestAck = 'DG',
        PartyActionRequest = 'DH',
        PartyActionReport = 'DI',
        MassOrder = 'DJ',
        MassOrderAck = 'DK',
        PositionTransferInstruction = 'DL',
        PositionTransferInstructionAck = 'DM',
        PositionTransferReport = 'DN',
        MarketDataStatisticsRequest = 'DO',
        MarketDataStatisticsReport = 'DP',
        CollateralReportAck = 'DQ',
        MarketDataReport = 'DR',
        AllocationInstructionAlertRequest = 'DU',
        AllocationInstructionAlertRequestAck = 'DV',
        TradeAggregationRequest = 'DW',
        TradeAggregationReport = 'DX',
    }
}
declare module 'src/fieldtypes/OrderStatusEnum' {
    export enum OrderStatusEnum {
        New = '0',
        PartiallyFilled = '1',
        Filled = '2',
        DoneForDay = '3',
        Canceled = '4',
        Replaced = '5',
        PendingCancel = '6',
        Stopped = '7',
        Rejected = '8',
        Suspended = '9',
        PendingNew = 'A',
        Calculated = 'B',
        Expired = 'C',
        AcceptedForBidding = 'D',
        PendingReplace = 'E',
    }
}
declare module 'src/fieldtypes/OrderTypesEnum' {
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
}
declare module 'src/fieldtypes/SideEnum' {
    export enum SideEnum {
        Buy = '1',
        Sell = '2',
        BuyMinus = '3',
        SellPlus = '4',
        SellShort = '5',
        SellShortExempt = '6',
        Undisclosed = '7',
        Cross = '8',
        CrossShort = '9',
        CrossShortExempt = 'A',
        AsDefined = 'B',
        Opposite = 'C',
        Subscribe = 'D',
        Redeem = 'E',
        Lend = 'F',
        Borrow = 'G',
    }
}
declare module 'src/fieldtypes/SubscriptionRequestTypeEnum' {
    export enum SubscriptionRequestTypeEnum {
        Snapshot = 0,
        SnapshotPlusUpdates = 1,
        DisablePreviousSnapshotPlusUpdateRequest = 2,
    }
}
declare module 'src/fieldtypes/TimeInForceEnum' {
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
}
declare module 'src/fieldtypes/index' {
    export * as AllocPositionEffect from 'src/fieldtypes/AllocPositionEffectEnum';
    export * as EncryptMethod from 'src/fieldtypes/EncryptMethodEnum';
    export * as ExecType from 'src/fieldtypes/ExecTypeEnum';
    export * as Fields from 'src/fieldtypes/FieldEnum';
    export * as HandlInst from 'src/fieldtypes/HandlInstEnum';
    export * as MarketDepth from 'src/fieldtypes/MarketDepthEnum';
    export * as MDEntryType from 'src/fieldtypes/MDEntryTypeEnum';
    export * as MDUpdateType from 'src/fieldtypes/MDUpdateTypeEnum';
    export * as Messages from 'src/fieldtypes/MessageEnum';
    export * as OrderStatus from 'src/fieldtypes/OrderStatusEnum';
    export * as OrderTypes from 'src/fieldtypes/OrderTypesEnum';
    export * as Side from 'src/fieldtypes/SideEnum';
    export * as SubscriptionRequestType from 'src/fieldtypes/SubscriptionRequestTypeEnum';
    export * as TimeInForce from 'src/fieldtypes/TimeInForceEnum';
}
declare module 'spec/SpecEnums' {
    export interface ISpecEnums {
        Tag: string;
        Value: string;
        SymbolicName: string;
        Group?: string;
        Sort: string;
        Description: string;
        Deprecated?: string;
        DeprecatedEP?: string;
        Updated?: string;
        UpdatedEP?: string;
        Added?: string;
        AddedEP?: string;
        Issue?: string;
        Elaboration?: string;
    }
    export const ENUMS: ISpecEnums[];
}
declare module 'src/enums/EnumType' {
    import { ISpecEnums } from 'spec/SpecEnums';
    export class EnumType {
        tag: string | null;
        value: string | null;
        symbolicName: string | null;
        group: string | null;
        sort: string | null;
        description: string | null;
        elaboration: string | null;
        added: string | null;
        setEnumeration(enumType: ISpecEnums): void;
    }
}
declare module 'spec/SpecCategories' {
    export interface ISpecCategories {
        CategoryID: string;
        FIXMLFileName: string;
        NotReqXML: string;
        GenerateImplFile: string;
        ComponentType: string;
        SectionID?: string;
        Volume: string;
        IncludeFile?: string;
        Added?: string;
        AddedEP?: string;
    }
    export const CATEGORIES: ISpecCategories[];
}
declare module 'src/fields/categories/CategoryType' {
    import { ISpecCategories } from 'spec/SpecCategories';
    export class CategoryType {
        categoryID: string | null;
        fixmlFileName: string | null;
        notReqXML: string | null;
        generateImplFile: string | null;
        componentType: string | null;
        sectionID: string | null;
        volume: string | null;
        includeFile: string | null;
        reset(): void;
        setCategory(category: ISpecCategories): void;
    }
}
declare module 'spec/SpecDatatypes' {
    export interface ISpecDatatypes {
        Name: string;
        BaseType?: string;
        Description: string;
        Example?: string;
        XML?: {
            BuiltIn: string;
            Base: string;
            MinInclusive?: string;
            Pattern?: string;
            Description?: string;
            Example?: string | string[];
        };
        Added: string;
        AddedEP?: string;
        Issue?: string;
    }
    export const DATATYPES: ISpecDatatypes[];
}
declare module 'src/fields/datatypes/FieldType' {
    import { ISpecDatatypes } from 'spec/SpecDatatypes';
    export class FieldType {
        name: string | null;
        baseType: string | null;
        description: string | null;
        added: string | null;
        constructor();
        reset(): void;
        setType(type: ISpecDatatypes): void;
    }
}
declare module 'spec/SpecSections' {
    export interface ISpecSections {
        SectionID: string;
        Name: string;
        DisplayOrder: string;
        Volume: string;
        NotReqXML: string;
        FIXMLFileName: string;
        Description: string;
    }
    export const SECTIONS: ISpecSections[];
}
declare module 'src/fields/sections/SectionType' {
    import { ISpecSections } from 'spec/SpecSections';
    export class SectionType {
        sectionID: string | null;
        name: string | null;
        displayOrder: string | null;
        volume: string | null;
        notReqXML: string | null;
        fixmlFileName: string | null;
        description: string | null;
        reset(): void;
        setSection(section: ISpecSections): void;
    }
}
declare module 'src/fields/Field' {
    import { EnumType } from 'src/enums/EnumType';
    import { CategoryType } from 'src/fields/categories/CategoryType';
    import { FieldType } from 'src/fields/datatypes/FieldType';
    import { SectionType } from 'src/fields/sections/SectionType';
    export class Field {
        tag: number;
        value: any;
        name: string | null;
        description: string | null;
        type: FieldType | null;
        category: CategoryType | null;
        section: SectionType | null;
        enumeration: EnumType | null;
        validated: boolean;
        constructor(tag: number, value: string | number | null);
        setTag(tag: number): void;
        setValue(value: number | string): void;
        setName(name: string): void;
        setDescription(description: string): void;
        setType(type: FieldType | null): void;
        setCategory(category: CategoryType): void;
        setSection(section: SectionType): void;
        setEnumeration(enumeration: EnumType): void;
        setValidated(isValid: boolean): void;
        toString(): string;
    }
}
declare module 'src/enums/Enums' {
    import { ISpecEnums } from 'spec/SpecEnums';
    import { Field } from 'src/fields/Field';
    export class Enums {
        enums: ISpecEnums[];
        cacheMap: Map<string, ISpecEnums>;
        constructor();
        getEnum(tag: string, value: string | number): ISpecEnums | undefined;
        processEnum(field: Field): void;
    }
}
declare module 'spec/SpecFields' {
    export interface ISpecFields {
        Tag: string;
        Name: string;
        Type: string;
        AssociatedDataTag?: string;
        AbbrName?: string;
        BaseCategory?: string;
        BaseCategoryAbbrName?: string;
        NotReqXML: string;
        UnionDataType?: string;
        EnumDatatype?: string;
        Description: string;
        Updated?: string;
        UpdatedEP?: string;
        Added: string;
        AddedEP?: string;
        Deprecated?: string;
        Issue?: string;
    }
    export const FIELDS: ISpecFields[];
}
declare module 'spec/SpecMessageContents' {
    export interface ISpecMessageContents {
        ComponentID: string;
        TagText: string;
        Indent: string;
        Position: string;
        Reqd: string;
        Description?: string;
        Updated?: string;
        UpdatedEP?: string;
        Added: string;
        AddedEP?: string;
        Issue?: string;
        Deprecated?: string;
    }
    export const MESSAGE_CONTENTS: ISpecMessageContents[];
}
declare module 'src/util/util' {
    export type Version = {
        version: string;
        build: string;
    };
    export const version: Version;
    export type Parser = 'FIXServer' | 'FIXParser' | 'FIXParserBrowser';
    export const DEFAULT_FIX_VERSION: string;
    export const SOH: string;
    export const STRING_EQUALS: string;
    export const RE_BEGINSTRING: RegExp;
    export const RE_ESCAPE: RegExp;
    export const RE_FIND: RegExp;
    export const loggingSettings: {
        enabled: boolean;
    };
    export const log: (...args: any) => void | null;
    export const logWarning: (...args: any) => void | null;
    export const logError: (...args: any) => void | null;
    export const logInfo: (...args: any) => void | null;
    export const pad: (value: number, size: number) => string;
    export const adjustForTimezone: (date: Date) => Date;
    export const timestamp: (dateObject: Date) => string;
}
declare module 'src/message/Message' {
    import { ISpecEnums } from 'spec/SpecEnums';
    import { ISpecMessageContents } from 'spec/SpecMessageContents';
    import { Field } from 'src/fields/Field';
    type FieldValues = {
        [tag: string]: any;
    };
    type FieldExplains = {
        [tag: string]: any;
    };
    export class Message {
        #private;
        fixVersion: string;
        data: Field[];
        messageString: string;
        description: string;
        messageType: string;
        messageSequence: number;
        messageContents: ISpecMessageContents[];
        bodyLengthValid: boolean;
        checksumValid: boolean;
        checksumValue: string | null;
        checksumExpected: string | null;
        bodyLengthValue: number | null;
        bodyLengthExpected: number | null;
        constructor(fixVersion?: string, ...fields: Field[]);
        addField(field: Field): void;
        addFields(...fields: Field[]): void;
        removeFieldByTag(tag: number): void;
        getField(tag: number): Field | undefined;
        getFieldValues(): FieldValues;
        getFieldNameValues(): FieldValues;
        getFieldExplains(): FieldExplains;
        getFields(tag: number): Field[] | undefined;
        setField(field: Field): void;
        setString(fixString: string): void;
        setDescription(description: string): void;
        setMessageType(messageType: string): void;
        setMessageSequence(messageSequence: number): void;
        setMessageContents(messageContents: ISpecMessageContents[]): void;
        getEnum(tag: number, value: string): ISpecEnums | undefined | null;
        getBriefDescription(): string | null;
        validateBodyLength(value: string): boolean;
        validateChecksum(value: string): boolean;
        validate(): any[];
        encode(separator?: string): string;
        clone(): Message;
        private reset;
    }
}
declare module 'spec/SpecMessages' {
    export interface ISpecMessages {
        ComponentID: string;
        MsgType: string;
        Name: string;
        CategoryID: string;
        SectionID: string;
        Description: string;
        AbbrName: string;
        NotReqXML: string;
        Added: string;
        AddedEP?: string;
        Updated?: string;
        UpdatedEP?: string;
    }
    export const MESSAGES: ISpecMessages[];
}
declare module 'src/messagecontents/MessageContents' {
    import { Message } from 'src/message/Message';
    import { ISpecMessageContents } from 'spec/SpecMessageContents';
    export class MessageContents {
        cacheMap: Map<string, ISpecMessageContents[]>;
        validated: boolean;
        constructor();
        processMessageContents(message: Message, componentId: string): void;
    }
}
declare module 'src/messages/Messages' {
    import { ISpecMessages } from 'spec/SpecMessages';
    import { Field } from 'src/fields/Field';
    import { Message } from 'src/message/Message';
    import { MessageContents } from 'src/messagecontents/MessageContents';
    export class Messages {
        messages: ISpecMessages[];
        messageContents: MessageContents;
        cacheMap: Map<string, ISpecMessages>;
        constructor();
        setMessageType(message: Message, field: Field): void;
        setMessageSequence(message: Message, messageSequence: number): void;
    }
}
declare module 'src/fields/categories/Categories' {
    import { ISpecCategories } from 'spec/SpecCategories';
    import { Field } from 'src/fields/Field';
    import { CategoryType } from 'src/fields/categories/CategoryType';
    export class Categories {
        categories: ISpecCategories[];
        cacheMap: Map<string, ISpecCategories>;
        categoryType: CategoryType;
        constructor();
        processCategory(field: Field, baseCategory: string): void;
    }
}
declare module 'src/fields/datatypes/Datatypes' {
    import { ISpecDatatypes } from 'spec/SpecDatatypes';
    import { Field } from 'src/fields/Field';
    import { FieldType } from 'src/fields/datatypes/FieldType';
    export class DataTypes {
        dataTypes: ISpecDatatypes[];
        cacheMap: Map<string, ISpecDatatypes>;
        cacheTypeMap: Map<string, any>;
        fieldType: FieldType;
        constructor();
        processDatatype(field: Field, type: string): void;
    }
}
declare module 'src/fields/sections/Sections' {
    import { ISpecSections } from 'spec/SpecSections';
    import { Field } from 'src/fields/Field';
    import { SectionType } from 'src/fields/sections/SectionType';
    export class Sections {
        sections: ISpecSections[];
        cacheMap: Map<string, ISpecSections>;
        sectionType: SectionType;
        constructor();
        processSection(item: Field, sectionId: string): void;
    }
}
declare module 'src/fields/Fields' {
    import { ISpecFields } from 'spec/SpecFields';
    import { Message } from 'src/message/Message';
    import { Messages } from 'src/messages/Messages';
    import { Categories } from 'src/fields/categories/Categories';
    import { DataTypes } from 'src/fields/datatypes/Datatypes';
    import { Field } from 'src/fields/Field';
    import { Sections } from 'src/fields/sections/Sections';
    export class Fields {
        fields: ISpecFields[];
        cacheMap: Map<number, ISpecFields>;
        messages: Messages;
        categories: Categories;
        sections: Sections;
        dataTypes: DataTypes;
        constructor();
        getField(field: Field): void;
        processField(message: Message, field: Field): void;
    }
}
declare module 'src/FIXParserBase' {
    import { Enums as EnumsCache } from 'src/enums/Enums';
    import { Fields as FieldsCache } from 'src/fields/Fields';
    import { Message } from 'src/message/Message';
    export class FIXParserBase {
        fixVersion: string;
        message: Message | null;
        messageTags: string[];
        messageString: string;
        fields: FieldsCache;
        enums: EnumsCache;
        processMessage(): void;
        processFields(): void;
        parse(data: string): Message[];
    }
}
declare module 'src/util/MessageBuffer' {
    import { Message } from 'src/message/Message';
    export const MAX_BUFFER: number;
    export class MessageBuffer {
        private buffer;
        add(message: Message): void;
        getByMsgSequence(msgSequence: number): Message | null;
        clear(): void;
    }
}
declare module 'src/session/SessionResendRequest' {
    import { IFIXParser } from 'src/IFIXParser';
    import { Message } from 'src/message/Message';
    import { MessageBuffer } from 'src/util/MessageBuffer';
    export const handleResendRequest: (parser: IFIXParser, messageBuffer: MessageBuffer, message: Message) => void;
}
declare module 'src/session/SessionLogon' {
    import { IFIXParser } from 'src/IFIXParser';
    import { Message } from 'src/message/Message';
    import { MessageBuffer } from 'src/util/MessageBuffer';
    export const handleLogon: (parser: IFIXParser, messageBuffer: MessageBuffer, message: Message) => void;
}
declare module 'src/messagetemplates/MessageTemplates' {
    import { IFIXParser } from 'src/IFIXParser';
    import { Field } from 'src/fields/Field';
    import { Message } from 'src/message/Message';
    export const heartBeat: (parser: IFIXParser, testReqId?: Field | undefined) => Message;
}
declare module 'src/session/SessionTestRequest' {
    import { IFIXParser } from 'src/IFIXParser';
    import { Message } from 'src/message/Message';
    export const handleTestRequest: (parser: IFIXParser, message: Message) => void;
}
declare module 'src/session/SessionSequenceReset' {
    import { IFIXParser } from 'src/IFIXParser';
    import { Message } from 'src/message/Message';
    export const handleSequenceReset: (parser: IFIXParser, message: Message) => void;
}
declare module 'src/util/ClientMessageProcessor' {
    import { Message } from 'src/message/Message';
    import { FIXParser } from 'src/FIXParser';
    import { FIXParserBrowser } from 'src/FIXParserBrowser';
    export const clientProcessMessage: (parser: FIXParser | FIXParserBrowser, message: Message) => void;
}
declare module 'src/FIXParserBrowser' {
    import { EventEmitter } from 'events';
    import { IFIXParser } from 'src/IFIXParser';
    import * as Constants from 'src/fieldtypes/index';
    import { Field } from 'src/fields/Field';
    import { FIXParserBase } from 'src/FIXParserBase';
    import { Message } from 'src/message/Message';
    import { Version, Parser } from 'src/util/util';
    import { Options as FIXParserOptions, Protocol } from 'src/FIXParser';
    import { MessageBuffer } from 'src/util/MessageBuffer';
    export type Options = Pick<
        FIXParserOptions,
        'host' | 'port' | 'sender' | 'target' | 'heartbeatIntervalSeconds' | 'fixVersion'
    >;
    export default class FIXParserBrowser extends EventEmitter implements IFIXParser {
        static version: Version;
        parserName: Parser;
        fixParserBase: FIXParserBase;
        nextNumIn: number;
        nextNumOut: number;
        heartBeatIntervalId: ReturnType<typeof setInterval> | null;
        socket: WebSocket | null;
        connected: boolean;
        host: string | null;
        port: number | null;
        protocol: Protocol | null;
        sender: string | null;
        target: string | null;
        heartBeatInterval: number | undefined;
        fixVersion: string;
        messageBuffer: MessageBuffer;
        connect({ host, port, sender, target, heartbeatIntervalSeconds, fixVersion }?: Options): void;
        getNextTargetMsgSeqNum(): number;
        setNextTargetMsgSeqNum(nextMsgSeqNum: number): number;
        getTimestamp(dateObject?: Date): string;
        createMessage(...fields: Field[]): Message;
        parse(data: string): Message[];
        send(message: Message): void;
        isConnected(): boolean;
        close(): void;
        stopHeartbeat(): void;
        startHeartbeat(heartBeatInterval?: number): void;
    }
    export { EncryptMethodEnum as EncryptMethod } from 'src/fieldtypes/EncryptMethodEnum';
    export { ExecTypeEnum as ExecType } from 'src/fieldtypes/ExecTypeEnum';
    export { FieldEnum as Fields } from 'src/fieldtypes/FieldEnum';
    export { HandlInstEnum as HandlInst } from 'src/fieldtypes/HandlInstEnum';
    export { MarketDepthEnum as MarketDepth } from 'src/fieldtypes/MarketDepthEnum';
    export { MDUpdateTypeEnum as MDUpdateType } from 'src/fieldtypes/MDUpdateTypeEnum';
    export { MDEntryTypeEnum as MDEntryType } from 'src/fieldtypes/MDEntryTypeEnum';
    export { MessageEnum as Messages } from 'src/fieldtypes/MessageEnum';
    export { OrderTypesEnum as OrderTypes } from 'src/fieldtypes/OrderTypesEnum';
    export { OrderStatusEnum as OrderStatus } from 'src/fieldtypes/OrderStatusEnum';
    export { AllocPositionEffectEnum as AllocPositionEffect } from 'src/fieldtypes/AllocPositionEffectEnum';
    export { SideEnum as Side } from 'src/fieldtypes/SideEnum';
    export { SubscriptionRequestTypeEnum as SubscriptionRequestType } from 'src/fieldtypes/SubscriptionRequestTypeEnum';
    export { TimeInForceEnum as TimeInForce } from 'src/fieldtypes/TimeInForceEnum';
    export { Constants };
    export { Field };
    export { Message };
    export { FIXParserBrowser };
}
declare module 'src/IFIXParser' {
    import FIXParser, { Options as FIXParserOptions, Protocol } from 'src/FIXParser';
    import { Options as FIXParserBrowserOptions } from 'src/FIXParserBrowser';
    import { Field } from 'src/fields/Field';
    import { Message } from 'src/message/Message';
    import { FIXParserBase } from 'src/FIXParserBase';
    import { MessageBuffer } from 'src/util/MessageBuffer';
    import { Parser } from 'src/util/util';
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
}
declare module 'src/util/FrameDecoder' {
    import { Transform, TransformCallback, TransformOptions } from 'stream';
    export class FrameDecoder extends Transform {
        data: string | null;
        constructor(opts?: TransformOptions);
        _transform(chunk: string, encoding: string, callback: TransformCallback): void;
        destroy(): void;
    }
}
declare module 'src/FIXParser' {
    import { EventEmitter } from 'events';
    import { Socket } from 'net';
    import WebSocket from 'ws';
    import { TLSSocket } from 'tls';
    import { IFIXParser } from 'src/IFIXParser';
    import * as Constants from 'src/fieldtypes/index';
    import { Field } from 'src/fields/Field';
    import { FIXParserBase } from 'src/FIXParserBase';
    import { Message } from 'src/message/Message';
    import { Version, Parser } from 'src/util/util';
    import { MessageBuffer } from 'src/util/MessageBuffer';
    export type Protocol = 'tcp' | 'ssl-tcp' | 'tls-tcp' | 'websocket';
    export type Options = {
        host?: string;
        port?: number;
        protocol?: Protocol;
        sender?: string;
        target?: string;
        heartbeatIntervalSeconds?: number;
        fixVersion?: string;
        tlsKey?: Buffer | null;
        tlsCert?: Buffer | null;
        tlsUseSNI?: boolean;
        logging?: boolean;
        proxy?: string | null;
    };
    export default class FIXParser extends EventEmitter implements IFIXParser {
        static version: Version;
        parserName: Parser;
        fixParserBase: FIXParserBase;
        nextNumIn: number;
        nextNumOut: number;
        heartBeatIntervalId: ReturnType<typeof setInterval> | null;
        socket: Socket | WebSocket | TLSSocket | null;
        connected: boolean;
        host: string | null;
        port: number | null;
        protocol: Protocol | null;
        sender: string | null;
        target: string | null;
        heartBeatInterval: number | undefined;
        fixVersion: string;
        messageBuffer: MessageBuffer;
        connect({
            host,
            port,
            protocol,
            sender,
            target,
            heartbeatIntervalSeconds,
            fixVersion,
            tlsKey,
            tlsCert,
            tlsUseSNI,
            logging,
            proxy,
        }?: Options): void;
        getNextTargetMsgSeqNum(): number;
        setNextTargetMsgSeqNum(nextMsgSeqNum: number): number;
        getTimestamp(dateObject?: Date): string;
        createMessage(...fields: Field[]): Message;
        parse(data: string): Message[];
        send(message: Message): void;
        isConnected(): boolean;
        close(): void;
        stopHeartbeat(): void;
        startHeartbeat(heartBeatInterval?: number): void;
    }
    export { EncryptMethodEnum as EncryptMethod } from 'src/fieldtypes/EncryptMethodEnum';
    export { ExecTypeEnum as ExecType } from 'src/fieldtypes/ExecTypeEnum';
    export { FieldEnum as Fields } from 'src/fieldtypes/FieldEnum';
    export { HandlInstEnum as HandlInst } from 'src/fieldtypes/HandlInstEnum';
    export { MarketDepthEnum as MarketDepth } from 'src/fieldtypes/MarketDepthEnum';
    export { MDUpdateTypeEnum as MDUpdateType } from 'src/fieldtypes/MDUpdateTypeEnum';
    export { MDEntryTypeEnum as MDEntryType } from 'src/fieldtypes/MDEntryTypeEnum';
    export { MessageEnum as Messages } from 'src/fieldtypes/MessageEnum';
    export { OrderTypesEnum as OrderTypes } from 'src/fieldtypes/OrderTypesEnum';
    export { OrderStatusEnum as OrderStatus } from 'src/fieldtypes/OrderStatusEnum';
    export { AllocPositionEffectEnum as AllocPositionEffect } from 'src/fieldtypes/AllocPositionEffectEnum';
    export { SideEnum as Side } from 'src/fieldtypes/SideEnum';
    export { SubscriptionRequestTypeEnum as SubscriptionRequestType } from 'src/fieldtypes/SubscriptionRequestTypeEnum';
    export { TimeInForceEnum as TimeInForce } from 'src/fieldtypes/TimeInForceEnum';
    export { Constants };
    export { Field };
    export { Message };
    export { FIXParser };
}
declare module 'src/session/SessionLogout' {
    import { IFIXParser } from 'src/IFIXParser';
    import { Message } from 'src/message/Message';
    export const handleLogout: (parser: IFIXParser, message: Message) => void;
}
declare module 'src/session/SessionSequence' {
    import { IFIXParser } from 'src/IFIXParser';
    import { Message } from 'src/message/Message';
    export const handleSequence: (parser: IFIXParser, message: Message) => void;
}
declare module 'src/FIXServer' {
    import { EventEmitter } from 'events';
    import { Server } from 'net';
    import Websocket from 'ws';
    import { IFIXParser } from 'src/IFIXParser';
    import * as Constants from 'src/fieldtypes/index';
    import { Field } from 'src/fields/Field';
    import FIXParser, { Protocol } from 'src/FIXParser';
    import { Message } from 'src/message/Message';
    import { Version, Parser } from 'src/util/util';
    import { Options as FIXParserOptions } from 'src/FIXParser';
    import { MessageBuffer } from 'src/util/MessageBuffer';
    type Options = Pick<
        FIXParserOptions,
        'host' | 'port' | 'protocol' | 'sender' | 'target' | 'heartbeatIntervalSeconds' | 'fixVersion' | 'logging'
    >;
    export default class FIXServer extends EventEmitter implements IFIXParser {
        static version: Version;
        parserName: Parser;
        fixParser: FIXParser;
        host: string;
        port: number;
        protocol: Protocol;
        server: Server | Websocket.Server | null;
        connected: boolean;
        sender: string;
        target: string;
        heartBeatInterval: number | undefined;
        fixVersion: string;
        nextNumIn: number;
        heartBeatIntervalId: ReturnType<typeof setInterval> | null;
        messageBuffer: MessageBuffer;
        private socket;
        createServer({
            host,
            port,
            protocol,
            sender,
            target,
            heartbeatIntervalSeconds,
            fixVersion,
            logging,
        }?: Options): void;
        private initialize;
        getNextTargetMsgSeqNum(): number;
        setNextTargetMsgSeqNum(nextMsgSeqNum: number): number;
        getTimestamp(dateObject?: Date): string;
        createMessage(...fields: Field[]): Message;
        parse(data: string): Message[];
        send(message: Message): void;
        isConnected(): boolean;
        private resetSession;
        close(): void;
        destroy(): void;
        stopHeartbeat(): void;
        startHeartbeat(heartBeatInterval?: number): void;
        private processMessage;
    }
    export { EncryptMethodEnum as EncryptMethod } from 'src/fieldtypes/EncryptMethodEnum';
    export { ExecTypeEnum as ExecType } from 'src/fieldtypes/ExecTypeEnum';
    export { FieldEnum as Fields } from 'src/fieldtypes/FieldEnum';
    export { HandlInstEnum as HandlInst } from 'src/fieldtypes/HandlInstEnum';
    export { MarketDepthEnum as MarketDepth } from 'src/fieldtypes/MarketDepthEnum';
    export { MDUpdateTypeEnum as MDUpdateType } from 'src/fieldtypes/MDUpdateTypeEnum';
    export { MDEntryTypeEnum as MDEntryType } from 'src/fieldtypes/MDEntryTypeEnum';
    export { MessageEnum as Messages } from 'src/fieldtypes/MessageEnum';
    export { OrderTypesEnum as OrderTypes } from 'src/fieldtypes/OrderTypesEnum';
    export { OrderStatusEnum as OrderStatus } from 'src/fieldtypes/OrderStatusEnum';
    export { AllocPositionEffectEnum as AllocPositionEffect } from 'src/fieldtypes/AllocPositionEffectEnum';
    export { SideEnum as Side } from 'src/fieldtypes/SideEnum';
    export { SubscriptionRequestTypeEnum as SubscriptionRequestType } from 'src/fieldtypes/SubscriptionRequestTypeEnum';
    export { TimeInForceEnum as TimeInForce } from 'src/fieldtypes/TimeInForceEnum';
    export { Constants };
    export { Field };
    export { Message };
    export { FIXServer };
}
declare module 'spec/SpecComponents' {
    export interface ISpecComponents {
        ComponentID: string;
        ComponentType: string;
        CategoryID: string;
        Name: string;
        AbbrName: string;
        NotReqXML: string;
        Description?: string;
        Updated?: string;
        UpdatedEP?: string;
        Added: string;
        AddedEP?: string;
    }
    export const COMPONENTS: ISpecComponents[];
}
declare module 'src/components/Components' {
    import { ISpecComponents } from 'spec/SpecComponents';
    export class Components {
        components: ISpecComponents[];
        cacheMap: Map<string, ISpecComponents>;
        cacheMapByName: Map<string, ISpecComponents>;
        constructor();
        find(componentId: string): ISpecComponents | undefined;
        findByName(name: string): ISpecComponents | undefined;
    }
}

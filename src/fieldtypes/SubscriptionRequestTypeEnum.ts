/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright 2021 Victor Norgren
 * Released under the MIT license
 */
export enum SubscriptionRequestTypeEnum {
    Snapshot = 0,
    SnapshotPlusUpdates = 1,
    DisablePreviousSnapshotPlusUpdateRequest = 2,
}

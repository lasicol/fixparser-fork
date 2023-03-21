/*
 * fixparser
 * https://gitlab.com/logotype/fixparser.git
 *
 * Copyright 2021 Victor Norgren
 * Released under the MIT license
 */
export enum EncryptMethodEnum {
    None = 0,
    PKCS = 1,
    DES = 2,
    PKCSDES = 3,
    PGPDES = 4,
    PGPDESMD5 = 5,
    PEM = 6,
}

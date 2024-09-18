import { testStr } from "./test";

export const testStrAndLog = function (value) {
    console.log('testStrAndLog', arguments);
    testStr(value);
};
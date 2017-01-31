import { BaseBlueprint } from '../../types/BaseBlueprint';
import { BasePropsType } from '../../types/BasePropsType';
export default class Logger {
    logs: Array<LogItem>;
    constructor(logs?: Array<LogItem>);
    add(logItem: LogItem): void;
    partialMatch(partialLogItems: Array<LogItem>): void;
}
export declare type LogItemEventType = 'init' | 'update' | 'delete';
export declare type LogItemDataType = {
    [key: string]: BaseBlueprint<BasePropsType> | typeof BaseBlueprint | string | BasePropsType;
    instance?: BaseBlueprint<BasePropsType>;
    parentInstance?: BaseBlueprint<BasePropsType>;
    blueprint?: typeof BaseBlueprint;
    key?: string;
    type: LogItemEventType;
    props?: BasePropsType;
};
export declare class LogItem {
    data: LogItemDataType;
    constructor(args: LogItemDataType);
    partialMatch(toMatch: LogItem): void;
}

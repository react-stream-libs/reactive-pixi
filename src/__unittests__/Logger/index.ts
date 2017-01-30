import * as _ from 'lodash';
import { BaseBlueprint } from '../../types/BaseBlueprint';
import { BasePropsType } from '../../types/BasePropsType';

export default class Logger {
  logs: Array<LogItem>;
  constructor(logs?: Array<LogItem>) {
    this.logs = logs || [];
  }
  add(logItem: LogItem) {
    this.logs.push(logItem);
  }
  partialMatch(partialLogItems: Array<LogItem>) {
    _.forEach(partialLogItems,
      (value, key) => this.logs[key].partialMatch(value)
    );
    // return _.reduce(partialLogItems,
    //   (result, value, key) => result && this.logs[key].partialMatch(value),
    //   true
    // )
  }
}

export type LogItemEventType = 'init' | 'update' | 'delete';

export type LogItemDataType = {
  [key: string]: BaseBlueprint<BasePropsType>
   | typeof BaseBlueprint
   | string
   | BasePropsType;
  instance?: BaseBlueprint<BasePropsType>,
  parentInstance?: BaseBlueprint<BasePropsType>,
  blueprint?: typeof BaseBlueprint,
  key?: string,
  type: LogItemEventType,
  props?: BasePropsType,
}
export class LogItem {
  data: LogItemDataType;
  constructor(args: LogItemDataType) {
    this.data = args;
  }
  partialMatch(toMatch: LogItem) {
    _.forEach(
      toMatch.data,
      (value, key) => {
        if (!_.isEqual(this.data[key], value)) {
          // FIXME: use stripMargins
          throw new Error(`
            LogItem Mismatch!
              value: ${value}
              key: ${key}
              this.data[key]: ${this.data[key]}
          `);
        }
      }
    )
  }
}
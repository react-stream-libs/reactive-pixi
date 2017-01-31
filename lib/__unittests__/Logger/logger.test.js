"use strict";

const chai = require("chai");
const _1 = require(".");
const Root_1 = require("../../components/Root");
describe('unittest logger should...', () => {
    it('should log correctly', () => {
        const logger = new _1.default();
        logger.add(new _1.LogItem({
            type: 'init',
            key: 'grandparent'
        }));
        logger.add(new _1.LogItem({
            type: 'init',
            blueprint: Root_1._Root,
            props: {
                key: '123'
            }
        }));
        logger.partialMatch([new _1.LogItem({
            type: 'init'
        }), new _1.LogItem({
            type: 'init',
            blueprint: Root_1._Root
        })]);
        chai.expect(() => {
            logger.partialMatch([new _1.LogItem({
                type: 'init'
            }), new _1.LogItem({
                type: 'update',
                blueprint: Root_1._Root
            })]);
        }).to.throw();
    });
});
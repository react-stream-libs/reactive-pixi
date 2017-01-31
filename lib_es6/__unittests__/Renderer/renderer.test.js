"use strict";
const canvas = require('canvas');
global['Canvas'] = canvas;
const pixi_js_1 = require("pixi.js");
const Grandparent_1 = require("./Components/Grandparent");
const Parent_1 = require("./Components/Parent");
const Logger_1 = require("../Logger");
const Renderer_1 = require("../../Renderer");
describe('Renderer should...', () => {
    it('corrently init, update, and remove one-depth', () => {
        const logger = new Logger_1.default();
        const pixiRenderer = new pixi_js_1.CanvasRenderer();
        const { GrandParent, _GrandParent } = Grandparent_1.getGrandparentComps(logger);
        const { Parent, _Parent } = Parent_1.getParentComps(logger);
        const renderer = new Renderer_1.default({
            renderer: pixiRenderer,
        });
        renderer.render(GrandParent({
            key: 'grandparent'
        }, []));
        logger.partialMatch([
            new Logger_1.LogItem({
                blueprint: _GrandParent,
                type: 'init',
            }),
            new Logger_1.LogItem({
                blueprint: _GrandParent,
                type: 'update',
            }),
        ]);
        renderer.render(GrandParent({
            key: 'grandparent',
        }, [
            Parent({
                key: 'parent',
            }, []),
        ]));
        const loggerAfterGrandparentInit = new Logger_1.default(logger.logs.slice(2));
        loggerAfterGrandparentInit.partialMatch([
            new Logger_1.LogItem({
                blueprint: _Parent,
                type: 'init',
            }),
            new Logger_1.LogItem({
                blueprint: _Parent,
                type: 'update',
            }),
            new Logger_1.LogItem({
                blueprint: _GrandParent,
                type: 'update',
            }),
        ]);
        renderer.render();
        const loggerAfterDeletion = new Logger_1.default(logger.logs.slice(5));
        loggerAfterDeletion.partialMatch([
            new Logger_1.LogItem({
                blueprint: _Parent,
                type: 'delete',
            }),
            new Logger_1.LogItem({
                blueprint: _GrandParent,
                type: 'delete',
            }),
        ]);
    });
});

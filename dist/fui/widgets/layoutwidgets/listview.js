"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListView = void 0;
const modifiedwidget_1 = require("../modifiedwidget");
const column_1 = require("../multiwidgets/column");
const row_1 = require("../multiwidgets/row");
class ListView extends modifiedwidget_1.ModifiedWidget {
    constructor({ iterable, builder, direction = "column", alignItems, justifyContent, gap = 0 }) {
        super();
        this.iterable = iterable;
        this.gap = gap;
        this.direction = direction;
        this.alignItems = alignItems;
        this.justifyContent = justifyContent;
        this.builder = builder;
        this.create();
    }
    widget() {
        var _a, _b, _c, _d;
        var widgetList = Array();
        for (let i = 0; i < this.iterable.length; i++) {
            const element = this.iterable[i];
            widgetList.push(this.builder(element, i));
        }
        let listView;
        if (this.direction == "row") {
            listView = new row_1.Row({
                gap: this.gap,
                justifyContent: (_a = this.justifyContent) !== null && _a !== void 0 ? _a : "start",
                alignItems: (_b = this.alignItems) !== null && _b !== void 0 ? _b : "center",
                children: widgetList,
            });
        }
        else {
            listView = new column_1.Column({
                gap: this.gap,
                justifyContent: (_c = this.justifyContent) !== null && _c !== void 0 ? _c : "start",
                alignItems: (_d = this.alignItems) !== null && _d !== void 0 ? _d : "start",
                children: widgetList,
            });
        }
        this.linkWidgets(listView);
        let component = this._renderer.defaultWidget();
        return component;
    }
}
exports.ListView = ListView;

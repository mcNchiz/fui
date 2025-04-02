"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JQueryApp = void 0;
const widget_1 = require("../widget");
class JQueryApp {
    constructor({ appContainer, body }) {
        this.component = $(appContainer);
        this.appContainer = this.component;
        this.appContainer.addClass("flexcolnogap");
        this.body = body;
    }
    render() {
        if (this.body instanceof widget_1.Widget) {
            this.body.setParentWidget(this);
            $(this.appContainer).empty();
            this.body.render();
        }
        else {
            this.appContainer.append(this.body);
        }
    }
}
exports.JQueryApp = JQueryApp;

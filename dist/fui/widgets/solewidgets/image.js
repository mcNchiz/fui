"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const solewidget_1 = require("../solewidget");
class Image extends solewidget_1.SoleWidget {
    constructor(url, width = "100%", height = "auto") {
        super({});
        this.url = url;
        this.width = width;
        this.height = height;
        this.create();
    }
    widget() {
        return this._renderer.createImage(this.url, this.width, this.height);
    }
}
exports.Image = Image;

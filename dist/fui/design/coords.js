"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinates = void 0;
class Coordinates {
    constructor({ top = "auto", bottom = "auto", left = "auto", right = "auto" }) {
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    static toCSS(c) {
        return {
            "top": c.top,
            "bottom": c.bottom,
            "left": c.left,
            "right": c.right
        };
    }
}
exports.Coordinates = Coordinates;
Coordinates.auto = new Coordinates({});

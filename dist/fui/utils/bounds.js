"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bounds = void 0;
class Bounds {
    constructor({ maxWidth = "auto", minWidth = "auto", maxHeight = "auto", minHeight = "auto" }) {
        this.maxWidth = maxWidth;
        this.minWidth = minWidth;
        this.maxHeight = maxHeight;
        this.minHeight = minHeight;
    }
    static default() {
        return new Bounds({});
    }
    static toCSS(bounds) {
        return {
            "max-width": bounds.maxWidth,
            "max-height": bounds.maxHeight,
            "min-width": bounds.minWidth,
            "min-height": bounds.minHeight,
        };
    }
}
exports.Bounds = Bounds;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greyButton = exports.blueButton = exports.BoxDecoration = void 0;
const color_1 = require("./color");
const spacing_1 = require("./spacing");
class BoxDecoration {
    constructor({ backgroundColor, customScrollBar = false, overflow, position, width = "100%", height, border = 0, shadow = "none", borderColor, radius, padding }) {
        this.customScrollBar = customScrollBar;
        this.backgroundColor = backgroundColor;
        this.width = width;
        this.height = height;
        this.border = border;
        this.overflow = overflow;
        this.borderColor = borderColor;
        this.radius = radius;
        this.shadow = shadow;
        this.padding = padding;
        this.position = position;
    }
    static default() {
        return new BoxDecoration({
            width: "100%",
        });
    }
    static emptyCSS() {
        return { "width": "100%" };
    }
    static toCSS(decoration) {
        const cssStyle = {};
        if (decoration.overflow) {
            cssStyle['overflow'] = decoration.overflow;
        }
        if (decoration.shadow != null) {
            cssStyle['box-shadow'] = decoration.shadow;
        }
        if (decoration.padding) {
            cssStyle['padding'] = spacing_1.EdgeInsets.toCSS(decoration.padding);
        }
        if (decoration.backgroundColor) {
            cssStyle['background-color'] = decoration.backgroundColor;
        }
        if (decoration.border != null) {
            cssStyle['border-width'] = decoration.border + "px";
            cssStyle['border-color'] = color_1.Colors.gray200;
        }
        if (decoration.borderColor) {
            cssStyle['border-color'] = decoration.borderColor;
        }
        if (decoration.radius != null) {
            cssStyle['border-radius'] = decoration.radius;
        }
        if (decoration.width != null) {
            cssStyle['width'] = decoration.width;
        }
        if (decoration.height) {
            cssStyle['height'] = decoration.height;
        }
        return cssStyle;
    }
}
exports.BoxDecoration = BoxDecoration;
exports.blueButton = new BoxDecoration({ backgroundColor: color_1.Colors.blue, radius: 4, padding: spacing_1.EdgeInsets.symmetric(8, 16), width: "auto" });
exports.greyButton = new BoxDecoration({ backgroundColor: color_1.Colors.gray450, radius: 4, padding: spacing_1.EdgeInsets.symmetric(8, 16), width: "auto" });

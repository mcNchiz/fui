"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextStyle = void 0;
class TextStyle {
    constructor({ color = "inherit", size = 16, singleLine = false, letterSpacing = "normal", lineHeight = "130%", alignment = "left", weight = "400" }) {
        this.color = color;
        this.weight = weight;
        this.lineHeight = lineHeight;
        this.singleLine = singleLine;
        this.letterSpacing = letterSpacing;
        this.alignment = alignment;
        this.size = size;
    }
    static default() {
        return new TextStyle({
            color: "inherit",
            size: 16,
            weight: "400",
        });
    }
    static toCSS(style) {
        const styleCss = {};
        if (style.alignment) {
            styleCss['alignment'] = style.alignment;
        }
        if (style.color) {
            styleCss['color'] = style.color;
        }
        if (style.letterSpacing) {
            styleCss['letter-spacing'] = style.letterSpacing;
        }
        if (style.lineHeight) {
            styleCss['line-height'] = style.lineHeight;
        }
        if (style.size) {
            styleCss['font-size'] = style.size + "px";
        }
        if (style.weight) {
            styleCss['font-weight'] = style.weight;
        }
        if (style.singleLine) {
            styleCss['white-space'] = "nowrap";
            styleCss['overflow'] = "hidden";
            styleCss['text-overflow'] = "ellipsis";
        }
        return styleCss;
    }
}
exports.TextStyle = TextStyle;

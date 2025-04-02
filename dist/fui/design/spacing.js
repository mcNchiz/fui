"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeInsets = void 0;
class EdgeInsets {
    static all(px) {
        return { left: px, top: px, right: px, bottom: px };
    }
    static symmetric(vertical, horizontal) {
        return { left: horizontal, top: vertical, right: horizontal, bottom: vertical };
    }
    static LTRB(left, top, right, bottom) {
        return { left, top, right, bottom };
    }
    static toCSS({ left, top, right, bottom }) {
        return `${top}px ${right}px ${bottom}px ${left}px`;
    }
}
exports.EdgeInsets = EdgeInsets;
EdgeInsets.zero = { left: 0, top: 0, right: 0, bottom: 0 };

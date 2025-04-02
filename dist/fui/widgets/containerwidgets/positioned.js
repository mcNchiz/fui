"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Positioned = void 0;
const design_1 = require("../../design");
const containerwidget_1 = require("../containerwidget");
class Positioned extends containerwidget_1.ContainerWidget {
    constructor({ child = null, position = "static", coordinates = design_1.Coordinates.auto }) {
        super({ child });
        this.position = position;
        this.coordinates = coordinates;
        this.create();
    }
    widget() {
        return this._renderer.createPositionedContainer({
            position: this.position,
            coordinates: this.coordinates,
        });
    }
}
exports.Positioned = Positioned;

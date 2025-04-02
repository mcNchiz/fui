"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
class App {
    constructor(app) {
        this.buildContext = "AppContext";
        this.app = app;
    }
    render() {
        this.app.render();
    }
}
exports.App = App;

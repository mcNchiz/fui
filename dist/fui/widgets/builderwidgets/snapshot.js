"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotBuilder = void 0;
const axios_1 = __importDefault(require("axios"));
const builderwidget_1 = require("../builderwidget");
const containerwidgets_1 = require("../containerwidgets");
const solewidgets_1 = require("../solewidgets");
class SnapshotBuilder extends builderwidget_1.BuilderWidget {
    constructor({ builder, refreshNotifier = null, type = "POST", url, data = null, blueprintWidget }) {
        super({ builder });
        this.snapshot = null;
        this.type = type;
        this.url = url;
        this.data = data;
        this.blueprintWidget = blueprintWidget;
        if (typeof builder !== "function") {
            throw new Error("SnapshotBuilder require functions as builder.");
        }
        if (refreshNotifier) {
            refreshNotifier.addListener((value) => {
                this.beginRequest(url);
            });
        }
        this.beginRequest(url);
        this.initialize();
    }
    initialize() {
        this.create();
        this.linkWidgets();
    }
    setValue(value) {
        this.value = value;
    }
    build() {
        return new containerwidgets_1.Container({
            child: this.value != null
                ? this.builder
                    ? this.builder(this.value)
                    : new solewidgets_1.Text("Builder missing")
                : this.blueprintWidget
                    ? this.blueprintWidget
                    : new solewidgets_1.Text("Loading"),
        });
    }
    getRequestType(url) {
        if (this.type == "POST") {
            return axios_1.default.post(url, this.data);
        }
        else {
            return axios_1.default.get(url);
        }
    }
    beginRequest(url) {
        this.getRequestType(url).then((response) => {
            this.setValue(response);
            this.updateUI();
        })
            .catch(function (error) {
            console.log(error);
        })
            .finally(function () { });
    }
}
exports.SnapshotBuilder = SnapshotBuilder;

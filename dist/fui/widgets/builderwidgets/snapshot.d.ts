import { BuilderWidget, IValueBuilder } from "../builderwidget";
import { IWidget } from "../../widget";
import { Container } from "../containerwidgets";
export declare class SnapshotBuilder<T> extends BuilderWidget<T> {
    snapshot: null;
    builder?: IValueBuilder<T> | undefined;
    type: string;
    url: string;
    data?: any;
    value?: any;
    blueprintWidget?: IWidget;
    constructor({ builder, refreshNotifier, type, url, data, blueprintWidget }: {
        blueprintWidget?: IWidget;
        url: string;
        data: any;
        type: string;
        refreshNotifier?: any;
        builder?: IValueBuilder<T>;
    });
    initialize(): void;
    setValue(value: any): void;
    build(): Container;
    getRequestType(url: string): Promise<import("axios").AxiosResponse<any, any>>;
    beginRequest(url: string): void;
}

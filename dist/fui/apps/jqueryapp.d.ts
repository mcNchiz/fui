export declare class JQueryApp {
    body: any;
    appContainer: JQuery<HTMLElement | string>;
    component: JQuery<HTMLElement | string>;
    constructor({ appContainer, body }: {
        appContainer: string;
        body: any;
    });
    render(): void;
}

export declare abstract class FUIModalContent {
    abstract getContentSelector(): string;
}
export declare class JQueryApp {
    body: any;
    appContainer: JQuery<HTMLElement | string>;
    component: JQuery<HTMLElement | string>;
    constructor({ appContainer, body }: {
        appContainer: string | FUIModalContent;
        body: any;
    });
    render(): void;
}

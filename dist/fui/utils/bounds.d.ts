export declare class Bounds {
    maxWidth: string;
    maxHeight: string;
    minWidth: string;
    minHeight: string;
    constructor({ maxWidth, minWidth, maxHeight, minHeight }: {
        maxWidth?: string | undefined;
        minWidth?: string | undefined;
        maxHeight?: string | undefined;
        minHeight?: string | undefined;
    });
    static default(): Bounds;
    static toCSS(bounds: Bounds): {
        "max-width": string;
        "max-height": string;
        "min-width": string;
        "min-height": string;
    };
}

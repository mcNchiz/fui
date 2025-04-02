export interface IPadding {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
export declare class EdgeInsets {
    static zero: IPadding;
    static all(px: number): IPadding;
    static symmetric(vertical: number, horizontal: number): IPadding;
    static LTRB(left: any, top: any, right: any, bottom: any): IPadding;
    static toCSS({ left, top, right, bottom }: IPadding): string;
}

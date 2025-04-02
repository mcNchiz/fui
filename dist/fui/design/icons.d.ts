export interface IconProps {
    name?: string;
    size?: string | number;
    color?: any;
}
export declare class BootstrapIcon implements IconProps {
    name: string;
    size: string | number;
    color: any;
    constructor({ name, size, color }: IconProps);
}

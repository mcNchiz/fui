import { ValueNotifier } from "../../state";
import { BuilderWidget, IValueBuilder } from "../builderwidget";
import { Container } from "../containerwidgets";
export declare class MotionTransition {
    delay?: number;
    animateOut: any;
    animateOutFrom: any;
    animateIn: any;
    animateInFrom: any;
    constructor({ animateOut, // Shrink effect
    animateOutFrom, animateIn, // Restore effect
    animateInFrom, delay, }?: {
        delay: number;
        animateOut: {
            opacity: number;
        };
        animateOutFrom: {
            from: number;
        };
        animateIn: {
            opacity: number;
        };
        animateInFrom: {
            from: number;
        };
    });
    static default: {
        delay: number;
        animateOut: {
            opacity: number;
        };
        animateOutFrom: {
            from: number;
        };
        animateIn: {
            opacity: number;
        };
        animateInFrom: {
            from: number;
        };
    };
    static scaleOut: {
        delay: number;
        animateOut: {
            scale: number;
            opacity: number;
        };
        animateOutFrom: {
            scale: number;
            opacity: number;
        };
        animateIn: {
            scale: number;
            opacity: number;
        };
        animateInFrom: {
            scale: number;
            opacity: number;
        };
    };
    static popUp: {
        animateOut: {
            opacity: number;
            y: number;
        };
        animateOutFrom: {
            opacity: number;
            y: number;
        };
        animateIn: {
            y: number;
            opacity: number;
        };
        animateInFrom: {
            y: number;
            opacity: number;
        };
    };
}
export declare class ValueTransitionListener<T> extends BuilderWidget<T> {
    notifier: ValueNotifier<T>;
    transition: MotionTransition;
    value: T | null;
    constructor({ notifier, builder, transition }: {
        transition: MotionTransition;
        notifier: ValueNotifier<T>;
        builder: IValueBuilder<T>;
    });
    initialize(): void;
    setValue(value: T | null): void;
    updateUI(): Promise<void>;
    build(): Container;
}

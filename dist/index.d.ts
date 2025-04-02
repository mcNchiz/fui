import jQuery from "jquery";
declare global {
    interface Window {
        $: typeof jQuery;
    }
}
export * from './fui';

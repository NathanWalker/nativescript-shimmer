import { ContentView } from "ui/content-view";
export declare class Shimmer extends ContentView {
    private _ios;
    private _enabled;
    constructor();
    ios: any;
    _nativeView: any;
    enabled: boolean;
    onLoaded(): void;
}

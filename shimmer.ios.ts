import {ContentView} from "ui/content-view";

declare var FBShimmeringView, CGRectMake;

export class Shimmer extends ContentView {
  private _ios: any;
  private _enabled: boolean = true;
  
  constructor() {
    super();
    this._ios = FBShimmeringView.alloc().initWithFrame(CGRectMake(0, 0, 0, 0));
  }

  get ios(): any {
    return this._ios;
  }

  get _nativeView(): any {
    return this._ios;
  }

  get enabled(): boolean {
    return this._enabled;
  }

  set enabled(value: boolean) {
    this._enabled = value;
    if (this._ios) {
      this._ios.shimmering = value;
    }
  }
  
  public onLoaded() {
    this._ios.contentView = this.content.ios;
    this._ios.shimmering = this._enabled;
  }
}
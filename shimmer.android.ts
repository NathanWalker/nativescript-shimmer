import {ContentView} from 'ui/content-view';

declare var com, android;

export class Shimmer extends ContentView {
  private _androidViewId: number;
  private _android: any;
  private _enabled: boolean = true;

  get android(): any {
    return this._android;
  }

  get _nativeView(): any {
    return this._android;
  }

  get enabled(): boolean {
    return this._enabled;
  }

  set enabled(value: boolean) {
    this._enabled = value;
    if (this._android) {
      if (value) {
        this._android.startShimmerAnimation();
      } else {
        this._android.stopShimmerAnimation();
      }
    }
  }

  public createNativeView() {
    this._android = new com.facebook.shimmer.ShimmerFrameLayout(this._context);

    if (!this._androidViewId) {
      this._androidViewId = android.view.View.generateViewId();
    }
    this._android.setId(this._androidViewId);

    if (this._enabled) this.enabled = true;

    return this._android;
  }
}
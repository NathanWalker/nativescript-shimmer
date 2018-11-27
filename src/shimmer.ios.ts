import { Shimmer as ShimmerBase, enabledProperty } from './shimmer.common';

export class Shimmer extends ShimmerBase {

  public nativeViewProtected: FBShimmeringView;

  get ios() {
    return this.nativeViewProtected;
  }

  createNativeView(): any {
    return FBShimmeringView.alloc().initWithFrame(CGRectMake(0,0,400,500));
  }

  initNativeView() {
    console.log('initNativeView this.nativeViewProtected:', this.nativeViewProtected);
    this.nativeViewProtected.contentView = this.content.ios;
    console.log('initNativeView this.nativeViewProtected.contentView:', this.nativeViewProtected.contentView);
    this.nativeViewProtected.shimmering = true;
    console.log('initNativeView this.nativeViewProtected.shimmering:', this.nativeViewProtected.shimmering);
  }

  [enabledProperty.setNative](value: boolean) {
    console.log('this.nativeViewProtected enabledProperty.setNative called:', this.nativeViewProtected);
    console.log('value:', value);
    this.nativeViewProtected.shimmering = value;
  }

  [enabledProperty.getDefault](): boolean {
    console.log('getDefault called!!');
    return true;
  }
}
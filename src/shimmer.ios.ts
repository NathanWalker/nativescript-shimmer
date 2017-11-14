import { Shimmer as ShimmerBase, enabledProperty } from './shimmer.common';

declare var FBShimmeringView, CGRectMake;

export class Shimmer extends ShimmerBase {

  createNativeView(): any {
    return FBShimmeringView.alloc().initWithFrame(CGRectMake(0, 0, 0, 0));
  }

  initNativeView() {
    this.nativeView.contentView = this.content.ios;
  }

  [enabledProperty.setNative](value: boolean) {
    this.nativeView.shimmering = value;
  }
}
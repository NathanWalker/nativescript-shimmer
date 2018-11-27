import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
// import {topmost} from 'tns-core-modules/ui/frame';
import {isIOS} from 'tns-core-modules/platform';
import {ShimmerDemo} from './main-view-model';

export function pageLoaded(args: observable.EventData) {
  let page = <pages.Page>args.object;
  page.bindingContext = new ShimmerDemo(page);
  
  // if (isIOS) {
  //   if (topmost().ios) {
  //     let navigationBar = topmost().ios.controller.navigationBar;
  //     navigationBar.barStyle = 1;
  //   }
  // }
}
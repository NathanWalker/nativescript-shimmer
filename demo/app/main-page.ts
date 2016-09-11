import * as observable from "data/observable";
import * as pages from "ui/page";
import {topmost} from "ui/frame";
import {isIOS} from "platform";
import {ShimmerDemo} from "./main-view-model";

export function pageLoaded(args: observable.EventData) {
  let page = <pages.Page>args.object;
  page.bindingContext = new ShimmerDemo(page);
  
  if (isIOS) {
    if (topmost().ios) {
      let navigationBar = topmost().ios.controller.navigationBar;
      navigationBar.barStyle = 1;
    }
  }
}
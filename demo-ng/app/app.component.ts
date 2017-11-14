import { Component } from "@angular/core";
import { isIOS } from 'tns-core-modules/platform';
import { topmost } from 'tns-core-modules/ui/frame';

import { registerElement } from 'nativescript-angular/element-registry';
registerElement('Shimmer', () => require('nativescript-shimmer').Shimmer);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    constructor() {
        if (isIOS) {
            topmost().ios.controller.navigationBar.barStyle = 1;
        }
    }
 }

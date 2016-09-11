## NativeScript Shimmer

Facebook shimmer effect for your NativeScript app.

Uses the following native plugins:

* iOS: https://github.com/facebook/Shimmer
* Android: http://facebook.github.io/shimmer-android/

### Demo

![Demo](https://cdn.filestackcontent.com/PGhmVZmQqOYjv5v0OCl5?v=0)

### Usage

* `main-page.xml`:

```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd" 
  xmlns:sh="nativescript-shimmer" 
  loaded="pageLoaded">
  <StackLayout>
    <sh:Shimmer id="shimmer">
      <Label text="Shimmer" />     
    </sh:Shimmer>
    <Button text="Toggle" tap="{{toggleShimmer}}" />
  </StackLayout>
</Page>
```

* `main-page.ts`:

```Javascript
import {EventData, Observable} from "data/observable";
import {Page} from "ui/page";

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <Page>args.object;
    page.bindingContext = new ShimmerDemo(page);
}

class ShimmerDemo extends Observable {
  private _enableTxt: string;
  private _shimmer: any;

  constructor(page: Page) {
    super();
    this._shimmer = page.getViewById('shimmer');
  }

  public toggleShimmer() {
    this._shimmer.enabled = !this._shimmer.enabled;
  }
}
```

### LICENSE

MIT

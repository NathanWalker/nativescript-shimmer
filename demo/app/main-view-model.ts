import {Observable} from "data/observable";
import {Page} from 'ui/page';

export class ShimmerDemo extends Observable {
  private _enableTxt: string;
  private _shimmer: any;

  constructor(page: Page) {
    super();

    this._shimmer = page.getViewById('shimmer');
    this.enableTxt = 'Stop';
  }

  get enableTxt(): string {
    return this._enableTxt;
  }
  
  set enableTxt(value: string) {
    if (this._enableTxt !== value) {
      this._enableTxt = value;
      this.notifyPropertyChange('enableTxt', value)
    }
  }

  public enable() {
    if (this._enableTxt == 'Start') {
      this.enableTxt = 'Stop';
      this._shimmer.enabled = true;
    } else {
      this.enableTxt = 'Start';
      this._shimmer.enabled = false;
    }
  }
}
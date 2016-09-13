import {Observable} from "data/observable";
import {Page} from 'ui/page';

export class ShimmerDemo extends Observable {
  public enableTxt = 'Stop';
  private _enabled: boolean = true;

  constructor(page: Page) {
    super();
  }

  public toggle() {
    this._enabled = !this._enabled;
    this.set('enabled', this._enabled);
    this.set('enableTxt', this._enabled ? 'Stop' : 'Start');
  }
}
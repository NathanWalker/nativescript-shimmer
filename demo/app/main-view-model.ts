import {Observable} from 'tns-core-modules/data/observable';
import {Page} from 'tns-core-modules/ui/page';
import { Shimmer } from 'nativescript-shimmer';

export class ShimmerDemo extends Observable {
  public enableTxt = 'Stop';
  public enabled: boolean = true;

  constructor(page: Page) {
    super();
  }

  public toggle() {
    this.set('enabled', !this.enabled);
    this.set('enableTxt', this.enabled ? 'Stop' : 'Start');
  }
}
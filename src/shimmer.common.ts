import { ContentView } from 'tns-core-modules/ui/content-view';
import { Property, booleanConverter } from 'tns-core-modules/ui/core/view';

export class Shimmer extends ContentView {
  public enabled: boolean = true;
}

export const enabledProperty = new Property<Shimmer, boolean>({
  name: 'enabled'
});
enabledProperty.register(Shimmer);
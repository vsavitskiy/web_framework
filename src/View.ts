import { Model } from './Model';
import { Storable } from './types';

// eslint-disable-next-line no-use-before-define
export abstract class View<T extends Model<K>, K extends Storable> {
  constructor(public parent: HTMLElement, public model: T) {
    this.model.on('change', this.render.bind(this));
  }

  abstract events(): { [key: string]: (e: Event) => void };

  abstract template(): string;

  bindEvents(fragment: DocumentFragment): void {
    const events = this.events();

    if (fragment) {
      Object.keys(events).forEach((key) => {
        const [eventName, element] = key.split(':');
        const node = fragment.querySelector(element);

        if (node) {
          node.addEventListener(eventName, events[key]);
        }
      });
    }
  }

  render(): void {
    if (!this.parent) {
      throw new Error(
        `Cannot find parent element for ${this.constructor.name} view`,
      );
    }

    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}

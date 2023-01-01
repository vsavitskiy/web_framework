import { AxiosPromise } from 'axios/index';
import { Storable } from './types';

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
  set(data: T): void;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise<T>;
  save(data: T): AxiosPromise<T>;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Model<T extends Storable> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>,
  ) {}

  async fetch(): Promise<void> {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    const response = await this.sync.fetch(id);
    this.set(response.data);
  }

  async save(): Promise<void> {
    try {
      const response = await this.sync.save(this.attributes.getAll());
      this.set(response.data);
      this.trigger('save');
    } catch (e) {
      this.trigger('error');
    }
  }

  get on() {
    return this.events.on.bind(this.events);
  }

  get trigger() {
    return this.events.trigger.bind(this.events);
  }

  get get() {
    return this.attributes.get.bind(this.attributes);
  }

  set(data: T) {
    this.attributes.set(data);
    this.events.trigger('change');
  }

  get getAll() {
    return this.attributes.getAll.bind(this.attributes);
  }
}

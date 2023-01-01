import axios, { AxiosPromise } from 'axios/index';
import { Storable } from './types';

export class ApiSync<T extends Storable> {
  constructor(private rootURL: string) {}

  fetch(id: number): AxiosPromise<T> {
    return axios.get<T>(`${this.rootURL}/${id}`);
  }

  save(data: T): AxiosPromise<T> {
    const { id } = data;

    if (typeof id === 'number') {
      return axios.put<T>(`${this.rootURL}/${id}`, data);
    }

    return axios.post(this.rootURL, data);
  }
}

import axios, { AxiosPromise } from 'axios/index';
import { Storable } from './types';

export class ApiSync<T extends Storable> {
  constructor(private rootURL: string) {}

  async fetch(id: number): AxiosPromise<T> {
    const response = await axios.get(`${this.rootURL}/${id}`);
    return response.data;
  }

  async save(data: T): AxiosPromise<T> {
    const { id } = data;

    if (typeof id === 'number') {
      return axios.put(`${this.rootURL}/${id}`, data);
    }

    return axios.post(this.rootURL, data);
  }
}

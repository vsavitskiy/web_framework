import { Model } from '../Model';
import { Attributes } from '../Attributes';
import { Eventing } from '../Eventing';
import { ApiSync } from '../ApiSync';

export interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserData> {
  static create(userData: UserData): User {
    return new User(new Attributes<UserData>(userData), new Eventing(), new ApiSync<UserData>('/users'));
  }
}

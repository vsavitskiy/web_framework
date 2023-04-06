import { View } from '../View';
import { User, UserData } from '../models/User';

export class UserInfo extends View<User, UserData> {
  template(): string {
    return `
      <div>
        <h1>User Detail</h1>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
      </div>
    `;
  }
}

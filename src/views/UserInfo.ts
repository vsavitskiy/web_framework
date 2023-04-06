import { View } from '../View';
import { User, UserData } from '../models/User';
import { UserForm } from './UserForm';

export class UserInfo extends View<User, UserData> {
  regionsMap(): { [p: string]: string } {
    return {
      userForm: '#user-form',
    };
  }

  onRender() {
    new UserForm(this.regions.userForm, this.model).render();
  }

  template(): string {
    return `
      <div>
        <h1>User Detail</h1>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
        <div id="user-form"></div>
      </div>
    `;
  }
}

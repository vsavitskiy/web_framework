import { View } from '../View';
import { User, UserData } from '../models/User';
import { UserInfo } from './UserInfo';
import { UserForm } from './UserForm';

export class UserEdit extends View<User, UserData> {
  regionsMap(): { [p: string]: string } {
    return {
      userDetail: '#user-detail',
      userForm: '#user-form',
    };
  }

  onRender() {
    new UserInfo(this.regions.userDetail, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  template(): string {
    return `
      <div>
        <div id="user-detail"></div>
        <div id="user-form"></div>
      </div>
    `;
  }
}

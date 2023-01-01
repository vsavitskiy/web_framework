import { View } from '../View';
import { User, UserData } from '../models/User';

export class UserForm extends View<User, UserData> {
  events(): { [key: string]: (e: Event) => void } {
    return {
      'click:#nameButton': this.onNameButtonClick,
      'click:#ageButton': this.onAgeButtonClick,
    };
  }

  onNameButtonClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input && input.value) {
      this.model.set({ name: input.value });
    }
  };

  onAgeButtonClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button id="nameButton">Change name</button>
        <button id="ageButton">Set Random Age</button>
      </div>
    `;
  }
}

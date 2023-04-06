import { View } from '../View';
import { User, UserData } from '../models/User';

export class UserForm extends View<User, UserData> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:#nameButton': this.onNameButtonClick,
      'click:#ageButton': this.onAgeButtonClick,
      'click:#saveModel': this.onSaveModel,
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

  onSaveModel = (): void => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
        <input />
        <button id="nameButton">Change name</button>
        <button id="ageButton">Set Random Age</button>
        <button id="saveModel">Save User</button>
      </div>
    `;
  }
}

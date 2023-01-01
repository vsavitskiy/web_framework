import './api';
import { UserForm } from './views/UserForm';
import { User } from './models/User';

const rootElement = document.getElementById('root');
const user = User.create({ id: 1 });
user.fetch().then(() => {
  if (!rootElement) {
    return;
  }

  const userForm = new UserForm(rootElement, user);
  userForm.render();
});

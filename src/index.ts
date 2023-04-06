import './api';
import { UserList } from './views/UserList';
import { User, UserData } from './models/User';
import { Collection } from './Collection';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserData) => {
    return User.create(json);
  },
);

users.on('change', () => {
  const rootElement = document.getElementById('root');

  if (rootElement) {
    new UserList(rootElement, users).render();
  }
});

users.fetch();

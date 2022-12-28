import './api';
import { User } from './models/User';

const test = async () => {
  const user = User.create({ name: 'Vlad', age: 33 });
  await user.save();
  await user.set({ age: 30 });
  console.log(user.getAll());
  await user.save();
};

test();

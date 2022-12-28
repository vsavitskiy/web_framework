import './api';
import { Collection } from './Collection';
import { User, UserData } from './models/User';

const collection = new Collection<User, UserData>('/users', User.create);

collection.on('change', () => console.log(collection));

collection.fetch();

import { CollectionView } from '../CollectionView';
import { User, UserData } from '../models/User';
import { UserInfo } from './UserInfo';

export class UserList extends CollectionView<User, UserData> {
  renderItem(model: User, parent: Element): void {
    new UserInfo(parent, model).render();
  }
}

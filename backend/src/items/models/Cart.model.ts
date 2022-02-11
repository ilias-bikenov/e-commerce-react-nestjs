import { ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from 'src/users/models/User.model';
import { CartItem } from './CartItem.model';

@Table({
  tableName: 'carts',
})
export class Cart extends Model {
  @ForeignKey(() => User)
  user: User;

  @HasMany(() => CartItem)
  cartItems: CartItem[];
}

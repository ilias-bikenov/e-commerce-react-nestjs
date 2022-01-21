import {
  BelongsTo,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { CartItemEntity } from './CartItem.entity';
import { UserEntity } from './User.entity';

@Table({
  tableName: 'carts',
})
export class CartEntity extends Model {
  @ForeignKey(() => UserEntity)
  user: UserEntity;

  @HasMany(() => CartItemEntity)
  cartItems: CartItemEntity[];
}

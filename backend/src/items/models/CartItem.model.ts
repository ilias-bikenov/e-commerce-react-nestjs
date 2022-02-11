import { Column, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { Cart } from './Cart.model';
import { Item } from './Item.model';

@Table({
  tableName: 'cart_items',
})
export class CartItem extends Model {
  @ForeignKey(() => Cart)
  @Column({ field: 'user_id' })
  userId: number;

  @HasOne(() => Item)
  item: number;
}

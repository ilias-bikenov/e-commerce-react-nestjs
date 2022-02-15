import { Column, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { Cart } from './Cart.model';
import { Item } from './Item.model';

@Table({
  tableName: 'cart_items',
})
export class CartItem extends Model {
  @ForeignKey(() => Cart)
  @Column({ type: 'integer', field: 'cart_id' })
  cartId: number;

  @ForeignKey(() => Item)
  @Column({ type: 'integer', field: 'user_id' })
  itemId: number;
}

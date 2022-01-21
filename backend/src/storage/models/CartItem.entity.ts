import { Column, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { CartEntity } from './Cart.entity';
import { ItemEntity } from './Item.entity';

@Table({
  tableName: 'cart_items',
})
export class CartItemEntity extends Model {
  @ForeignKey(() => CartEntity)
  @Column({ field: 'user_id' })
  userId: number;

  @HasOne(() => ItemEntity)
  item: number;
}

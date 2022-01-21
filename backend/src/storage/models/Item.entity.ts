import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { CartItemEntity } from './CartItem.entity';
import { ItemInfoEntity } from './ItemInfo.entity';
import { RatingEntity } from './Rating.entity';
import { TypeEntity } from './Type.entity';

@Table({
  tableName: 'items',
})
export class ItemEntity extends Model {
  @Column({ type: 'text', unique: true })
  name: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'int', defaultValue: 0 })
  rating: number;

  @Column({ type: 'text' })
  img: string;

  @ForeignKey(() => TypeEntity)
  @Column({ field: 'type_id' })
  typeId: number;

  @HasMany(() => RatingEntity)
  ratings: RatingEntity[];

  @HasMany(() => ItemInfoEntity)
  itemInfos: ItemInfoEntity[];

  @ForeignKey(() => CartItemEntity)
  @Column({ field: 'cart_item_id' })
  cartItemId: number;
}

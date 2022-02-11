import {
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Type } from 'src/types/models/Type.model';
import { CartItem } from './CartItem.model';
import { ItemInfo } from './ItemInfo.model';
import { Rating } from './Rating.model';

// interface ItemCreationAttr {
//   email: string;
//   password: string;
// }

@Table({
  tableName: 'items',
})
export class Item extends Model<Item> {
  @Column({ type: 'text', unique: true })
  name: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'int', defaultValue: 0 })
  rating: number;

  @Column({ type: 'text' })
  img: string;

  @ForeignKey(() => Type)
  @Column({ field: 'type_id' })
  typeId: number;

  @HasMany(() => Rating)
  ratings: Rating[];

  @HasMany(() => ItemInfo)
  itemInfos: ItemInfo[];

  @ForeignKey(() => CartItem)
  @Column({ field: 'cart_item_id' })
  cartItemId: number;
}

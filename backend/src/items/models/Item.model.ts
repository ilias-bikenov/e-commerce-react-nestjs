import {
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Type } from 'src/types/models/Type.model';
import { ItemInfo } from './ItemInfo.model';
import { Rating } from './Rating.model';

interface ItemCreationAttrs {
  name: string;
  price: number;
  img: string;
}

@Table({
  tableName: 'items',
})
export class Item extends Model<Item, ItemCreationAttrs> {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'int', defaultValue: 0 })
  rating: number;

  @Column({ type: 'text' })
  img: string;

  @ForeignKey(() => Type)
  @Column({ type: 'integer', field: 'type_id' })
  typeId: number;

  @HasMany(() => Rating)
  ratings: Rating[];

  @HasMany(() => ItemInfo)
  itemInfo: ItemInfo[];
}

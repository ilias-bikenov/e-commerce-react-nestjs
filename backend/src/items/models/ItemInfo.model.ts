import {
  Column,
  Model,
  Table,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Item } from './Item.model';

@Table({
  tableName: 'item_info',
})
export class ItemInfo extends Model {
  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @ForeignKey(() => Item)
  @Column({ field: 'item_id' })
  itemId: number;

  @BelongsTo(() => Item)
  item: Item;
}

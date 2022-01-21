import {
  Column,
  Model,
  Table,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { ItemEntity } from './Item.entity';

@Table({
  tableName: 'item_info',
})
export class ItemInfoEntity extends Model {
  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @ForeignKey(() => ItemEntity)
  @Column({ field: 'item_id' })
  itemId: number;

  @BelongsTo(() => ItemEntity)
  item: ItemEntity;
}

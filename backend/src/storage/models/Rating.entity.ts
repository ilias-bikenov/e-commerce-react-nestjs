import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ItemEntity } from './Item.entity';
import { UserEntity } from './User.entity';

@Table({
  tableName: 'ratings',
})
export class RatingEntity extends Model {
  @Column({ type: 'int' })
  rate: number;

  @ForeignKey(() => UserEntity)
  @Column({ field: 'user_id' })
  userId: number;

  @ForeignKey(() => ItemEntity)
  @Column({ field: 'item_id' })
  itemId: number;
}

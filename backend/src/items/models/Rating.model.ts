import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/users/models/User.model';
import { Item } from './Item.model';

@Table({
  tableName: 'ratings',
})
export class Rating extends Model {
  @Column({ type: 'int' })
  rate: number;

  @ForeignKey(() => User)
  @Column({ field: 'user_id' })
  userId: number;

  @ForeignKey(() => Item)
  @Column({ field: 'item_id' })
  itemId: number;
}

import { Column, HasMany, Model, NotNull, Table } from 'sequelize-typescript';
import { Item } from 'src/items/models/Item.model';

@Table({
  tableName: 'types',
})
export class Type extends Model {
  @Column({ type: 'text', allowNull: false })
  name: string;

  @HasMany(() => Item)
  items: Item[];
}

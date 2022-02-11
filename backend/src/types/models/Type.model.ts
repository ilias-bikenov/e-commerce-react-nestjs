import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Item } from 'src/items/models/Item.model';

@Table({
  tableName: 'types',
})
export class Type extends Model {
  @Column({ type: 'text' })
  name: string;

  @HasMany(() => Item)
  items: Item[];
}

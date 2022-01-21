import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { ItemEntity } from './Item.entity';

@Table({
  tableName: 'types',
})
export class TypeEntity extends Model {
  @Column({ type: 'text' })
  name: string;

  @HasMany(() => ItemEntity)
  items: ItemEntity[];
}

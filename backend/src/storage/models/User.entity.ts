import {
  Column,
  HasMany,
  HasOne,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { CartEntity } from './Cart.entity';
import { RatingEntity } from './Rating.entity';

@Table({
  tableName: 'users',
})
export class UserEntity extends Model {
  @Unique
  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text', defaultValue: 'USER' })
  role: string;

  @HasOne(() => CartEntity)
  cart: CartEntity;

  @HasMany(() => RatingEntity)
  ratings: RatingEntity;
}

import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  HasMany,
  HasOne,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Cart } from 'src/items/models/Cart.model';
import { Rating } from 'src/items/models/Rating.model';
import { Role } from 'src/roles/models/Role.model';
import { UserRole } from 'src/roles/models/userRoles.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({
  tableName: 'users',
})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ description: 'Email' })
  @Unique
  @Column({ type: 'text' })
  email: string;

  @ApiProperty({ description: 'Password' })
  @Column({ type: 'text' })
  password: string;

  @HasOne(() => Cart)
  cart: Cart;

  @HasMany(() => Rating)
  ratings: Rating;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];
}

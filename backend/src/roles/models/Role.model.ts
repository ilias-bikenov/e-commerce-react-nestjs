import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { User } from 'src/users/models/User.model';
import { UserRole } from './userRoles.model';

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({
  tableName: 'roles',
})
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ description: 'Role name' })
  @Unique
  @Column({ type: 'text' })
  value: string;

  @ApiProperty({ description: 'Role description' })
  @Column({ type: 'text' })
  description: string;

  @BelongsToMany(() => User, () => UserRole)
  users: User[];
}

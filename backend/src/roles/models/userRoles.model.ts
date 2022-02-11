import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/users/models/User.model';
import { Role } from './Role.model';

@Table({
  tableName: 'user_roles',
  createdAt: false,
  updatedAt: false,
})
export class UserRole extends Model<UserRole> {
  @ForeignKey(() => Role)
  @Column({ type: 'integer' })
  roleId: string;

  @ForeignKey(() => User)
  @Column({ type: 'integer' })
  userId: string;
}

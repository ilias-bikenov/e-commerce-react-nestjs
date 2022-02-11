import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user.controller';
import { User } from './models/User.model';
import { UserService } from './user.service';
import { Role } from 'src/roles/models/Role.model';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    RolesModule,
    SequelizeModule.forFeature([User, Role]),
    forwardRef(() => AuthModule),
  ],
  exports: [UserService],
})
export class UserModule {}

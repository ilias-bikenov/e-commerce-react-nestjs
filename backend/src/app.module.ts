import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemController } from './items/item.controller';
import { ItemModule } from './items/item.module';
import { ItemService } from './items/item.service';
import { TypeController } from './types/type.controller';
import { TypeService } from './types/type.service';
import { UserModule } from './users/user.module';
import { RolesModule } from './roles/roles.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      //NODE_ENV - enviroment variable which is created when server starts
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    UserModule,
    ItemModule,
    RolesModule,
    AuthModule,
  ],
  controllers: [AppController, TypeController, ItemController],
  providers: [AppService, TypeService, ItemService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { config } from 'dotenv';
import { UserEntity } from './models/User.entity';
import { CartEntity } from './models/Cart.entity';
import { CartItemEntity } from './models/CartItem.entity';
import { ItemEntity } from './models/Item.entity';
import { ItemInfoEntity } from './models/ItemInfo.entity';
import { RatingEntity } from './models/Rating.entity';
import { TypeEntity } from './models/Type.entity';
config();

@Module({
  imports: [
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
    SequelizeModule.forFeature([
      UserEntity,
      CartEntity,
      CartItemEntity,
      TypeEntity,
      ItemEntity,
      ItemInfoEntity,
      RatingEntity,
    ]),
  ],
})
export class StorageModule {}

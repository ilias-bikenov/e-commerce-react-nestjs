import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from './models/Cart.model';
import { CartItem } from './models/CartItem.model';
import { ItemController } from './item.controller';
import { Item } from './models/Item.model';
import { ItemService } from './item.service';
import { ItemInfo } from './models/ItemInfo.model';
import { Rating } from './models/Rating.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Cart, CartItem, Item, ItemInfo, Rating]),
  ],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}

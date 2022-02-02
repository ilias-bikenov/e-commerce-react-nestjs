import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemController } from './controllers/item.controller';
import { TypeController } from './controllers/type.controller';
import { UserController } from './controllers/user.controller';
import { ItemService } from './services/item.service';
import { TypeService } from './services/type.service';
import { UserService } from './services/user.service';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [StorageModule],
  controllers: [AppController, UserController, TypeController, ItemController],
  providers: [AppService, UserService, TypeService, ItemService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { ItemEntity } from 'src/storage/models/Item.entity';

@Injectable()
export class ItemService {
  getItem(id: number): ItemEntity {
    return;
  }

  getAllItems(): ItemEntity[] {
    return;
  }
}

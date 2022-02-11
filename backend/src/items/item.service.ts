import { Injectable } from '@nestjs/common';
import { Item } from './models/Item.model';

@Injectable()
export class ItemService {
  getItem(id: number): Item {
    return;
  }

  getAllItems(): Item[] {
    return;
  }
}

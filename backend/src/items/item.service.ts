import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateItemDto } from './dto/createItem.dto';
import { Item } from './models/Item.model';

@Injectable()
export class ItemService {
  constructor(
    @InjectModel(Item) private itemRepository: typeof Item,
    private filesService: FilesService,
  ) {}

  async getItemById(id: number): Promise<Item> {
    const item = await this.itemRepository.findByPk(id, {
      include: { all: true },
    });
    if (!item) {
      throw new HttpException('No item with this id', HttpStatus.BAD_REQUEST);
    }
    return item;
  }

  async getAllItems(): Promise<Item[]> {
    const items = await this.itemRepository.findAll({ include: { all: true } });
    return items;
  }

  async addItem(dto: CreateItemDto, image: any) {
    try {
      let fileName;
      if (image) {
        fileName = await this.filesService.createFile(image);
      }
      const item = await this.itemRepository.create({ ...dto, img: fileName });
      return item;
    } catch (e) {
      Logger.error(e);
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }
}

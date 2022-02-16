import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateItemDto } from './dto/createItem.dto';
import { Item } from './models/Item.model';
import { ItemInfo } from './models/ItemInfo.model';

@Injectable()
export class ItemService {
  constructor(
    @InjectModel(Item) private itemRepository: typeof Item,
    @InjectModel(ItemInfo) private itemInfoRepository: typeof ItemInfo,
    private filesService: FilesService,
  ) {}

  async getItemById(id: number): Promise<Item> {
    const item = await this.itemRepository.findByPk(id, {
      include: { model: ItemInfo },
    });
    if (!item) {
      throw new HttpException('No item with this id', HttpStatus.BAD_REQUEST);
    }
    return item;
  }

  async getAllItems(
    typeId: number = null,
    page = 1,
    limit = 10,
  ): Promise<Item[]> {
    const offset = page * limit - limit;
    let items;

    if (!typeId) {
      //count all items to return to calculate number of pages on frontend
      items = await this.itemRepository.findAndCountAll({
        include: { model: ItemInfo },
        limit,
        offset,
      });
    }

    if (typeId) {
      items = await this.itemRepository.findAndCountAll({
        include: { model: ItemInfo },
        where: { typeId },
        limit,
        offset,
      });
    }

    return items;
  }

  async addItem(itemDto: CreateItemDto, image: any) {
    try {
      let fileName;
      if (image) {
        fileName = await this.filesService.createFile(image);
      }
      const item = await this.itemRepository.create({
        ...itemDto,
        img: fileName,
      });

      await this.itemInfoRepository.create({
        title: itemDto.title,
        description: itemDto.description,
        itemId: item.id,
      });
      return item;
    } catch (e) {
      Logger.error(e);
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }
}

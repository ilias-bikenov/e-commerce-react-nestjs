import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateItemDto } from './dto/createItem.dto';
import { ItemService } from './item.service';

@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Get()
  getAllItems(@Query() query) {
    const { typeId, limit, page } = query;
    return this.itemService.getAllItems(typeId, page, limit);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  addItem(@Body() itemDto: CreateItemDto, @UploadedFile() image: any) {
    return this.itemService.addItem(itemDto, image);
  }

  @Get(':id')
  getItem(@Param('id') id: number) {
    return this.itemService.getItemById(id);
  }
}

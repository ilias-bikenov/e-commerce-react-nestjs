import {
  Body,
  Controller,
  Get,
  Param,
  Post,
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
  getAllItems() {
    return this.itemService.getAllItems();
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  addItem(@Body() dto: CreateItemDto, @UploadedFile() image: any) {
    return this.itemService.addItem(dto, image);
  }

  @Get(':id')
  getItem(@Param('id') id: number) {
    return this.itemService.getItemById(id);
  }
}

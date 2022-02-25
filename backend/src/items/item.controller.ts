import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/roleAuth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
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

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  @UseInterceptors(FileInterceptor('img'))
  addItem(@Body() itemDto: CreateItemDto, @UploadedFile() image: any) {
    return this.itemService.addItem(itemDto, image);
  }

  @Get(':id')
  getItem(@Param('id') id: number) {
    return this.itemService.getItemById(id);
  }
}

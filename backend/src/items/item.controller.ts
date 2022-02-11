import { Controller, Get, Post, Req } from '@nestjs/common';

@Controller('items')
export class ItemController {
  @Post('/')
  getItems(@Req() req) {
    return;
  }

  @Get('/')
  addItem(@Req() req) {
    return;
  }

  @Get(':id')
  getItem(@Req() req) {
    return;
  }
}

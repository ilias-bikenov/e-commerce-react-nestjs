import { Controller, Get, Post } from '@nestjs/common';

@Controller('types')
export class TypeController {
  @Post()
  getTypes(): string {
    return;
  }

  @Get()
  addType(): string {
    return;
  }
}

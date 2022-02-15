import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTypeDto } from './dto/createType.dto';
import { TypesService } from './types.service';

@Controller('types')
export class TypesController {
  constructor(private typesService: TypesService) {}

  @Get()
  getAllTypes() {
    return this.typesService.getAllTypes();
  }

  @Post()
  addType(@Body() dto: CreateTypeDto) {
    return this.typesService.addType(dto);
  }
}

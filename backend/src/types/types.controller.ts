import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwtAuth.guard';
import { CreateTypeDto } from './dto/createType.dto';
import { TypesService } from './types.service';

@Controller('types')
export class TypesController {
  constructor(private typesService: TypesService) {}

  @Get()
  getAllTypes() {
    return this.typesService.getAllTypes();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  addType(@Body() dto: CreateTypeDto) {
    return this.typesService.addType(dto);
  }
}

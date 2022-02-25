import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTypeDto } from './dto/createType.dto';
import { Type } from './models/Type.model';

@Injectable()
export class TypesService {
  constructor(@InjectModel(Type) private typeRepository: typeof Type) {}

  async addType(dto: CreateTypeDto) {
    const type = await this.typeRepository.create(dto);
    return type;
  }

  async getAllTypes(): Promise<Type[]> {
    const types = await this.typeRepository.findAll();
    return types;
  }
}

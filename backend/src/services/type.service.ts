import { Injectable } from '@nestjs/common';
import { TypeEntity } from 'src/storage/models/Type.entity';

@Injectable()
export class TypeService {
  addType(type: TypeEntity) {
    return;
  }

  getAllTypes(): TypeEntity[] {
    return;
  }
}

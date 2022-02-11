import { Injectable } from '@nestjs/common';
import { Type } from './models/Type.model';

@Injectable()
export class TypeService {
  addType(type: Type) {
    return;
  }

  getAllTypes(): Type[] {
    return;
  }
}

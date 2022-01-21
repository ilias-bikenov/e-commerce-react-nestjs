import { Injectable } from '@nestjs/common';
import data from './data';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getAllProducts(): any {
    return data.products;
  }
}

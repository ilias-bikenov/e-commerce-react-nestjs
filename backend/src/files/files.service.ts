import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  // constructor(private logger: LoggerService) {}

  async createFile(file): Promise<string> {
    try {
      const fileExtension = file.originalname.split('.')[1];
      const fileName = uuid.v4() + '.' + fileExtension;
      const filePath = path.resolve(__dirname, '..', 'static');

      //todo change file methods to async
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      return fileName;
    } catch (e) {
      Logger.error(e);
      throw new HttpException(
        'Error occured while writing the file',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

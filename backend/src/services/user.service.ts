import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/storage/models/User.entity';

@Injectable()
export class UserService {
  signUp(user: UserEntity) {
    return;
  }

  getAllUsers(): UserEntity[] {
    return;
  }
}

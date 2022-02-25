import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { User } from 'src/users/models/User.model';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwtAuth.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-in')
  signIn(@Body() userDto: CreateUserDto) {
    console.log(userDto);

    return this.authService.signIn(userDto);
  }

  @Post('sign-up')
  signUp(@Body() userDto: CreateUserDto) {
    return this.authService.signUp(userDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('check')
  auth(@Body() user: User) {
    return this.authService.auth(user);
  }
}

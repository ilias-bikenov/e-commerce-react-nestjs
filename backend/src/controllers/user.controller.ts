import { Controller, Get, Post, Req } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post('sign-up')
  signUp(@Req() req): string {
    return;
  }

  @Post('login')
  login(@Req() req): string {
    return;
  }

  @Get('auth')
  auth(@Req() req): string {
    return;
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Email' })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @ApiProperty({ description: 'Password' })
  @IsString({ message: 'Should be a string' })
  @Length(6, 16, {
    message: 'Passwords should be more than 6 and less than 16 characters',
  })
  readonly password: string;
}

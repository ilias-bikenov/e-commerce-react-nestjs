import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTypeDto {
  @ApiProperty({ description: 'Type value' })
  @IsString({ message: 'Should be a string' })
  readonly name: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateItemDto {
  @ApiProperty({ description: 'Product name' })
  @IsString({ message: 'Should be a string' })
  readonly name: string;

  @ApiProperty({ description: 'Product price' })
  @IsNotEmpty({ message: 'Should not be empty' })
  readonly price: number;

  @ApiProperty({ description: 'Type id' })
  @IsNotEmpty({ message: 'Should not be empty' })
  readonly typeId: number;

  @ApiProperty({ description: 'Product info' })
  readonly itemInfo: string;
}

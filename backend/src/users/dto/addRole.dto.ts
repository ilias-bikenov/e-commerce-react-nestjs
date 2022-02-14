import { IsNumber, IsString } from 'class-validator';

export class addRoleDto {
  @IsNumber({}, { message: 'Should be a number' })
  readonly userId: number;
  @IsString({ message: 'Should be a string' })
  readonly value: string;
}

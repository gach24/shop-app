import { IsNumber, IsOptional, IsPositive, IsString, MinLength, isString } from "class-validator";

export class CreateProductDto {

  @IsString()
  @MinLength(1)
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @IsOptional()
  description: string;
}

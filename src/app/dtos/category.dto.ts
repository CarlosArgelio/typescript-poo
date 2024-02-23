import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl, Length, validate, validateOrReject } from "class-validator";
import { AccessType, Category } from "../models/category.model";

export interface ICreateCategoryDto extends Omit<Category, 'id'>{ }
export class CreateCategoryDto implements ICreateCategoryDto {

  @IsNotEmpty()
  @Length(4, 140)
  @IsString()
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'test';
    dto.image = 'https://api.escuelajs.co/api/v1/products';
    await validateOrReject(dto)
  } catch (error) {
  console.log("🚀 ~ error:", error)

  }
})()

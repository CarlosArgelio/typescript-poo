import axios from "axios";
import { Category } from "./../models/category.model";
import { Product } from "./../models/product.model";
import { UpdateProductDto } from "../dtos/product.dto";

export class BaseHttpServices<T> {
  // data: T[] = [];
  constructor(protected readonly url: string) {}

  async getAll(): Promise<T[]> {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

// const serviceString = new BaseHttpServices<string>();
// serviceString.getAll()

// const serviceNumber = new BaseHttpServices<Category>();
// serviceNumber.getAll()

(async() => {
  const urlProduct = "https://api.escuelajs.co/api/v1/products"
  const productsService = new BaseHttpServices<Product>(urlProduct);

  const rta = await productsService.getAll()
  // console.log("🚀 ~ rta:", rta)
  productsService.update<Product['id'], UpdateProductDto>(1, {
    title: ''
  })

  const urlCategory = "https://api.escuelajs.co/api/v1/categories"
  const categoryService = new BaseHttpServices<Product>(urlCategory);

  const rta2 = await categoryService.getAll()
  console.log("🚀 ~ rta2:", rta2)
})()

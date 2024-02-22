import axios from "axios";
import { Category } from "./../models/category.model";
import { Product } from "./../models/product.model";

export class BaseHttpServices<TypeClass> {
  // data: TypeClass[] = [];
  constructor(private url: string) {}

  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this.url);
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

  const urlCategory = "https://api.escuelajs.co/api/v1/categories"
  const categoryService = new BaseHttpServices<Product>(urlCategory);

  const rta2 = await categoryService.getAll()
  console.log("🚀 ~ rta2:", rta2)
})()

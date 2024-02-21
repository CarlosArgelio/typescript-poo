import axios from "axios";
import { Product } from "./models/product.model";

let anyVar: any = 12;
let boolVar: boolean = anyVar;

(async() => {

  async function getProductsAsync() {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data
  }

  console.log('----'.repeat(10));
  const rta = await getProductsAsync()
  console.log("🚀 ~ rta:", rta.map(item => `${item.id} - ${item.title}`))


})()

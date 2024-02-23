import { Product } from "../models/product.model";
import { BaseHttpServices } from "./base-http.service";

export class ProductHttpService extends BaseHttpServices<Product> {
  otroRequest() {
    this.url
  }

}

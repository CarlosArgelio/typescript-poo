import { UpdateProductDto } from "../dtos/product.dto"
import { Product } from "../models/product.model"
import { ProductHttpService } from "./product-http2.service"

export class ProductCRUDServices {
  private url = "https://api.escuelajs.co/api/v1/product"
  private http = new ProductHttpService(this.url)

  async update(id: Product['id'], dto: UpdateProductDto) {
    return this.http.update(id, dto)
  }
}

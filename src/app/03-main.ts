import { ProductHttpService } from "./services/product-htpp.services";

(async() => {
  const productService = new ProductHttpService();

  console.log('--'.repeat(10));
  const products = await productService.getAll();
  console.log("🚀 ~ products:", products.length)
  console.log(products.map(item => item.id));

  const productId = products[0].id;
  await productService.update(productId, {
    title: 'New title',
  })
  const product = await productService.findOne(productId);
  console.log("🚀 ~ product:", product)
})();

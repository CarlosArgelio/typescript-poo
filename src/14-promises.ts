import axios from "axios";

(async() => {

  function delay (time: number) {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
      }, time)
    })
    return promise
  }

  function getProduct() {
    const promise = axios.get('url')
    return promise
  }

  const rta = await delay(3000)
  console.log(rta);

  console.log('---------');

  const products = await getProduct()


})()

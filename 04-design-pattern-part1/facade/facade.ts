export {};

class Product {
  getProduct(name: string) {
    console.log(`${name}を取得しました`);
  }
}
class Payment {
  getPayment(name: string) {
    console.log(`${name}を支払しました`);
  }
}
class Invoice {
  getInvoice(name: string) {
    console.log(`${name} Invoiced`);
  }
}

class Order {
  placeOrder(name: string) {
    console.log("!!!");

    const p = new Product();
    p.getProduct(name);

    const pay = new Payment();
    pay.getPayment(name);

    const i = new Invoice();
    i.getInvoice(name);

    console.log("end");
  }
}
function run() {
  const name = "aaa";
  const order = new Order();

  order.placeOrder(name);
}

run();

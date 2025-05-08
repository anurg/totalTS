interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
type PartialProduct = Partial<Product>;

const updateProduct = (id: number, productInfo: PartialProduct) => {
  // Do something with the productInfo
};
updateProduct(1, { // red squiggly line under the entire object
  name: "Book",
});

updateProduct(1, { // red squiggly line under the entire object
  price: 12.99,
});

updateProduct(1, { // red squiggly line under the entire object
  description: "A book about Dragons",
});

updateProduct(1, { // red squiggly line under the entire object
  name: "Book",
  price: 12.99,
});

updateProduct(1, { // red squiggly line under the entire object
  name: "Book",
  description: "A book about Dragons",
});

 
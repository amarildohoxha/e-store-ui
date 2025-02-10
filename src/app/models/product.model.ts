// export interface Product {
//   id: string;
//   name: string;
//   price: number;
//   storeAvailability: { [storeId: string]: boolean };
// }


export interface Product {
  id: string;
  storeAvailability: { [storeId: string]: boolean };
  name: string;
  notify: boolean;
  price: number;
  sale: boolean;
  oldPrice: number;
  favorite: boolean;
  availability: number;
  type: string;
  image: string
  quantity: number;
}

import { Product } from "./product";

export interface CartItem {
  id: number;
  product: Product; // description nằm trong product.description
  quantity: number;
}

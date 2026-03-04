import ProductCard from "./components/ProductCard";
import ShopHeader from "./components/ShopHeader";
import { products } from "../data/products";

export default function ShopPage() {
  return (
    <div>
      <ShopHeader />
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

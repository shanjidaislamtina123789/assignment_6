import products from "../data/products.json";
import ProductCard from "./ProductCard";
const Products = ({ addToCart }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Products;



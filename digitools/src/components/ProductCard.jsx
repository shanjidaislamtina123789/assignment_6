import { toast } from "react-toastify";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card bg-base-100 shadow-md p-4">
      <div className="text-4xl">{product.icon}</div>
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="font-semibold">${product.price} / {product.period}</p>
      <div className={`badge ${product.tagType}`}>{product.tag}</div>
      <ul className="mt-2 list-disc list-inside">
        {product.features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <button 
        className="btn btn-primary mt-3"
        onClick={() => {
          addToCart(product);
          toast.success(`${product.name} added to cart!`);
        }}
      >
        Buy Now
      </button>
    </div>
  );
}


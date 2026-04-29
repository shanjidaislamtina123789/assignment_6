import { useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product, addToCart }) => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);

    setAdded(true);

    toast.success(`${product.name} added to cart`);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="border rounded-xl p-6 relative shadow-sm hover:shadow-md transition">

      <img
        src={product.icon}
        alt={product.name}
        className="w-12 h-12 mb-4"
      />


      <h3 className="font-semibold text-lg">
        {product.name}
      </h3>

      <p className="text-gray-500 text-sm mb-2">
        {product.description}
      </p>

  
      <p className="font-bold mb-3">
        ${product.price}/{product.period}
      </p>

   
      <ul className="text-sm mb-4">
        {product.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

 
      <button
        onClick={handleClick}
        className="w-full py-2 rounded-full text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"
      >
        Buy Now
      </button>

    </div>
  );
};

export default ProductCard;



import { useState } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const checkout = () => {
    setCart([]);
  };

  return (
    <div className="bg-gray-50">

      <Navbar cartCount={cart.length} />

      <Banner />

      <Stats />

      <div className="py-16">

        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">
            Premium Digital Tools
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Choose from our curated collection of premium tools
          </p>

          <div className="mt-4 flex justify-center gap-3">
            <button
              onClick={() => setView("products")}
              className={`btn btn-sm ${
                view === "products" ? "btn-primary" : ""
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setView("cart")}
              className={`btn btn-sm ${
                view === "cart" ? "btn-primary" : ""
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4">

          {view === "products" && (
            <Products addToCart={addToCart} />
          )}

          {view === "cart" && (
            <Cart
              cart={cart}
              removeItem={removeItem}
              checkout={checkout}
            />
          )}

        </div>
      </div>

      <Steps />
      <Pricing />
      <Footer />
      <ToastContainer position="top-right" />

    </div>
  );
}

export default App;



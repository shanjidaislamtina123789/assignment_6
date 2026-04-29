import { toast } from "react-toastify";

const Cart = ({ cart, removeItem, checkout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id) => {
    removeItem(id);
    toast.error("Item removed!");
  };

  const handleCheckout = () => {
    checkout();
    toast.success("Checkout successful!");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">

      <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center py-10">
          Your cart is empty
        </p>
      ) : (
        <>

          <div className="space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-10 h-10"
                  />
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

          </div>

 
          <div className="flex justify-between mt-6 text-sm text-gray-600">
            <span>Total:</span>
            <span className="font-semibold text-black">
              ${total}
            </span>
          </div>


          <button
            onClick={handleCheckout}
            className="w-full mt-4 py-3 rounded-full text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;



const Cart = ({ cart, removeItem, checkout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto border rounded-xl p-6 mt-10">

      <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10">

          <img
            src="/images/products/shopping-cart.png"
            alt="empty cart"
            className="w-40 mb-4"
          />

          <p className="text-gray-500 text-sm">
            Your cart is empty
          </p>

        </div>
      ) : (
        <>

          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-10 h-10"
                  />

                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

   
          <div className="flex justify-between mt-6 font-semibold">
            <span>Total:</span>
            <span>${total}</span>
          </div>


          <button
            onClick={checkout}
            className="w-full mt-4 py-3 rounded-full text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"
          >
            Proceed to Checkout
          </button>
        </>
      )}

    </div>
  );
};

export default Cart;


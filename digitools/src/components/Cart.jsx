import { toast } from "react-toastify";

export default function Cart({ cartItems, removeFromCart, proceedCheckout }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <span>{item.icon} {item.name}</span>
              <span>${item.price}</span>
              <button 
                className="btn btn-sm btn-error"
                onClick={() => {
                  removeFromCart(item.id);
                  toast.info(`${item.name} removed from cart`);
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 font-bold">Total: ${total}</div>
          <button 
            className="btn btn-success mt-4"
            onClick={() => {
              proceedCheckout();
              toast.success("Checkout complete!");
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}


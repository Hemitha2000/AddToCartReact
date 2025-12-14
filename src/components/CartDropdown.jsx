import { removeFromCartStorage } from "../utils/cartStorage";

function CartDropdown({ cartItems, setCartItems, onCartUpdate }) {

  const handleRemove = (id) => {
    const updatedCart = removeFromCartStorage(id);
    setCartItems(updatedCart);       
    onCartUpdate(updatedCart.length); 
  };

  return (
    <div className="absolute right-0 top-12 w-80 bg-white shadow-lg border rounded-lg z-50">
      <div className="p-3 font-semibold border-b">Cart Items</div>

      {cartItems.length === 0 ? (
        <p className="p-4 text-sm text-gray-500">Cart is empty</p>
      ) : (
        <div className="max-h-72 overflow-y-auto">
          {cartItems.map(item => (
            <div key={item.id} className="flex gap-3 p-3 border-b">
              <img
                src={item.image}
                alt={item.title}
                className="h-14 w-14 object-contain"
              />

              <div className="flex-1">
                <p className="text-sm line-clamp-2">{item.title}</p>
                <p className="font-semibold text-sm">
                  ₹{Math.round(item.price * 80)}
                </p>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 text-xs hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartDropdown;

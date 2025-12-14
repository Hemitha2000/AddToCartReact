import { useEffect, useState } from "react";
import CartDropdown from "./CartDropdown";
import { getCartItems } from "../utils/cartStorage";
import logo from "../assets/logo.png";

function Header({ cartCount, onCartUpdate }) {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

 
  useEffect(() => {
    setCartItems(getCartItems());
  }, [cartCount]); 
  
  return (
    <header className="w-full border-b bg-[#f3f3f3] sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 relative">
        <img src={logo} alt="logo" width={80} />

        <nav className="flex items-center gap-6">
          <span className="font-bold cursor-pointer">Home</span>

          <div className="relative">
            <span
              onClick={() => setOpen(!open)}
              className="cursor-pointer font-bold"
            >
              Cart
              <span className="ml-1 rounded-full bg-blue-600 px-2 text-xs text-white">
                {cartCount}
              </span>
            </span>

            {open && (
              <CartDropdown
                cartItems={cartItems}
                setCartItems={setCartItems}
                onCartUpdate={onCartUpdate}
              />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

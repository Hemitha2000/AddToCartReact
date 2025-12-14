import { useState , useEffect} from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import { getCartItems, addToCartStorage } from "./utils/cartStorage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
 const [cartCount, setCartCount] = useState(0);
 useEffect(() => {
    const cart = getCartItems();
    setCartCount(cart.length);
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = addToCartStorage(product);
    setCartCount(updatedCart.length);
  };
  const handleCartUpdate = (count) => {
  setCartCount(count);
};
  return (
    <>
    {/* <pre>{JSON.stringify(cartCount, null, 2)}</pre> */}
      <Header cartCount={cartCount} onCartUpdate={handleCartUpdate} />
      <Cart onAddToCart={handleAddToCart}/>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;

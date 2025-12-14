import { toast } from "react-toastify"; 

export const getCartItems = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const addToCartStorage = (product) => {
  const cart = getCartItems();

  const isAlreadyInCart = cart.some(item => item.id === product.id);

  if (isAlreadyInCart) {
    toast.warning("Item already added to the cart 🛒");
    return cart; 
  }

  const updatedCart = [...cart, product];
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  toast.success("Item added to cart 🛒");

  return updatedCart;
};
export const removeFromCartStorage = (id) => {
  const cart = getCartItems();
  const updatedCart = cart.filter(item => item.id !== id);

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  toast.error("Item removed from cart ❌");

  return updatedCart;
};
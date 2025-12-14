import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
function Cart({ onAddToCart }) {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <section>
      <div className="p-4">
      <h1 ><b className="text-xl text-gray-900">Results</b></h1>
      <p className="text-[16px] text-gray-600">Check each product page for other buying options. Price and other details may vary based on product size and colour.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
      </div>
    </section>
  );
}

export default Cart;

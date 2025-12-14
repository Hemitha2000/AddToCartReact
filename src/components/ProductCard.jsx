function ProductCard({ product , onAddToCart }) {
  return (
    <div className="rounded-lg border bg-white p-3 shadow-sm hover:shadow-md transition">
      
     
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-52 object-contain"
        />
      </div>

   
      <div className="mt-3 space-y-1">
        {[1, 2, 3, 4].includes(product.id) && (
        <p className="text-xs text-gray-500 capitalize">
          Sponsored
        </p>
        )}
        <h3 className="line-clamp-2 text-sm font-semibold text-gray-800">
          {product.title}
        </h3>

   
        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium text-gray-800">
            {product.rating.rate}
          </span>

          <span className="text-yellow-500">★★★★★</span>

          <span className="text-xs text-gray-500">
            ({product.rating.count})
          </span>
        </div>

       
        <div className="mt-1">
          <span className="text-xl font-bold text-gray-900">
            ₹{Math.round(product.price * 80)}
          </span>
          <span className="ml-1 text-xs text-gray-500">
            M.R.P: ₹{Math.round(product.price * 85)}
          </span>
          <span className="ml-1 text-xs text-green-600 font-semibold">
            (8% off)
          </span>
        </div>

        <p className="text-xs text-gray-700">
          FREE delivery <span className="font-semibold">Tue, 16 Dec</span>
        </p>

        {[5, 7, 19, 4,20].includes(product.id) && (
        <p className="text-sm font-semibold text-red-600">
          Only 1 left in stock.
        </p>
        )}

      
        <button  onClick={() => onAddToCart(product)} className="mt-2 w-full rounded-full bg-yellow-400 py-2 text-sm font-semibold hover:bg-yellow-500">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

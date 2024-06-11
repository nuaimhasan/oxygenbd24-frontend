import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <div className="product_card shadow rounded border border-primary">
      <img
        src="/images/product/cilinder.png"
        alt=""
        className="product_img rounded-t h-60 sm:h-72 w-full"
      />
      <div className="p-2 text-center">
        <Link to="" className="text-neutral font-semibold text-xl sm:text-2xl">
          Linder Oxygen Cilinder
        </Link>

        <p className="text-neutral mt-1 text-xl">18,000৳</p>

        <div className="mt-4 pb-4 flex justify-center gap-4">
          <Link
            to={`/products/checkout/1`}
            className="bg-primary text-base-100 text-sm rounded-md px-4 py-2"
          >
            Buy Now
          </Link>
          <Link
            to={`/product/1`}
            className="bg-secondary text-base-100 text-sm rounded-md px-4 py-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

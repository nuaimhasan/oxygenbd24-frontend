// import perser from "html-react-parser";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  // const persedDescription =
  //   product?.description && perser(product?.description);

  return (
    <div>
      <div className="shadow rounded bg-base-100">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/products/${product?.image}`}
          alt=""
          className="rounded-t h-40 w-full"
        />
        <div className="px-4 py-2">
          <h2 className="text-neutral font-semibold text-xl">
            {product?.title}
          </h2>
          <p className="text-neutral-content text-sm mt-1">
            {/* {persedDescription?.length > 50
              ? persedDescription.slice(0, 50)
              : persedDescription} */}
          </p>

          <div className="mt-4 pb-4">
            <Link
              to={`/products/product-details/${product?.slug}`}
              className="bg-primary text-base-100 text-sm rounded-md px-4 py-2"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

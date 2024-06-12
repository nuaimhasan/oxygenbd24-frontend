import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../Redux/product/productApi";
import Spinner from "../../components/Spinner/Spinner";
import perser from "html-react-parser";

export default function ProductDetails() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);
  if (isLoading) return <Spinner />;

  const product = data?.data;
  const perserDescription =
    product?.description && perser(product?.description);

  return (
    <section className="pt-28 pb-10">
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-10">
          <div>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/products/${
                product?.image
              }`}
              alt=""
              className="w-[90%] h-40 md:h-[300px] rounded md:w-2/3 mx-auto"
            />
          </div>

          <div>
            <h1 className="text-3xl font-medium">{product?.title}</h1>
            <h1 className="text-2xl font-medium mt-2">
              Price: {product?.price}৳
            </h1>

            <div className="mt-4">
              <Link
                to={`/checkout/${product?._id}`}
                className="primary_btn text-sm"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="border-b">Description</h2>

          <p className="mt-3">{perserDescription}</p>
        </div>
      </div>
    </section>
  );
}

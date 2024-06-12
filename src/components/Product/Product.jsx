import { useGetAllProductsQuery } from "../../Redux/product/productApi";
import "./Product.css";
import ProductCard from "./ProductCard";

export default function Product() {
  const { data, isLoading } = useGetAllProductsQuery();
  const products = data?.data;

  if (isLoading)
    return (
      <div className="container py-10 grid md:grid-cols-3 gap-6">
        <div className="h-96 rounded shadow"></div>
        <div className="h-96 rounded shadow"></div>
        <div className="h-96 rounded shadow"></div>
      </div>
    );

  return (
    <>
      <section className="py-10" id="product">
        <div className="container">
          <h2 className="text-center text-primary font-semibold text-2xl sm:text-3xl">
            Our Oxygen Cilinder Price
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {products?.map((product) => (
              <ProductCard key={product?._id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

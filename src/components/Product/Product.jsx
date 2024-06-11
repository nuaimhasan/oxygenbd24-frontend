import "./Product.css";
import ProductCard from "./ProductCard";

export default function Product() {
  return (
    <>
      <section className="py-10" id="product">
        <div className="container">
          <h2 className="text-center text-primary font-semibold text-2xl sm:text-3xl">
            Our Oxygen Cilinder Price
          </h2>

          <div className="mt-10 grid md:grid-cols-3 items-center">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
}

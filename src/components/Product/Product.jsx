import { FaBangladeshiTakaSign } from "react-icons/fa6";

export default function Product() {
  return (
    <section className="product_wrap" id="product">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl sm:text-4xl font-medium">
              Magical Hair Oil 200ml
            </h2>
            <ul className="text-sm sm:text-base">
              <li>✅ Prevents your hair fall and helps in new hair growth.</li>
              <li>✅ It will remove premature maturity of hair.</li>
              <li>✅ Helps to remove dandruff.</li>
              <li>
                ✅ Strengthening the roots of the hair, it will make the hair
                thick black and healthy.
              </li>
            </ul>
            <p className="flex items-center gap-1 text-xl font-medium">
              Price:
              <FaBangladeshiTakaSign /> 570
            </p>
            <div>
              <button className="bg-black/80 px-6 py-2 rounded">
                Order Now
              </button>
            </div>
          </div>

          <div className="mt-4">
            <img
              src="/images/product/product.png"
              alt=""
              className="mx-auto md:ml-auto w-[80%] sm:w-[60%] md:w-full h-60 sm:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

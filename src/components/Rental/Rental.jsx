import { Link } from "react-router-dom";
import "../../Styles/Rent.css";
import { useGetAllRentsQuery } from "../../Redux/rent/rentApi";

export default function Rental() {
  const { data, isLoading } = useGetAllRentsQuery();
  const resnts = data?.data;

  if (isLoading)
    return (
      <div className="container grid grid-cols-4 gap-1">
        <div className="h-[500px] bg-base-100 shadow"></div>
        <div className="h-[500px] bg-base-100 shadow"></div>
        <div className="h-[500px] bg-base-100 shadow"></div>
        <div className="h-[500px] bg-base-100 shadow"></div>
      </div>
    );

  return (
    <section className="py-10 bg-[#4f9ff40f]">
      <div className="container">
        <div>
          <h2 className="text-center text-primary font-semibold text-2xl sm:text-3xl">
            Our Oxygen Rental Plan
          </h2>
          <p className="mt-2 text-neutral-content text-center sm:w-1/2 mx-auto text-sm sm:text-[15px]">
            Emergency oxygen support with the fastest delivery all over Dhaka,
            Bangladesh at an affordable price.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-4 text-base-100">
          {resnts?.map((rent) => (
            <div key={rent?._id} className="rent_card relative">
              <h2 className="text-2xl font-semibold">{rent?.title}</h2>
              <h3 className="text-4xl font-bold">{rent?.price}৳</h3>

              {/* Feature */}
              <ul className="mt-5 text-center min-h-[350px]">
                <li>{rent?.time}</li>
                <li>Company: {rent?.company}</li>
                <li>Size: {rent?.size}</li>
                <li>Height: {rent?.height}</li>
                <li>Weight: {rent?.weight}</li>
                <li>Pressure: {rent?.pressure}</li>
                <li>Backup: {rent?.backup}</li>
                {rent?.features?.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <div className="absolute bottom-0 mt-10 w-full text-center">
                <Link to={`/rent/checkout/${rent?._id}`} className="order_btn">
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

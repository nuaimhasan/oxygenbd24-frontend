import { Link } from "react-router-dom";
import "../../Styles/Rent.css";

export default function Rental() {
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
          <div className="rent_card">
            <h2 className="text-2xl font-semibold">Linde Oxygen(BOC)</h2>
            <h3 className="text-4xl font-bold">15000৳</h3>

            {/* Feature */}
            <ul className="mt-5 text-center">
              <li>30 Days</li>
              <li>Company: Linder</li>
              <li>Size: Medium/Standard</li>
              <li>Height: 3 ft</li>
              <li>Weight: 16 kg</li>
              <li>Pressure: 2000 Litters+ </li>
              <li>Backup: Par min 2 liter 12 hours </li>
              <li>Nasal Cannula/Oxygen Musk </li>
              <li>Moving Trolley</li>
              <li>Oxygen Flow Meter</li>
              <li>Government Approved</li>
              <li>Free Home Delivery within 1 hour </li>
            </ul>

            <div className="mt-10 w-full text-center">
              <Link to="" className="order_btn">
                Order Now
              </Link>
            </div>
          </div>

          <div className="rent_card">
            <h2 className="text-2xl font-semibold">Linde Oxygen(BOC)</h2>
            <h3 className="text-4xl font-bold">15000৳</h3>

            {/* Feature */}
            <ul className="mt-5 text-center">
              <li>30 Days</li>
              <li>Company: Linder</li>
              <li>Size: Medium/Standard</li>
              <li>Height: 3 ft</li>
              <li>Weight: 16 kg</li>
              <li>Pressure: 2000 Litters+ </li>
              <li>Backup: Par min 2 liter 12 hours </li>
              <li>Nasal Cannula/Oxygen Musk </li>
              <li>Moving Trolley</li>
              <li>Oxygen Flow Meter</li>
              <li>Government Approved</li>
              <li>Free Home Delivery within 1 hour </li>
            </ul>

            <div className="mt-10 w-full text-center">
              <Link to="" className="order_btn">
                Order Now
              </Link>
            </div>
          </div>

          <div className="rent_card">
            <h2 className="text-2xl font-semibold">Linde Oxygen(BOC)</h2>
            <h3 className="text-4xl font-bold">15000৳</h3>

            {/* Feature */}
            <ul className="mt-5 text-center">
              <li>30 Days</li>
              <li>Company: Linder</li>
              <li>Size: Medium/Standard</li>
              <li>Height: 3 ft</li>
              <li>Weight: 16 kg</li>
              <li>Pressure: 2000 Litters+ </li>
              <li>Backup: Par min 2 liter 12 hours </li>
              <li>Nasal Cannula/Oxygen Musk </li>
              <li>Moving Trolley</li>
              <li>Oxygen Flow Meter</li>
              <li>Government Approved</li>
              <li>Free Home Delivery within 1 hour </li>
            </ul>

            <div className="mt-10 w-full text-center">
              <Link to="" className="order_btn">
                Order Now
              </Link>
            </div>
          </div>

          <div className="rent_card">
            <h2 className="text-2xl font-semibold">Linde Oxygen(BOC)</h2>
            <h3 className="text-4xl font-bold">15000৳</h3>

            {/* Feature */}
            <ul className="mt-5 text-center">
              <li>30 Days</li>
              <li>Company: Linder</li>
              <li>Size: Medium/Standard</li>
              <li>Height: 3 ft</li>
              <li>Weight: 16 kg</li>
              <li>Pressure: 2000 Litters+ </li>
              <li>Backup: Par min 2 liter 12 hours </li>
              <li>Nasal Cannula/Oxygen Musk </li>
              <li>Moving Trolley</li>
              <li>Oxygen Flow Meter</li>
              <li>Government Approved</li>
              <li>Free Home Delivery within 1 hour </li>
            </ul>

            <div className="mt-10 w-full text-center">
              <Link to="" className="order_btn">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

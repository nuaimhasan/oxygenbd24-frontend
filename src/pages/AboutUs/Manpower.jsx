import { Link } from "react-router-dom";

export default function Manpower() {
  return (
    <section>
      <div>
        <img
          src="/images/about/manpower.jpg"
          alt=""
          className="w-full h-36 md:h-60"
        />
      </div>
      <div className="container py-5 sm:py-10">
        <div className="grid md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-neutral mb-3">
              Manpower
            </h2>

            <div className="text-neutral-content text-[15px]">
              <p className="text-secondary">People</p>
              <p>
                The people who are making it happen – the employees – are young,
                dedicated and energetic. All of them are well educated at home
                or abroad, with both sexes (genders) and minority groups in
                Bangladesh being well represented. They know in their hearts
                that SKRP Group is more than just a Group. This sense of purpose
                gives them the dedication and the drive.
              </p>
              <br />
              <p className="text-secondary">
                Warehouse Facility with full details
              </p>
              <p>
                we have our own 3000 SFT Warehouse Facility at 80/3 Kakrail VIP
                Road, Dhaka-1000 and 8000 SFT at House# 1, Road#2, Block-F,
                Bonosree, Dhaka.
              </p>
              <br />
              <p className="text-secondary">Logistics in present use</p>
              <p>
                In addition to two Covered Vans we have our sister concern
                (Mailbox Limited) for total logistic support service solutions.
              </p>
              <br />
              <p className="text-secondary">
                Dealers and Outlets in operation{" "}
              </p>
              <p>
                Presently 200 Dealers & 550 Retail Outlets are in Operation.
              </p>
            </div>

            <div className="mt-6">
              <Link to="/contact-us" className="secondary_btn text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

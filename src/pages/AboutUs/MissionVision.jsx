import { Link } from "react-router-dom";

export default function MissionVision() {
  return (
    <section>
      <div>
        <img
          src="/images/about/MissionVission.jpg"
          alt=""
          className="w-full h-36 md:h-60"
        />
      </div>
      <div className="container py-5 sm:py-10">
        <div className="grid md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-neutral mb-3">
              Mission Vision
            </h2>

            <div className="text-neutral-content text-[15px]">
              <p className="text-secondary">Mission</p>
              <p>
                To create Maximum Possible Values for all of our Business
                Associates, adhering to the highest ethical standards.
              </p>
              <br />
              <p className="text-secondary">Vision</p>
              <p>
                To become the number one product and service providing company
                in terms of quality.
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

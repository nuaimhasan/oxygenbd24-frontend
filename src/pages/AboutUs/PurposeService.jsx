import { Link } from "react-router-dom";

export default function PurposeService() {
  return (
    <section>
      <div>
        <img
          src="/images/about/purpose_n_service.jpg"
          alt=""
          className="w-full h-36 md:h-60"
        />
      </div>
      <div className="container py-5 sm:py-10">
        <div className="grid md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-neutral mb-3">
              Purpose & Service
            </h2>

            <div className="text-neutral-content text-[15px]">
              <p className="text-secondary">Purpose</p>
              <p>
                SKRP Trade Syndicate has a dual purpose: to receive an economic
                return on its investments and to contribute to the economic
                development of Bangladesh where entrepreneurship can play an
                important role.
              </p>
              <br />
              <p className="text-secondary">Service</p>
              <p>
                SKRP Trade Syndicate believes in service, a service that leads
                to good business and good development.Good business helps people
                work together, raising their productivity. This gain in
                productivity is development. Thus development and business go
                together.
              </p>
              <br />
              <p className="text-secondary">For our Employees</p>
              <p>
                To provide Job Satisfaction by making SKRP’s centre of
                Excellence with opportunity of career development.
              </p>
              <br />
              <p className="text-secondary">For the Society</p>
              <p>
                To contribute to the well being of the Society, in general, by
                acting as responsible corporate body in Bangladesh.
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

import { Link } from "react-router-dom";

export default function CompanyProfile() {
  return (
    <section>
      <div>
        <img
          src="/images/about/company-profile-banner.jpg"
          alt=""
          className="w-full h-36 md:h-60"
        />
      </div>
      <div className="container py-5 sm:py-10">
        <div className="grid md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-neutral mb-3">
              Company Profile
            </h2>

            <div className="text-neutral-content text-[15px]">
              <p>
                SKRP is a multi line business house operating in Bangladesh for
                more than 10 years. It has business collaboration with world
                renowned brands like HITACHI and KENT. Apart from that, SKRP
                developed its own product brands NT blu-ray, Life-up, Tazee,
                EBSL, GreenSwitch in different product segments. SKRP’s State of
                Art world class R&D and manufacturing facility enable it to
                produce superior quality products for its customers. It entered
                in to foreign market with its sister concern Tazee Agro
                Industries Ltd in 2013 through JV. SKRP’s vision is to become
                the number one product and service providing company in terms of
                quality.
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

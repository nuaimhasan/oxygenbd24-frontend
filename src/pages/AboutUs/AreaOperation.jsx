import { Link } from "react-router-dom";

export default function AreaOperation() {
  return (
    <section>
      <div className="container py-5 sm:py-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold text-neutral mb-3">
              Area Of Operation
            </h2>

            <p className="text-neutral-content text-[15px]">
              SKRP Group already covered 60 Districts out of 64 Districts . We
              have plan that within December 2015 we will operate whole
              Bangladesh.
            </p>

            <div className="mt-6">
              <Link to="/contact-us" className="secondary_btn text-sm">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-2">
            <img src="/images/about/map.jpg" alt="" className="rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}

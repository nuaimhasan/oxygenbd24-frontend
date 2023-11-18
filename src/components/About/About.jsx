import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-7 sm:py-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-neutral">About SKRP</h2>

            <div className="text-[15px] text-neutral-content mt-3 flex flex-col gap-2">
              <p>
                SKRP Renewable Energy Ltd is a pioneering solar energy company
                based in Bangladesh, committed to revolutionizing the
                nation&apos;s energy landscape through sustainable and
                eco-friendly solutions. With a vision to harness the immense
                potential of solar power, we have emerged as a leading player in
                the renewable energy sector, driving a cleaner and greener
                future for Bangladesh.
              </p>
              <p>
                We do not believe in concentrating only on the socially
                committed to assist the mainstreaming economic development. The
                most unique quality of SKRP is that it does not compromise while
                manufacturing products itself or importing products for
                customers to keep continue the customers’ satisfaction.
              </p>
              <p>
                Established in 2013, our journey began with a profound
                commitment to address the energy challenges faced by our nation.
                Bangladesh, with its rapidly growing population and expanding
                economy, requires a reliable and sustainable source of energy.
                This is where SKRP Renewable Energy Ltd steps in, dedicated to
                harnessing the power of the sun to meet our energy needs.
              </p>

              <Link to="/about-us" className="secondary_btn w-max mt-2">
                See More
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/about.jpg"
              alt=""
              className="w-full h-96 rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

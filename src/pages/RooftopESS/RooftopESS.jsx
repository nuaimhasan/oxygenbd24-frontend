export default function RooftopESS() {
  return (
    <section>
      <div className="relative">
        <img
          src="/images/rooftop-and-ess/banner.png"
          alt=""
          className="w-full h-80"
        />
        <div className="container">
          <div className="absolute top-1/2 -translate-y-1/2 text-base-100">
            <h2 className="text-3xl sm:text-4xl font-bold sm:w-max border-b-2 pb-2 mb-3">
              On Grid : Rooftop and ESS
            </h2>
            <p className="md:w-1/2 font-light text-[15px]">
              Rooftop Solutions analyzes rooftop space and current load
              profiles, offering solutions through net-metering and others with
              an experienced EPC team.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container">
          <h2 className="text-[27px] font-semibold text-neutral text-center">
            Electricity cost from rooftop system is at least 40% less than grid
            electricity
          </h2>

          <div className="mt-10 sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <img
                src="/images/rooftop-and-ess/One-stop-solutions.png"
                alt=""
                className="w-16 h-16 mx-auto rounded-full"
              />
              <p className="text-neutral-content text-center text-[15px] mt-3">
                One stop solutions with strong capabilities across the chain;
                with precision in Designing, Engineering, Construction, O&M and
                Financing
              </p>
            </div>

            <div>
              <img
                src="/images/rooftop-and-ess/Project-Execution.png"
                alt=""
                className="w-16 h-16 mx-auto rounded-full"
              />
              <p className="text-neutral-content text-center text-[15px] mt-3">
                Project Execution Certainty with seamless experience with
                quality and expertise in design, construction, timeliness and
                costs
              </p>
            </div>

            <div>
              <img
                src="/images/rooftop-and-ess/Focused-OnM.png"
                alt=""
                className="w-16 h-16 mx-auto rounded-full"
              />
              <p className="text-neutral-content text-center text-[15px] mt-3">
                Focused O&M by the most dedicated maintenance and operations
                team to ensure maximum generation and plant up on time
              </p>
            </div>

            <div>
              <img
                src="/images/rooftop-and-ess/Broad-portfolio.png"
                alt=""
                className="w-16 h-16 mx-auto rounded-full"
              />
              <p className="text-neutral-content text-center text-[15px] mt-3">
                Broad portfolio with the best products and solutions from
                globally renowned brands with more choice and better fit for
                your needs
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-14 bg-gray-100">
        <div className="container">
          <h2 className="text-[27px] font-semibold text-neutral text-center">
            Largest EPC Company in the Country
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h2 className="text-primary text-5xl font-bold">1200</h2>
              <p className="text-neutral-content mt-2">Projects</p>
            </div>

            <div className="text-center">
              <h2 className="text-primary text-5xl font-bold">64</h2>
              <p className="text-neutral-content mt-2">Districts</p>
            </div>

            <div className="text-center">
              <h2 className="text-primary text-5xl font-bold">570</h2>
              <p className="text-neutral-content mt-2">Clients</p>
            </div>

            <div className="text-center">
              <h2 className="text-primary text-5xl font-bold">20</h2>
              <p className="text-neutral-content mt-2">
                + Years of Track Record
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold text-neutral">
              Why Rooftop Solar?
            </h2>
            <ul className="text-neutral-content text-[15px] mt-3 list-disc list-inside">
              <li>Utilization of unused rooftop space</li>
              <li>
                Balance usage of electricity using reliable and uninterrupted
                power
              </li>
              <li>
                Reduction of electricity bill with cheaper electricity than that
                of grid
              </li>
              <li>Attractive payback period</li>
              <li>Reduction of carbon footprint</li>
              <li>Minimum maintenance required</li>
              <li>Tier 1 products in your facility</li>
              <li>
                Demonstrate alignment of your company with SDG goals to
                stakeholders
              </li>
              <li>Sale of unused electricity to the national grid</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <img
              src="/images/rooftop-and-ess/rooftop.jpg"
              alt=""
              className="w-full rounded h-[260px]"
            />
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2 order-last md:order-first">
            <img
              src="/images/rooftop-and-ess/ESS-Image.jpg"
              alt=""
              className="w-full rounded h-52"
            />
          </div>

          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold text-neutral">
              Energy Storage System (ESS)
            </h2>
            <p className="text-neutral-content text-[15px] mt-3">
              Pervasive use of technology from manufacturing to supply chain,
              from engineering to sales and last mile customer service, our
              motto is to escalate and enhance the benefits of renewable energy
              by Solarising Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

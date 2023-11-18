export default function OnGrid() {
  window.scroll(0, 0);
  return (
    <section>
      <div>
        <img
          src="/images/business-units/on-grid/ongrid-banner.webp"
          alt=""
          className="w-full sm:h-80"
        />
      </div>
      <div className="container py-10">
        <div>
          <div>
            <h2 className="text-center text-2xl sm:text-3xl text-neutral font-semibold">
              Electricity cost from rooftop system is at least 40% less than
              grid electricity
            </h2>
          </div>

          <div className="md:w-2/3 mx-auto mt-10 flex flex-col gap-6 text-[15px] sm:text-base">
            <div className="flex gap-6 items-center">
              <img
                src="/images/why-skrp/One-stop-solutions.png"
                alt=""
                className="w-14 h-14 rounded-full"
              />
              <p className="text-neutral-content">
                One stop solutions with strong capabilities across the chain;
                with precision in Designing, Engineering, Construction, O&M and
                Financing
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <img
                src="/images/why-skrp/Project-Execution.png"
                alt=""
                className="w-14 h-14 rounded-full"
              />
              <p className="text-neutral-content">
                Project Execution Certainty with seamless experience with
                quality and expertise in design, construction, timeliness and
                costs
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <img
                src="/images/why-skrp/Focused-OnM.png"
                alt=""
                className="w-14 h-14 rounded-full"
              />
              <p className="text-neutral-content">
                Focused O&M by the most dedicated maintenance and operations
                team to ensure maximum generation and plant up on time
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <img
                src="/images/why-skrp/Broad-portfolio.png"
                alt=""
                className="w-14 h-14 rounded-full"
              />
              <p className="text-neutral-content">
                Broad portfolio with the best products and solutions from
                globally renowned brands with more choice and better fit for
                your needs
              </p>
            </div>
          </div>
        </div>

        <div className="pt-16 pb-10">
          <div className="shadow p-4 grid md:grid-cols-3 gap-6">
            <div>
              <img
                src="/images/rooftop3-300x197.png"
                alt=""
                className="w-full h-full rounded"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-lg font-semibold text-neutral">
                Why Rooftop Solar?
              </h2>
              <ul className="mt-2 text-neutral-content text-[15px] list-disc list-inside">
                <li>Utilization of unused rooftop space</li>
                <li>
                  Balance usage of electricity using reliable and uninterrupted
                  power
                </li>
                <li>
                  Reduction of electricity bill with cheaper electricity than
                  that of g
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
          </div>

          <div className="mt-7 shadow p-4 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-lg font-semibold text-neutral">
                Energy Storage System (ESS)
              </h2>
              <p className="mt-2 text-neutral-content text-[15px]">
                Energy Storage System (ESS) provides cost-effective and
                sustainable power generated from the sun around the clock.
                Electricity generated from the PV array is used to optimize
                self-consumption and the excess energy charges the Li-ion based
                storage to supply power the loads at night. It reduces the
                dependency on conventional power and ensures reliability. It
                also has wide range of application in improving grid power
                quality like peak shaving, frequency regulation, voltage support
                etc.
              </p>
            </div>

            <div>
              <img
                src="/images/ESS-Image.jpg"
                alt=""
                className="w-full h-56 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

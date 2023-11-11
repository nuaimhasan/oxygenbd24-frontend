import Tabs from "./Tabs/Tabs";

export default function SolarCleantechSolutions() {
  window.scroll(0, 0);
  return (
    <section>
      <div className="relative">
        <img
          src="/images/solar-cleantech-solutions/banner.png"
          alt=""
          className="w-full h-80"
        />
        <div className="container ">
          <div className="absolute top-1/2 -translate-y-1/2 text-base-100">
            <h2 className="text-3xl sm:text-4xl font-bold sm:w-max border-b-2 pb-2 mb-3">
              Solar and Cleantech Solutions
            </h2>
            <p className="md:w-1/2 font-light text-[15px]">
              Rahimafrooz Solar has a wide range of solar energy based
              electronic appliances that are built for energy efficiency and use
              in rural and off-grid areas.
            </p>
          </div>
        </div>
      </div>

      <div className="container pt-5 pb-10">
        <Tabs />
      </div>
    </section>
  );
}

export default function SolarPanels() {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl text-neutral font-semibold">Solar Panels</h2>
          <p className="text-[15px] text-neutral-content my-2">
            Our world class PV module manufacturing facility produces poly
            crystalline panels from the ranges of 10Wp- 350Wp. We are the first
            automated PV plant in Bangladesh, with modules made with US
            technology. As photovoltaic modules manufactured in Bangladesh, we
            ensure 100% after sales service.
          </p>
          <p className="text-[15px] text-neutral-content">
            Solar panel warranty is for 20 years.
          </p>
        </div>
        <div>
          <img
            src="/images/solar-cleantech-solutions/Solar--Panel.png"
            alt=""
            className="rounded h-40 w-full"
          />
        </div>
      </div>
    </div>
  );
}

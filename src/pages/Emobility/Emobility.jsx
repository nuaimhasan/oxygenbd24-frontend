export default function Emobility() {
  return (
    <section>
      <div className="relative">
        <img
          src="/images/e-mobility/banner.png"
          alt=""
          className="w-full h-80"
        />
        <div className="container">
          <div className="absolute top-1/2 -translate-y-1/2 text-base-100">
            <h2 className="text-4xl font-bold w-max border-b-2 pb-2 mb-3">
              E Mobility
            </h2>
            <p className="md:w-1/2 font-light text-[15px]">
              The concept behind the introduction of modern, efficient, and fast
              charging EV three Wheeler in Bangladesh is that it will transform
              the image and functionality of electric vehicle in Bangladesh as
              well as improve the lives of people.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="text-neutral text-[15px] md:col-span-3">
            <h2 className="text-3xl font-semibold">EV</h2>
            <div className="text-neutral-content mt-3">
              <p>
                Along with fast charging, the EV three wheelers are highly
                efficient with higher mileage per unit, being extremely durable
                and low maintenance.
              </p>
              <br />
              <p>
                It is modern by being aero dynamic and stable with robust design
                perfect for application in developing nations. With powerful,
                reliable all weather breaks and speed limit options and much
                more, the vehicle is in itself provides for more safety and
                security.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <img
              src="/images/e-mobility/ev.jpg"
              alt=""
              className="w-full rounded h-[250px]"
            />
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2 order-last md:order-first">
            <img
              src="/images/e-mobility/EV-Charging.jpg"
              alt=""
              className="w-full rounded h-60"
            />
          </div>

          <div className="text-neutral text-[15px] md:col-span-3">
            <h2 className="text-3xl font-semibold">Fast Charging</h2>
            <div className="text-neutral-content mt-3">
              <p>
                Charging for electric vehicles like 3-wheelers, motorcycles and
                electric rickshaws are necessary for enabling fossil-fuel free
                transport in rural Bangladesh. This reduces the emission of
                carbon dioxide and creates entrepreneurship opportunities for
                station owners. Properly charged vehicles ensure longer life of
                batteries and allowing for increased income by the vehicle
                driver.
              </p>
              <br />
              <p>
                Fast charging solutions can be used with grid power/solar power
                or hybrid of both.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-5 gap-12 items-center">
          <div className="text-neutral text-[15px] md:col-span-3">
            <h2 className="text-3xl font-semibold">
              New Technology Storage Solution
            </h2>
            <div className="text-neutral-content mt-3">
              <p>
                We are work to develop world latest technology storages solution
                like Lithium Ion, Super-capacitors (Sup-cap) for EV and charging
                storage and for other applications. This will help in improving
                storage efficiency and longer life.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <img
              src="/images/e-mobility/Lithium-EV-Battery.jpg"
              alt=""
              className="w-full rounded h-[250px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

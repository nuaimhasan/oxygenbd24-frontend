export default function Slogan() {
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="text-neutral-content text-[15px] md:col-span-3">
            <p>
              Lighting up millions of homes, bringing health and happiness with
              access to energy to the very last mile consumer, we at Rahimafrooz
              Solar, are leading the change for Bangladesh’s progress.
            </p>
            <br />
            <p>
              Our solar pumps brings sustainability to crop cultivation and
              water usage. Our mini and micro grids, power remote areas, while
              in cities, rooftop and BIPV applications drive the use of clean
              and efficient energy practices. Our solar PV solutions and energy
              efficient appliances ensure people across Bangladesh can enjoy the
              benefits of clean and sustainable energy.
            </p>
          </div>
          <div className="md:col-span-2">
            <img
              src="/images/slogan/slogan1.jfif"
              alt=""
              className="w-full rounded h-[250px]"
            />
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2 order-last md:order-first">
            <img
              src="/images/slogan/slogan2.jpg"
              alt=""
              className="w-full rounded h-52"
            />
          </div>

          <div className="text-neutral-content text-[15px] md:col-span-3">
            <p>
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

export default function OffGrid() {
  window.scroll(0, 0);
  return (
    <section>
      <div>
        <img
          src="/images/business-units/off-grid/off-grid.webp"
          alt=""
          className="w-full h-96"
        />
      </div>

      <div className="container py-10">
        <div className="text-center">
          <h2 className="text-3xl text-neutral font-semibold">
            Get the power of two - Power backup & Save Energy!
          </h2>
          <p className="mt-3 text-[15px] sm:w-2/3 mx-auto text-neutral-content">
            Our off-grid solutions provide you with a complete end to end
            storage. Don’t let power cut take away your peace of mind. With our
            technical expertise in solar, we install a customized off-grid
            solution for your home needs.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-neutral">Features</h2>
          <ul className="mt-4 text-neutral-content text-[15px] list-disc list-inside">
            <li>Off-grid Solar power stores DC electricity in batteries.</li>
            <li>
              Optimum functionality, longer service life, reliable operation.
            </li>
            <li>Intelligent MPPT based charge controller.</li>
            <li>
              This will be used when requirement of energy is more than what the
              solar PV is providing at a particular time or when power from
              solar energy is not available, thus reducing the consumption of
              power from grid and increased savings on your electricity bill.
            </li>
          </ul>
        </div>

        <div className="mt-10 w-3/4">
          <h2 className="text-2xl font-semibold text-neutral">Applications</h2>
          <ul className="mt-4 text-neutral-content text-[15px] list-disc list-inside grid grid-cols-3 gap-2">
            <li>Hospitals</li>
            <li>Industries</li>
            <li>Workshops</li>
            <li>Schools & Colleges</li>
            <li>Commercial & Residential Buildings</li>
            <li>Construction Companies</li>
            <li>Petrol Pumps</li>
            <li>Water Pumps</li>
            <li>Water Pumps</li>
            <li>Banquet Halls</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-neutral">Our Projects</h2>
          <div className="mt-3 grid grid-cols-4 gap-4">
            <img
              src="/images/business-units/off-grid/1.webp"
              alt=""
              className="rounded w-full h-48"
            />
            <img
              src="/images/business-units/off-grid/2.webp"
              alt=""
              className="rounded w-full h-48"
            />
            <img
              src="/images/business-units/off-grid/3.webp"
              alt=""
              className="rounded w-full h-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

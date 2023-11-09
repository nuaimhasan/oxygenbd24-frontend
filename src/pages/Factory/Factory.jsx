export default function Factory() {
  return (
    <section>
      <div className="relative">
        <img src="/images/factory/banner.png" alt="" className="w-full h-80" />
        <div className="container">
          <div className="absolute top-1/2 -translate-y-1/2 text-base-100">
            <h2 className="text-4xl font-bold w-max border-b-2 pb-2 mb-3">
              Factory
            </h2>
            <p className="md:w-1/2 font-light text-[15px]">
              Access to the largest solar battery manufacturing facility in the
              country and state-of-the-art PV module manufacturing facility
            </p>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-2 gap-6">
          <img
            src="/images/factory/1.png"
            alt=""
            className="rounded w-full h-80"
          />
          <img
            src="/images/factory/2.png"
            alt=""
            className="rounded w-full h-80"
          />
          <img
            src="/images/factory/3.png"
            alt=""
            className="rounded w-full h-80"
          />
          <img
            src="/images/factory/4.png"
            alt=""
            className="rounded w-full h-80"
          />
        </div>
      </div>
    </section>
  );
}

import { Link, useParams } from "react-router-dom";

export default function Products() {
  const params = useParams();

  return (
    <section>
      <div className="relative">
        <img
          src="/images/solar-solutions/banner.png"
          alt=""
          className="w-full h-28 md:h-80"
        />
        <div className="container">
          <h2 className="absolute top-1/2 -translate-y-1/2 text-3xl text-base-100 font-semibold">
            {params?.category ? params?.category : "Solar Solutions"}
          </h2>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="shadow rounded bg-base-100">
            <img
              src="/images/products/led-dc-bulb.jpg"
              alt=""
              className="rounded-t h-40 w-full"
            />
            <div className="px-4 py-2">
              <h2 className="text-neutral font-semibold text-xl">
                LED DC Bulb
              </h2>
              <p className="text-neutral-content text-sm mt-1">
                For rural Bangladesh, Solar Home Systems (or more popularly
                known as SHS) is the most convenient way for households and
                small enterprise owners to have access...
              </p>

              <div className="mt-4 pb-4">
                <Link
                  to=""
                  className="bg-primary text-base-100 text-sm rounded-md px-4 py-2"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          <div className="shadow rounded bg-base-100">
            <img
              src="/images/products/solar-panel.jpg"
              alt=""
              className="rounded-t h-40 w-full"
            />
            <div className="px-4 py-2">
              <h2 className="text-neutral font-semibold text-xl">
                Solar Panel Mono
              </h2>
              <p className="text-neutral-content text-sm mt-1">
                For rural Bangladesh, Solar Home Systems (or more popularly
                known as SHS) is the most convenient way for households and
                small enterprise owners to have access...
              </p>

              <div className="mt-4 pb-4">
                <Link
                  to=""
                  className="bg-primary text-base-100 text-sm rounded-md px-4 py-2"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

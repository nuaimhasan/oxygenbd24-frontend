import { Link } from "react-router-dom";

export default function OnGridSolutions() {
  window.scroll(0, 0);
  return (
    <section className="py-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl text-neutral font-semibold">
            Rooftop and ESS
          </h2>
          <p className="mt-3 text-[15px] sm:w-2/3 mx-auto text-neutral-content">
            Energy is harnessed via isolated devices and systems for power
            generation at the household level as well as for heating, cooking
            and productive uses. Rahimafrooz Solar has designed and implemented
            many such applications in rural Bangladesh till date.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="shadow rounded bg-base-100">
            <img
              src="/images/solar-solutions/tv.jpg"
              alt=""
              className="rounded-t h-40 w-full"
            />
            <div className="px-4 py-2">
              <h2 className="text-neutral font-semibold text-xl">
                Powerview TV
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
              src="/images/solar-solutions/tv.jpg"
              alt=""
              className="rounded-t h-40 w-full"
            />
            <div className="px-4 py-2">
              <h2 className="text-neutral font-semibold text-xl">
                Powerview TV
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
              src="/images/solar-solutions/tv.jpg"
              alt=""
              className="rounded-t h-40 w-full"
            />
            <div className="px-4 py-2">
              <h2 className="text-neutral font-semibold text-xl">
                Powerview TV
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
              src="/images/solar-solutions/tv.jpg"
              alt=""
              className="rounded-t h-40 w-full"
            />
            <div className="px-4 py-2">
              <h2 className="text-neutral font-semibold text-xl">
                Powerview TV
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

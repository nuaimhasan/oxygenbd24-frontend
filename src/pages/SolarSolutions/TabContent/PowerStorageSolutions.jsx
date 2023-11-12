import { Link } from "react-router-dom";

export default function PowerStorageSolutions() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="shadow rounded bg-base-100">
        <img
          src="/images/solar-solutions/battery.png"
          alt=""
          className="rounded-t h-40 w-full"
        />
        <div className="px-4 py-2">
          <h2 className="text-neutral font-semibold text-xl">
            Solar Batteries
          </h2>
          <p className="text-neutral-content text-sm mt-1">
            For rural Bangladesh, Solar Home Systems (or more popularly known as
            SHS) is the most convenient way for households and small enterprise
            owners to have access...
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
          src="/images/solar-solutions/fiter.jpg"
          alt=""
          className="rounded-t h-40 w-full"
        />
        <div className="px-4 py-2">
          <h2 className="text-neutral font-semibold text-xl">MC Batteries</h2>
          <p className="text-neutral-content text-sm mt-1">
            For rural Bangladesh, Solar Home Systems (or more popularly known as
            SHS) is the most convenient way for households and small enterprise
            owners to have access...
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
          src="/images/solar-solutions/Mishuk.jpg"
          alt=""
          className="rounded-t h-40 w-full"
        />
        <div className="px-4 py-2">
          <h2 className="text-neutral font-semibold text-xl">
            EV or electric vehicle batteries
          </h2>
          <p className="text-neutral-content text-sm mt-1">
            For rural Bangladesh, Solar Home Systems (or more popularly known as
            SHS) is the most convenient way for households and small enterprise
            owners to have access...
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
          src="/images/solar-solutions/power-box.jpg"
          alt=""
          className="rounded-t h-40 w-full"
        />
        <div className="px-4 py-2">
          <h2 className="text-neutral font-semibold text-xl">Mishuk battery</h2>
          <p className="text-neutral-content text-sm mt-1">
            For rural Bangladesh, Solar Home Systems (or more popularly known as
            SHS) is the most convenient way for households and small enterprise
            owners to have access...
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
  );
}

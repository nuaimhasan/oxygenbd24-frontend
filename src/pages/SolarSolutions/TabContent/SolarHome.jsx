import { Link } from "react-router-dom";

export default function SolarHome() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="shadow rounded bg-base-100">
        <img
          src="/images/solar-solutions/home.jpg"
          alt=""
          className="rounded-t h-40 w-full"
        />
        <div className="px-4 py-2">
          <h2 className="text-neutral font-semibold text-xl">
            Solar Home System
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
          src="/images/solar-solutions/SHS.jpeg"
          alt=""
          className="rounded-t h-40 w-full"
        />
        <div className="px-4 py-2">
          <h2 className="text-neutral font-semibold text-xl">
            Solar Home System
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
          src="/images/solar-solutions/home.jpg"
          alt=""
          className="rounded-t h-40 w-full"
        />
        <div className="px-4 py-2">
          <h2 className="text-neutral font-semibold text-xl">
            Solar Home System
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
          src="/images/solar-solutions/SHS.jpeg"
          alt=""
          className="rounded-t h-40 w-full"
        />
        <div className="px-4 py-2">
          <h2 className="text-neutral font-semibold text-xl">
            Solar Home System
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
    </div>
  );
}

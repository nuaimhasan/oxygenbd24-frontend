import { CgCheckO } from "react-icons/cg";

export default function Benefits() {
  return (
    <section className="py-10">
      <div className="container">
        <div>
          <h2 className="text-center text-2xl sm:text-4xl font-medium">
            Best Benefits Of Our <br />
            <span className="text-primary font-semibold">Magical Hair Oil</span>
          </h2>
          <p className="mt-2 text-neutral-content text-center sm:w-1/2 mx-auto text-sm sm:text-base">
            Magical Hair Oil is a magical solution to all hair problems made
            from completely natural ingredients
          </p>
        </div>

        <div className="md:mx-20 lg:mx-40 mt-10 grid sm:grid-cols-3 items-center gap-4 md:gap-6 lg:text-[22px]">
          <div className="flex sm:justify-end">
            <ul className="flex flex-col gap-3 sm:gap-10">
              <li className="flex items-center gap-2">
                <p>
                  <CgCheckO className="text-2xl text-primary" />
                </p>
                <p>Prevents hair loss</p>
              </li>
              <li className="flex items-center gap-2">
                <p>
                  <CgCheckO className="text-2xl text-primary" />
                </p>
                <p>Helps in new hair growth</p>
              </li>
              <li className="flex items-center gap-2">
                <p>
                  <CgCheckO className="text-2xl text-primary" />
                </p>
                <p>Helps to eliminate dandruff</p>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/images/product/oil.png"
              alt=""
              className="mx-auto h-40 sm:h-80"
            />
          </div>
          <div>
            <ul className="flex flex-col sm:gap-10">
              <li className="flex items-center gap-2">
                <p>
                  <CgCheckO className="text-2xl text-primary" />
                </p>
                <p>It will make the hair thick black and healthy</p>
              </li>
              <li className="flex items-center gap-2">
                <p>
                  <CgCheckO className="text-2xl text-primary" />
                </p>
                <p>Strengthens hair roots</p>
              </li>
              <li className="flex items-center gap-2">
                <p>
                  <CgCheckO className="text-2xl text-primary" />
                </p>
                <p>Helps to eliminate dandruff</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

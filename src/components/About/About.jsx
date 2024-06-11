import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-7 sm:py-10 bg-[#4f9ff40f]" id="about">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/images/about/about.png"
              alt=""
              className="w-full sm:w-[60%] lg:w-full mx-auto h-60 sm:h-80 lg:h-[420px] rounded"
            />
          </div>

          <div>
            <h2 className="text-2xl sm:text-4xl text-neutral">
              <span className="font-semibold text-primary">Healyou</span>{" "}
              <span>Medical Oxygen solution</span>
            </h2>

            <div>
              <div className="text-[15px] text-neutral-content mt-3 flex flex-col gap-2">
                <p>
                  &quot;Healyou&quot; is a blend of natural ingredients
                  carefully selected to promote healthy hair growth and reduce
                  hair fall, as well as address issues related to dandruff. Our
                  hair oil is formulated with a unique combination of oils known
                  for their nourishing properties, such as coconut oil, almond
                  oil, argan oil, and essential oils like rosemary and lavender.
                </p>
                <p>
                  We understand the importance of using natural ingredients to
                  maintain the health of your hair and scalp. Our oil is free
                  from harmful chemicals and additives, making it suitable for
                  all hair types, including mixed hair. Whether you have curly,
                  wavy, or straight hair, our Healyou is designed to provide the
                  nutrients your hair needs to thrive.
                </p>
                <p>
                  Hair fall can be caused by various factors, including stress,
                  pollution, and improper hair care routines. Our hair oil is
                  enriched with ingredients that strengthen the hair follicles
                  and reduce breakage, resulting in less hair fall over time.
                </p>
              </div>

              <div className="mt-5">
                <Link
                  to="#product"
                  className="w-max px-6 py-2 rounded bg-primary text-base-100 mt-2"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Career() {
  window.scroll(0, 0);
  return (
    <section>
      <div>
        <img
          src="/images/career-banner.jpg"
          alt=""
          className="w-full h-48 sm:h-96"
        />
      </div>

      <div className="container py-10">
        <div className="text-center">
          <h2 className="text-2xl text-neutral font-semibold">
            Career With SKRP Renewable Energy Ltd.
          </h2>
          <p className="mt-2 text-neutral-content text-[15px] sm:w-2/3 mx-auto">
            Vacancy available now. If of you are goal oriented, motivated and
            looking for a challenging career with the SKRP , please contact with
            us.
          </p>
        </div>

        <div className="mt-10 sm:w-2/3 mx-auto">
          <h2 className="text-xl text-neutral font-medium mb-4">
            Send us mail
          </h2>

          <form className="flex flex-col gap-4">
            <div>
              <p>
                Name <span className="text-secondary">*</span>
              </p>
              <input type="text" name="name" required />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p>
                  Email <span className="text-secondary">*</span>
                </p>
                <input type="email" name="email" required />
              </div>
              <div>
                <p>
                  Phone <span className="text-secondary">*</span>
                </p>
                <input type="text" name="phone" required />
              </div>
            </div>

            <div>
              <p>
                Subject <span className="text-secondary">*</span>
              </p>
              <input type="text" name="subject" required />
            </div>

            <div>
              <p>
                Cover Letter <span className="text-secondary">*</span>
              </p>
              <textarea name="cover_letter" rows="8" required></textarea>
            </div>

            <div>
              <p>
                Please prove that you are human by solving the equation
                <span className="text-secondary">*</span>
              </p>
              <div className="relative">
                <input type="text" name="equation" className="pl-20" required />
                <p className="absolute top-1.5 left-3 text-neutral-content">
                  4 + 0 = ?
                </p>
              </div>
            </div>

            <div>
              <button className="secondary_btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

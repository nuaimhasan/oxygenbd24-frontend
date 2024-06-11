export default function Banner() {
  return (
    <section className="pt-10 h-screen bg-[#4f9ff41d]" id="home">
      <div className="container h-full">
        <div className="h-full flex justify-center items-center">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl text-secondary">
                Oxygen Cilinder
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold my-1 sm:my-3 text-neutral">
                Do You Need Medical Oxygen?
              </h2>
              <p className="text-sm sm:text-[15px] text-neutral-content">
                Are you looking for natural solutions to all your hair problems?
                Then our non-sticky &quot;Magical Hair Well&quot; made with
                all-natural ingredients is just for you.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm sm:text-[15px]">
                <a href="#product" className="primary_btn">
                  Buy Now
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2 rounded border-2 border-black/80 hover:bg-black/80 duration-300 text-black hover:text-base-100"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="">
              <img
                src="/images/banner/oxygen_cilinder.png"
                alt=""
                className="w-[75%] sm:w-[88%] mx-auto sm:ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

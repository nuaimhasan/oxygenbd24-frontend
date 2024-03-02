import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner_wrap h-[80vh] sm:h-screen" id="home">
      <div className="container h-full">
        <div className="h-full flex justify-center items-center">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="text-base-100">
              <h2 className="text-xl sm:text-2xl">Natural & Organic</h2>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold my-1 sm:my-3">
                Magical Solution to all Hair Problems
              </h2>
              <p className="text-sm sm:text-[15px]">
                Are you looking for natural solutions to all your hair problems?
                Then our non-sticky &quot;Magical Hair Well&quot; made with
                all-natural ingredients is just for you.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm sm:text-[15px]">
                <a
                  href="#product"
                  className="px-6 py-2 rounded bg-black/80 border-2 border-black/80"
                >
                  Shop Now
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2 rounded border-2 border-black/80 hover:bg-black/80 duration-300 text-black hover:text-base-100"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <img
                src="/images/banner/oil-2.png"
                alt=""
                className="w-[88%] ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

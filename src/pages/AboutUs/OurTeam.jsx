export default function OurTeam() {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-2xl font-semibold text-center text-neutral">
          Our Team
        </h2>

        <div className="mt-8 grid grid-cols-4 gap-6">
          <div className="shadow rounded bg-base-100">
            <img
              src="/images/Nazmul-islam-sumon.jpeg"
              alt=""
              className="w-full h-40 rounded-t"
            />
            <div className="px-3 pb-6 pt-2">
              <h2 className="text-neutral text-lg font-medium">
                Nazmul Islam Sumon
              </h2>
              <p className="text-neutral-content">Managing Director & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-neutral">About SKRP</h2>

            <div className="text-sm text-neutral-content mt-3">
              <p>
                We, the people of SKRP are accelerating our business through the
                strength of our customers’ satisfaction. We are a responsible
                company to our employees and our customers. We are determined to
                offer quality products at acceptable prices. Loyalty to our
                customers and clients is our strength.
              </p>
              <p>
                We do not believe in concentrating only on the socially
                committed to assist the mainstreaming economic development. The
                most unique quality of SKRP is that it does not compromise while
                manufacturing products itself or importing products for
                customers to keep continue the customers’ satisfaction.
              </p>
              <p>
                We entered into a very competitive market in a short time, and
                succeeded to win customers, who are very satisfied with our
                progress because we have some unique characteristics as a
                business enterprise.
              </p>

              <p>We-</p>
              <ul className="list-inside list-disc">
                <li>Act with honesty and integrity</li>
                <li>Treat people with respect</li>
                <li>Conduct all business lawfully</li>
                <li>Accept individual and corporate responsibility</li>
                <li>Strive for customer satisfaction</li>
                <li>Improve and innovate continuously</li>
                <li>Always work effectively and efficiently</li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src="/images/about.jpg"
              alt=""
              className="w-full h-80 rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

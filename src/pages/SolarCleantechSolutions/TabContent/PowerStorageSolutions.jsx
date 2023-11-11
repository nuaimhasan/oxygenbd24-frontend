import { useState } from "react";

export default function PowerStorageSolutions() {
  const [BatteryWarranty, setBatteryWarranty] = useState(false);
  return (
    <div>
      <div>
        <h2 className="text-2xl text-neutral font-semibold">
          Power Storage Solutions
        </h2>
        <p className="text-[15px] text-neutral-content mt-2">
          Rahimafrooz Solar are manufactures and sellers of power solutions for
          vehicles which are major modes of transportation in semi urban and
          rural Bangladesh.
        </p>
      </div>

      <div className="mt-8">
        <div className="shadow p-4 grid sm:grid-cols-3 gap-6 mb-6">
          <div>
            <img
              src="/images/solar-cleantech-solutions/battery.png"
              alt=""
              className="w-full h-56"
            />
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-xl font-semibold text-neutral">
              Solar Batteries
            </h2>
            <p className="text-neutral-content text-[15px] my-2">
              Solar Batteries comes from the most experienced battery
              manufacturer in the country. Made with the latest technology it
              requires less DM water and is long lasting and durable.
            </p>
            <p className="text-neutral-content text-[15px]">
              Warranty periods depending on the type are as below:
              <button
                onClick={() => setBatteryWarranty(!BatteryWarranty)}
                className="text-primary ml-2"
              >
                {BatteryWarranty ? "less" : "show"}
              </button>
            </p>

            {BatteryWarranty && (
              <div className="relative overflow-x-auto">
                <table className="whitespace-normal">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Warranty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Battery RE 15, 12V 15Ah@10HR</td>
                      <td>3 Years</td>
                    </tr>
                    <tr>
                      <td>Battery RE 20, 12V 20Ah@10HR</td>
                      <td>3 Years</td>
                    </tr>
                    <tr>
                      <td>Battery RE 23, 12V 23Ah@10HR</td>
                      <td>3 Years</td>
                    </tr>
                    <tr>
                      <td>Battery RE 30, 12V 30Ah@10HR</td>
                      <td>5 Years</td>
                    </tr>
                    <tr>
                      <td>Battery RE 40, 12V 40Ah@10HR</td>
                      <td>5 Years</td>
                    </tr>
                    <tr>
                      <td>Battery RE 45, 12V 45Ah@10HR</td>
                      <td>5 Years</td>
                    </tr>
                    <tr>
                      <td>Battery RE 45, 12V 45Ah@10HR</td>
                      <td>5 Years</td>
                    </tr>
                    <tr>
                      <td>Battery RE 45, 12V 45Ah@10HR</td>
                      <td>5 Years</td>
                    </tr>
                    <tr>
                      <td>Battery RE 55,12V 55Ah@10HR</td>
                      <td>5 Years</td>
                    </tr>
                    <tr>
                      <td>Battery RE 60,12V 60Ah@10HR </td>
                      <td>5 Years</td>
                    </tr>
                    <tr>
                      <td>Battery RE 71,12V 71Ah@10HR </td>
                      <td>5 Years</td>
                    </tr>
                    <tr>
                      <td>Battery RE 80,12V 80Ah@10HR </td>
                      <td>5 Years</td>
                    </tr>
                    <tr>
                      <td>Battery RE 85,12V 85Ah@10HR</td>
                      <td>5 Years</td>
                    </tr>
                    <tr>
                      <td>Battery RE 100,12V 100Ah@10HR</td>
                      <td>5 Years</td>
                    </tr>
                    <tr>
                      <td>Battery RE 130,12V 130Ah@10HR </td>
                      <td>5 Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        <div className="shadow p-4 grid sm:grid-cols-3 gap-6 mb-6">
          <div>
            <img
              src="/images/solar-cleantech-solutions/power-box.jpg"
              alt=""
              className="w-full h-56"
            />
          </div>

          <div className="sm:col-span-2">
            <h2 className="text-xl font-semibold text-neutral">MC Batteries</h2>
            <p className="text-neutral-content text-[15px] my-2">
              MC batteries are maintenance free batteries and for usage for
              motorcycles only. These long lasting batteries have no spill out
              due to extreme road bumps and shaking and is made with the latest
              technology.
            </p>
            <p className="text-neutral-content text-[15px]">
              The brand is powerbox and is available at:
            </p>
            <ul className="list-inside list-disc text-neutral-content text-[15px] mt-2">
              <li>PB 2.5AMF</li>
              <li>PB 5 AMF</li>
              <li>PB 7AMF</li>
              <li>PB 9AMF</li>
            </ul>
          </div>
        </div>

        <div className="shadow p-4 grid sm:grid-cols-3 gap-6 mb-6">
          <div>
            <img
              src="/images/solar-cleantech-solutions/fiter.jpg"
              alt=""
              className="w-full h-56"
            />
          </div>

          <div className="sm:col-span-2">
            <h2 className="text-xl font-semibold text-neutral">
              EV or electric vehicle batteries
            </h2>
            <p className="text-neutral-content text-[15px] my-2">
              EV or electric vehicle batteries are for usage for electric 3
              wheeler. Benefits of long term usage is augmented with use of
              highly efficient tubular plates.
            </p>
            <p className="text-neutral-content text-[15px]">
              The brand is FIGHTER and is available as FTR200ev with 6 months’
              warranty.
            </p>
          </div>
        </div>

        <div className="shadow p-4 grid sm:grid-cols-3 gap-6">
          <div>
            <img
              src="/images/solar-cleantech-solutions/Mishuk.jpg"
              alt=""
              className="w-full h-56"
            />
          </div>

          <div className="sm:col-span-2">
            <h2 className="text-xl font-semibold text-neutral">
              Mishuk battery
            </h2>
            <p className="text-neutral-content text-[15px] my-2">
              Mishuk battery is available as M200
            </p>
            <p className="text-neutral-content text-[15px]">
              The brand is Mishuk Power with 6 months’ warranty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

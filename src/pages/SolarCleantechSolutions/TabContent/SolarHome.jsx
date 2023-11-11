export default function SolarHome() {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-2xl text-neutral font-semibold">
            Solar Home Systems
          </h2>
          <p className="text-[15px] text-neutral-content mt-2">
            For rural Bangladesh, Solar Home Systems (or more popularly known as
            SHS) is the most convenient way for households and small enterprise
            owners to have access to clean and low cost electricity. The current
            SHS (depending on its capacity) can support DC appliances like TVs
            and fans and even power cell phones.
          </p>
        </div>
        <div>
          <img
            src="/images/solar-cleantech-solutions/home.jpg"
            alt=""
            className="rounded h-40"
          />
        </div>
      </div>

      <div className="mt-8">
        <img
          src="/public/images/solar-cleantech-solutions/SHS.jpeg"
          alt=""
          className="w-full h-60 md:h-96"
        />

        <p className="my-6 text-neutral-content text-[15px]">
          Our systems are available from the capacity of 30Wp to 130Wp. All
          components comes with its own warranties.
        </p>

        <div className="relative overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Sl. No. </th>
                <th>SHS Name</th>
                <th>Battery</th>
                <th>Lighting (4 hour)</th>
                <th>
                  Option for Single <br /> 15W LED TV (4 hour)
                </th>
                <th>
                  Option for single <br /> 12W DC Fan (8 hour)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>30 Wp SHS</td>
                <td>30 Ah</td>
                <td>5 LED bulb (3W)</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td>2</td>
                <td>45 Wp SHS</td>
                <td>40 Ah</td>
                <td>4 LED bulb (3W)</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <td>3</td>
                <td>50 Wp SHS</td>
                <td>55 Ah</td>
                <td>5 LED bulb (3W)</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <td>4</td>
                <td>65 Wp SHS</td>
                <td>71 Ah</td>
                <td>5 LED bulb (3W)</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>5</td>
                <td>85 Wp SHS</td>
                <td>80 Ah</td>
                <td>4 LED bulb (3W)</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>6</td>
                <td>100 Wp SHS</td>
                <td>100 Ah</td>
                <td>7 LED bulb (3W)</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>7</td>
                <td>130 Wp SHS</td>
                <td>130 Ah</td>
                <td>13 LED bulb (3W)</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

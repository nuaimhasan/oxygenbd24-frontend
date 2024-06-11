import { useState } from "react";
import { useAddRentMutation } from "../../../Redux/rent/rentApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AddRent() {
  const navigate = useNavigate();
  const [feature, setFeature] = useState("");
  const [features, setFeatures] = useState([]);

  const [addRent, { isLoading }] = useAddRentMutation();

  const handleAddRent = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const time = form.time.value;
    const company = form.company.value;
    const size = form.size.value;
    const height = form.height.value;
    const weight = form.weight.value;
    const pressure = form.pressure.value;
    const backup = form.backup.value;

    const rentInfo = {
      title,
      price,
      time,
      company,
      size,
      height,
      weight,
      pressure,
      backup,
      features,
    };

    const res = await addRent(rentInfo);
    if (res?.data?.success) {
      Swal.fire("", "Rent add success", "success");
      form.reset();
      navigate("/admin/rental/all");
      setFeatures([]);
    } else {
      Swal.fire("", "something went wront", "success");
    }
  };

  return (
    <section>
      <div className="bg-base-100rounded shadow">
        <h2 className="p-2 border-b text-lg font-medium">Add Rental</h2>

        <form onSubmit={handleAddRent} className="p-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <p className="mb-1">Title</p>
              <input type="text" name="title" required />
            </div>
            <div>
              <p className="mb-1">Price</p>
              <input type="number" name="price" required />
            </div>
            <div>
              <p className="mb-1">Rent Time</p>
              <input type="text" name="time" required placeholder="30 days" />
            </div>
            <div>
              <p className="mb-1">Company Name</p>
              <input type="text" name="company" required />
            </div>
            <div>
              <p className="mb-1">Size</p>
              <input type="text" name="size" required />
            </div>
            <div>
              <p className="mb-1">Height</p>
              <input type="text" name="height" required />
            </div>
            <div>
              <p className="mb-1">Weight</p>
              <input type="text" name="weight" required />
            </div>
            <div>
              <p className="mb-1">Pressure</p>
              <input
                type="text"
                name="pressure"
                required
                placeholder="2000 Litters+"
              />
            </div>
            <div>
              <p className="mb-1">Backup</p>
              <input
                type="text"
                name="backup"
                required
                placeholder="Par min 2 liter 12 hours"
              />
            </div>
          </div>

          <div className="mt-4">
            <p>More Features</p>
            <div className="mt-2 sm:w-1/2 flex gap-2">
              <input
                type="text"
                name="feature"
                onChange={(e) => setFeature(e.target.value)}
                value={feature}
              />
              <div
                className="secondary_btn cursor-pointer"
                onClick={() => {
                  setFeatures([...features, feature]);
                  setFeature("");
                }}
              >
                +
              </div>
            </div>

            <ul className="mt-4 list-disc list-inside">
              {features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <button disabled={isLoading && "disabled"} className="primary_btn">
              {isLoading ? "Loading..." : "Add Rent"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

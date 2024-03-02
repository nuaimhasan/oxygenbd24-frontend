import "./Checkout.css";
import { MdOutlineClose } from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { cities, districts } from "../../Data/location";

export default function Checkout({ checkout, setCheckout }) {
  const [quantity, setQuantity] = useState(1);
  const [city, setCity] = useState("Dhaka");
  const [shipping, setShipping] = useState(70);
  const [validPhone, setValidPhone] = useState("");

  const [districtDropdown, setDistrictDropdown] = useState(false);
  const [district, setDistrict] = useState("");
  const [searchDistrict, setSearchDistrict] = useState("");

  const handelSetDistrict = (selectedDistrict) => {
    setDistrict(selectedDistrict);
    setDistrictDropdown(false);
    setSearchDistrict("");
  };

  // Remove District Dropdown click other side
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".district")) {
        setDistrictDropdown(false);
      }
    });
  }, []);

  useEffect(() => {
    if (city == "Dhaka") {
      setShipping(70);
    } else {
      setShipping(150);
    }
  }, [city]);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const street = form.street.value;

    if (phone?.length !== 11) {
      return setValidPhone("please provide valid phone number");
    } else {
      setValidPhone("");
    }

    const orderInfo = {
      name,
      phone,
      email,
      city,
      district,
      street,
      quantity,
      shipping,
    };

    console.log(orderInfo);
  };

  return (
    <div className={`checkout ${checkout && "checkout_show"}`}>
      <div className="flex flex-col justify-between w-full h-full">
        <div>
          <div className="flex justify-between items-center border-b p-3">
            <p>CHECKOUT</p>
            <button onClick={() => setCheckout(false)}>
              <MdOutlineClose className="hover:text-red-600 text-xl duration-200" />
            </button>
          </div>

          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <img
                src="/images/product/oil.png"
                alt=""
                className="w-10 h-10 bg-gray-100 p-1"
              />
              <div>
                <p className="text-neutral text-[15px]">
                  Magical Hair Oil - 200ml
                </p>
                <p className="flex items-center gap-2">
                  <div className="flex items-center gap-2 text-sm text-neutral-content">
                    <button
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                      className="bg-gray-100 px-1.5 rounded hover:bg-gray-200 duration-200"
                    >
                      -
                    </button>
                    <button>{quantity}</button>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-gray-100 px-1.5 rounded hover:bg-gray-200 duration-200"
                    >
                      +
                    </button>
                  </div>
                  *
                  <span className="text-primary flex items-center gap-px">
                    <FaBangladeshiTakaSign className="text-sm" />
                    {quantity * 570}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <form onSubmit={handlePlaceOrder}>
            <div className="h-[64vh] overflow-y-auto p-3 text-sm billing flex flex-col gap-3">
              <p>BILLING DETAILS</p>
              <div className="flex flex-col gap-1">
                <p className="text-neutral-content">Full Name *</p>
                <input
                  type="text"
                  name="name"
                  className="border rounded outline-none px-3 py-1"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-neutral-content">Phone *</p>
                <input
                  type="text"
                  name="phone"
                  className="border rounded outline-none px-3 py-1"
                  required
                />
                {validPhone && (
                  <small className="text-red-500">{validPhone}</small>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-neutral-content">Email</p>
                <input
                  type="text"
                  name="email"
                  className="border rounded outline-none px-3 py-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-neutral-content">City *</p>
                  <select
                    name="city"
                    className="border rounded outline-none px-3 py-1"
                    required
                    onChange={(e) => setCity(e.target.value)}
                    defaultValue={city}
                  >
                    {cities?.map((city, i) => (
                      <option key={i} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative district ">
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-content">District *</p>
                    <div
                      onClick={() => setDistrictDropdown(!districtDropdown)}
                      className="px-2 py-1 h-8 border border-neutral-content rounded cursor-pointer"
                    >
                      {district}
                    </div>
                  </div>

                  {districtDropdown && (
                    <div className="absolute bg-base-100 border rounded top-full left-0 p-2 w-full max-h-60 overflow-y-auto">
                      <div>
                        <input
                          onChange={(e) => setSearchDistrict(e.target.value)}
                          type="text"
                          className="px-2 py-1 rounded w-full border outline-none placeholder:font-light"
                          placeholder="search District"
                        />
                      </div>
                      <ul>
                        {districts
                          .filter((district) =>
                            district
                              .toLowerCase()
                              .includes(searchDistrict.toLowerCase())
                          )
                          .map((district, i) => (
                            <li
                              key={i}
                              onClick={() => handelSetDistrict(district)}
                              className="p-1 hover:bg-gray-200 duration-200 cursor-pointer"
                            >
                              {district}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* <div className="flex flex-col gap-1">
                  <p className="text-neutral-content">District *</p>
                  <select
                    name="district"
                    className="border rounded outline-none px-3 py-1"
                    required
                  >
                    <option value="Dhaka">Dhaka</option>
                  </select>
                </div> */}
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-neutral-content">Street *</p>
                <textarea
                  name="street"
                  rows="3"
                  className="border rounded outline-none px-3 py-1"
                  required
                ></textarea>
              </div>
            </div>

            <div className="border-t p-4 flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm">
                <p>Shipping:</p>
                <p>৳ {shipping}.00</p>
              </div>
              <div className="flex justify-between items-center text-primary font-semibold">
                <p>SUBTOTAL:</p>
                <p>৳ {quantity * 570 + shipping}.00</p>
              </div>

              <button className="bg-primary text-base-100 py-1.5 w-full">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

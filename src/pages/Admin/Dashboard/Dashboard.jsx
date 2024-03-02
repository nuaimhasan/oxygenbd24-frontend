import { FaUserShield, FaCartPlus } from "react-icons/fa";
import OrderTable from "../../../components/AdminComponents/OrdersTable/OrderTable";

export default function Dashboard() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
            <div>
              <p className="text-neutral font-dinMedium">Total Admin</p>
              <h3 className="text-primary font-bold">1</h3>
            </div>
            <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
              <FaUserShield className="text-xl" />
            </div>
          </div>
          <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
            <div>
              <p className="text-neutral font-dinMedium">Today Orders</p>
              <h3 className="text-primary font-bold">1</h3>
            </div>
            <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
              <FaCartPlus className="text-xl" />
            </div>
          </div>
          <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
            <div>
              <p className="text-neutral font-dinMedium">Total Orders</p>
              <h3 className="text-primary font-bold">1</h3>
            </div>
            <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
              <FaCartPlus className="text-xl" />
            </div>
          </div>
        </div>

        {/* Orders */}
        <OrderTable />
      </div>
    </section>
  );
}

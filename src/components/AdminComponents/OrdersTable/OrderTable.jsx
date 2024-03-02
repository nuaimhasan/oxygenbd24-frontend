import { AiOutlineDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function OrderTable() {
  return (
    <div className="mt-4 bg-base-100 p-4 rounded shadow">
      <div className="flex items-center justify-between">
        <p>Latest Orders</p>
        <Link to="/admin/order/all-orders" className="primary_btn text-sm">
          All Orders
        </Link>
      </div>

      <div className="mt-4 relative overflow-x-auto">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Order Id</th>
              <th>User</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>03-03-2024</td>
              <td>1</td>
              <td>Nasim Uddin</td>
              <td>1</td>
              <td>570</td>
              <td>
                <div
                  className={`w-max border text-xs border-green-500 rounded px-2 py-1`}
                >
                  pending
                </div>
              </td>
              <td>
                <div className="flex gap-3">
                  <Link to={`/admin/order/`} className=" hover:text-blue-700">
                    <GrView />
                  </Link>
                  <button className="hover:text-red-700">
                    <AiOutlineDelete />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

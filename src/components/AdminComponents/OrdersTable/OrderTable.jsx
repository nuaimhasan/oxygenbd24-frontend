import { AiOutlineDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
import {
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
} from "../../../Redux/order/orderApi";
import Swal from "sweetalert2";

export default function OrderTable() {
  const { data, isLoading } = useGetAllOrdersQuery();
  const [deleteOrder, { isLoading: deleteLoading }] = useDeleteOrderMutation();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  const orders = data?.data;

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order?._id}>
                <td>{order?.createdAt.split("T")[0]}</td>
                <td>{order?.orderId ? order?.orderId : "Null"}</td>
                <td>
                  <p>Name: {order?.name}</p>
                  <div className="text-sm text-neutral-content">
                    <p>city: {order?.city}</p>
                    <p>District: {order?.district}</p>
                  </div>
                </td>
                <td>{order?.quantity}</td>
                <td>{570 * order?.quantity + order?.shipping}</td>
                <td>
                  <div className="flex gap-3">
                    <Link
                      to={`/admin/order/${order?._id}`}
                      className=" hover:text-blue-700"
                    >
                      <GrView />
                    </Link>
                    <button
                      disabled={deleteLoading && "disabled"}
                      className="hover:text-red-700"
                      onClick={async (e) => {
                        e.preventDefault();
                        const isConfirm = window.confirm(
                          "Are You Sure Delete this Order"
                        );
                        if (isConfirm) {
                          const res = await deleteOrder(order?._id);
                          if (res?.data?.success) {
                            Swal.fire("", "Delete success", "success");
                          } else {
                            Swal.fire("", "Something went wrong", "error");
                          }
                        }
                      }}
                    >
                      {deleteLoading ? "..." : <AiOutlineDelete />}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

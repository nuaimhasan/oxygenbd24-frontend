import { AiOutlineDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Spinner from "../../Spinner/Spinner";
import {
  useGetAllRentOrdersQuery,
  useDeleteRentOrderMutation,
} from "../../../Redux/rentOrder/rentOrderApi.jsx";

export default function RentOrderTable() {
  const { data, isLoading } = useGetAllRentOrdersQuery();
  const [deleteOrder, { isLoading: deleteLoading }] =
    useDeleteRentOrderMutation();
  if (isLoading) {
    return <Spinner />;
  }

  const orders = data?.data;

  return (
    <div className="mt-4 bg-base-100 p-4 rounded shadow">
      <p>Latest Orders</p>

      <div className="mt-4 relative overflow-x-auto">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Order Id</th>
              <th>User</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order?._id}>
                <td>{order?.createdAt?.split("T")[0]}</td>
                <td>{order?._id}</td>
                <td>
                  <p>Name: {order?.shipping?.name}</p>
                  <div className="text-sm text-neutral-content">
                    <p>Phone: {order?.shipping?.phone}</p>
                    <p>Address: {order?.shipping?.address}</p>
                  </div>
                </td>
                <td>{order?.product?.price}</td>
                <td>
                  <div className="flex gap-3">
                    <Link
                      to={`/admin/rent/${order?._id}`}
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

import { Link } from "react-router-dom";
import {
  useDeleteRentMutation,
  useGetAllRentsQuery,
} from "../../../Redux/rent/rentApi";
import Spinner from "../../../components/Spinner/Spinner";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";

export default function RentalLists() {
  const { data, isLoading } = useGetAllRentsQuery();

  const [deleteRent] = useDeleteRentMutation();

  const handleDeleteRent = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this product?");
    if (isConfirm) {
      try {
        const res = await deleteRent(id).unwrap();
        if (res?.data?.success) {
          Swal.fire("", "Rent deleted successfully", "success");
        }
      } catch (error) {
        Swal.fire("", "Something went wrong", "error");
      }
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <section>
      <div className="bg-base-100 rounded shadow">
        <div className="flex justify-between items-center border-b p-2 ">
          <h2 className="text-lg font-medium">All Rental</h2>
          <Link to="/admin/rent/add" className="primary_btn text-sm">
            Add New
          </Link>
        </div>

        <div className="relative overflow-x-auto mt-2">
          <table>
            <thead>
              <tr>
                <th>SL</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((rent, i) => (
                <tr key={rent?._id}>
                  <td>{i + 1}</td>
                  <td>{rent?.title}</td>
                  <td>{rent?.price}</td>
                  <td>
                    <div className="flex gap-3 items-center">
                      <Link to={`/admin/rent/edit/${rent?._id}`}>
                        <AiOutlineEdit className="text-lg hover:text-red-500" />
                      </Link>
                      <button onClick={() => handleDeleteRent(rent?._id)}>
                        <AiOutlineDelete className="text-lg hover:text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

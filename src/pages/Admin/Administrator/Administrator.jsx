import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Spinner from "../../../components/Spinner/Spinner";
import { useSelector } from "react-redux";
import {
  useDeleteAdminMutation,
  useGetAdminsQuery,
} from "../../../Redux/user/userApi";

export default function Administrator() {
  const { data, isLoading } = useGetAdminsQuery();
  const [deleteAdmin] = useDeleteAdminMutation();
  const { loggedUser } = useSelector((state) => state.user);
  const admins = data?.data;

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("are you sure delete this admin?");
    if (isConfirm) {
      try {
        const res = await deleteAdmin(id).unwrap();
        if (res?.success) {
          Swal.fire({
            icon: "success",
            title: "",
            text: "Deleted success",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "",
          text: error?.message,
        });
      }
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  const role = loggedUser?.data?.role;

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded shadow">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-neutral">Administrators</h1>
          <Link to="/admin/administrator/add" className="secondary_btn">
            Add Administrator
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-2 bg-base-100 rounded shadow">
        <table>
          <thead>
            <tr>
              <th>User name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admins?.map((admin) => (
              <tr key={admin?.id}>
                <td>
                  <div className="flex items-center gap-2">{admin?.name}</div>
                </td>
                <td>{admin?.email}</td>
                <td>{admin?.phone}</td>
                <td>{admin?.role}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <Link to={`/admin/administrator/edit/${admin?._id}`}>
                      <FaEdit className="text-[17px] text-gray-700 hover:text-green-500 duration-200" />
                    </Link>

                    <button
                      onClick={() => handleDelete(admin?.id)}
                      disabled={role !== "superAdmin" && "disabled"}
                      title="Super Admin access only"
                    >
                      <AiOutlineDelete className="text-lg hover:text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

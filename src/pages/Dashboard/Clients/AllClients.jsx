import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useAllClientsQuery,
  useDeleteClientMutation,
} from "../../../Redux/clients/clientsApi";
import Spinner from "../../../components/Spinner/Spinner";

const AllClients = () => {
  const { data, isLoading, isError, isSuccess } = useAllClientsQuery();
  const [deleteClient] = useDeleteClientMutation();

  if (isLoading) return <Spinner />;

  const clients = data?.data;

  const deleteClientHandler = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this client?");
    if (isConfirm) {
      try {
        const res = await deleteClient(id).unwrap();
        if (res?.success) {
          Swal.fire({
            title: "",
            text: "Banner Deleted Successfully",
            icon: "success",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "",
          text: "Something went wrong",
          icon: "error",
        });
      }
    }
  };

  let content = null;

  if (isError) {
    content = (
      <p className="text-red-500 mt-5">Something went wrong to get data!</p>
    );
  }

  if (!isError && isSuccess) {
    content = (
      <tbody>
        {clients?.map((client) => (
          <tr key={client?._id}>
            <td>{client?.order}</td>
            <td>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/clients/${
                  client?.image
                }`}
                alt={client?.image}
                className="w-28"
              />
            </td>
            <td>
              <div className="flex gap-3 items-center">
                <Link to={`/admin/clients/edit-client/${client?._id}`}>
                  <AiOutlineEdit className="text-lg hover:text-red-500" />
                </Link>
                <button onClick={() => deleteClientHandler(client?._id)}>
                  <AiOutlineDelete className="text-lg hover:text-red-500" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-neutral">Clients</h1>
          <Link to="/admin/clients/add-client" className="secondary_btn">
            Add New Client
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto mt-2">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Client</th>
              <th>Action</th>
            </tr>
          </thead>
          {content}
        </table>
      </div>
    </section>
  );
};

export default AllClients;

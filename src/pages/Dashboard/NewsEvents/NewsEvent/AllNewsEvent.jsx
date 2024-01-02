import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDeleteNewsEventByIdMutation, useGetNewsEventsQuery } from "../../../../Redux/newsEvents/newsEventsApi";
import Spinner from "../../../../components/Spinner/Spinner";

const AllNewsEvent = () => {
  const { data, isLoading, isError, isSuccess } = useGetNewsEventsQuery();
  const [deleteClient] = useDeleteNewsEventByIdMutation();

  if (isLoading) return <Spinner />;

  const newsEvents = data?.data;

  const deleteClientHandler = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this event?");
    if (isConfirm) {
      try {
        const res = await deleteClient(id).unwrap();
        if (res?.success) {
          Swal.fire({
            title: "",
            text: "Event Deleted Successfully",
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
        {newsEvents?.map((news) => (
          <tr key={news?._id}>
            <td>{news?.title}</td>
            <td>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/newsEvent/${
                  news?.image
                }`}
                alt={news?.image}
                className="w-28"
              />
            </td>
            <td>{news?.category}</td>
            <td>
              <div className="flex gap-3 items-center">
                <Link
                  to={`/admin/news-events/edit-news-events/${news?._id}`}
                >
                  <AiOutlineEdit className="text-lg hover:text-red-500" />
                </Link>
                <button onClick={() => deleteClientHandler(news?._id)}>
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
              <th>Title</th>
              <th>Image</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          {content}
        </table>
      </div>
    </section>
  );
};

export default AllNewsEvent;

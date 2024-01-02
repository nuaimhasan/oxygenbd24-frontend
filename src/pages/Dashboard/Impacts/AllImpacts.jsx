import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteImpactMutation,
  useGetImpactsQuery,
} from "../../../Redux/impacts/impactsApi";
import Spinner from "../../../components/Spinner/Spinner";

const AllImpacts = () => {
  const { data, isLoading, isError, error, isSuccess } = useGetImpactsQuery();
  const impacts = data?.data;

  const [deleteCategory] = useDeleteImpactMutation();

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this Impact?");
    if (isConfirm) {
      try {
        const res = await deleteCategory(id).unwrap();
        if (res?.success) {
          Swal.fire({
            title: "",
            text: "Impact Deleted Successfully",
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

  if (isLoading) {
    content = <Spinner />;
  }

  if (isError) {
    content = <p className="text-red-500 mt-4">{error?.data?.error}</p>;
  }

  if (!isError && isSuccess) {
    content = (
      <div className="relative overflow-x-auto mt-2">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Title</th>
              <th>Sub Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {impacts?.map((impact) => (
              <tr key={impact?._id}>
                <td>{impact?.order}</td>
                <td>{impact?.title}</td>
                <td>{impact?.subtitle}</td>
                <td className="flex items-center gap-2">
                  <Link
                    to={`/admin/impacts/edit-impact/${impact?._id}`}
                    className="text-lg"
                  >
                    <FiEdit3 />
                  </Link>
                  <button
                    className="text-lg"
                    onClick={() => handleDelete(impact?._id)}
                  >
                    <MdOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-neutral">Impacts</h1>
          <Link to="/admin/impacts/add-impact" className="secondary_btn">
            Add New Impact
          </Link>
        </div>

        {content}
      </div>
    </section>
  );
};

export default AllImpacts;

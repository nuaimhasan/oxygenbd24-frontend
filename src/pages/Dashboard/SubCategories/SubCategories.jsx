import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Spinner from "../../../components/Spinner/Spinner";
import { useDeleteSubCategoryMutation, useGetSubCategoriesQuery } from "../../../Redux/subCategory/subCategoryApi";

const SubCategories = () => {
  const { data, isLoading, isError, error, isSuccess } =
    useGetSubCategoriesQuery();
  const categories = data?.data;

  const [deleteCategory] = useDeleteSubCategoryMutation();

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this Category?");
    if (isConfirm) {
      try {
        const res = await deleteCategory(id).unwrap();
        if (res?.success) {
          Swal.fire({
            title: "",
            text: "Category Deleted Successfully",
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
              <th>SL</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((category, index) => (
              <tr key={category?._id}>
                <td>{index + 1}</td>
                <td>{category?.name}</td>
                <td className="flex items-center gap-2">
                  <Link
                    to={`/admin/categories/edit-sub-category/${category?._id}`}
                    className="text-lg"
                  >
                    <FiEdit3 />
                  </Link>
                  <button
                    className="text-lg"
                    onClick={() => handleDelete(category?._id)}
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
          <h1 className="font-medium text-neutral">Categories</h1>
          <Link to="/admin/categories/add-sub-category" className="secondary_btn">
            Add New Sub-Category
          </Link>
        </div>

        {content}
      </div>
    </section>
  );
};

export default SubCategories;

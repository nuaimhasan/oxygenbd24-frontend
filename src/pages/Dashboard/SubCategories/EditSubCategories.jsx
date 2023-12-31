import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetCategoriesQuery } from "../../../Redux/category/categoryApi";
import {
  useGetSubCategoryQuery,
  useUpdateSubCategoryMutation,
} from "../../../Redux/subCategory/subCategoryApi";

const EditSubCategories = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: categories } = useGetCategoriesQuery();

  const { data } = useGetSubCategoryQuery(id);

  const [updateCategory, { isLoading, isError, error, isSuccess }] =
    useUpdateSubCategoryMutation();

  useEffect(() => {
    if (isSuccess) {
      Swal.fire("", "Category updated successfully", "success");
      navigate("/admin/categories/all-sub-categories");
    }

    if (isError) {
      Swal.fire("", error?.data?.error, "error");
    }
  }, [isError, error, isSuccess, navigate]);

  const handleUpdateCategory = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const category = e.target.category.value;

    const data = {
      name,
      category,
    };
    updateCategory({ id, data });
  };

  return (
    <section className="bg-base-100 shadow rounded">
      <div className="p-4 border-b text-neutral font-medium flex justify-between items-center">
        <h3>Update Category</h3>
      </div>

      <form onSubmit={handleUpdateCategory} className="p-4">
        <div>
          <p className="mb-1">Sub Category</p>
          <input type="text" name="name" defaultValue={data?.data?.name} />
        </div>
        <div>
          <p className="mb-1">Category</p>
          <select
            name="category"
            id="category"
            defaultValue={data?.data?.category}
          >
            {categories?.data?.map((category) => (
              <option key={category?._id} value={category?._id}>
                {category?.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-5">
          <div className="flex gap-2">
            <button disabled={isLoading && "disabled"} className="primary_btn">
              {isLoading ? "Loading..." : "Update Category"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default EditSubCategories;

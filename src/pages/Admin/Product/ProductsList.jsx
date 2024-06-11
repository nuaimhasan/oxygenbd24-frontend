import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Spinner from "../../../components/Spinner/Spinner";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../../Redux/product/productApi";

export default function ProductsList() {
  const [deleteProduct] = useDeleteProductMutation();
  const { data, isLoading, isError, isSuccess } = useGetAllProductsQuery();
  const products = data?.data;

  const deleteProductHandler = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this product?");
    if (isConfirm) {
      try {
        const res = await deleteProduct(id).unwrap();
        if (res?.success) {
          Swal.fire({
            title: "",
            text: "Product Deleted Successfully",
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

  if (isLoading) return <Spinner />;

  let content = null;

  if (isError) {
    content = (
      <p className="text-red-500 mt-5">Something went wrong to get data!</p>
    );
  }

  if (!isError && isSuccess) {
    content = (
      <tbody>
        {products?.map((product, i) => (
          <tr key={product?._id}>
            <td>{i + 1}</td>
            <td>{product?.title}</td>
            <td>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/products/${
                  product?.image
                }`}
                alt={product?.image}
                className="w-14 h-8 rounded"
              />
            </td>
            <td>{product?.price}</td>
            <td>
              <div className="flex gap-3 items-center">
                <Link to={`/admin/product/edit/${product?._id}`}>
                  <AiOutlineEdit className="text-lg hover:text-red-500" />
                </Link>
                <button onClick={() => deleteProductHandler(product?._id)}>
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
          <h1 className="font-medium text-neutral">Products</h1>
          <Link to="/admin/product/add" className="secondary_btn">
            Add Product
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto mt-2">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {content}
        </table>
      </div>
    </section>
  );
}

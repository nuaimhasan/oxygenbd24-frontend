import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useAddImpactMutation,
  useGetImpactsQuery,
} from "../../../Redux/impacts/impactsApi";
import Spinner from "../../../components/Spinner/Spinner";

const AddImpact = () => {
  const navigate = useNavigate();

  const { data, isLoading: getLoading } = useGetImpactsQuery();

  const [addImpact, { isLoading, isError, error, isSuccess }] =
    useAddImpactMutation();

  useEffect(() => {
    if (isSuccess) {
      Swal.fire("", "impact added successfully", "success");
      navigate("/admin/impacts/all-impacts");
    }

    if (isError) {
      Swal.fire("", error?.data?.error, "error");
    }
  }, [isError, error, isSuccess, navigate]);

  const handleAddImpact = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const subtitle = e.target.subtitle.value;
    const order = e.target.order.value;

    const data = {
      title,
      subtitle,
      order,
    };
    addImpact(data);
  };

  if (getLoading) return <Spinner />;

  return (
    <section className="bg-base-100 shadow rounded">
      <div className="p-4 border-b text-neutral font-medium flex justify-between items-center">
        <h3>Add Impact</h3>
      </div>

      <form onSubmit={handleAddImpact} className="p-4">
        <div>
          <p className="mb-1">Title</p>
          <input type="text" name="title" placeholder="Enter Title" />
        </div>
        <div>
          <p className="mb-1">Subtitle</p>
          <input type="text" name="subtitle" placeholder="Enter Subtitle" />
        </div>
        <div>
          <p className="mb-1">Order</p>
          <input
            type="number"
            name="order"
            defaultValue={data?.data?.length > 0 ? data?.data?.length + 1 : 1}
          />
        </div>

        <div className="mt-5">
          <div className="flex gap-2">
            <button disabled={isLoading && "disabled"} className="primary_btn">
              {isLoading ? "Loading..." : "Add Impact"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddImpact;

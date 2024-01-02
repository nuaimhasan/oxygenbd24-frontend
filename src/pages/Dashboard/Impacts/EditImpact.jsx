import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useGetImpactByIdQuery,
  useUpdateImpactMutation,
} from "../../../Redux/impacts/impactsApi";
import Spinner from "../../../components/Spinner/Spinner";

const EditImpact = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: impact, isLoading: getImpactLoading } =
    useGetImpactByIdQuery(id);

  const [updataImpact, { isLoading, isError, error, isSuccess }] =
    useUpdateImpactMutation();

  useEffect(() => {
    if (isSuccess) {
      Swal.fire("", "impact updated successfully", "success");
      navigate("/admin/impacts/all-impacts");
    }

    if (isError) {
      Swal.fire("", error?.data?.error, "error");
    }
  }, [isError, error, isSuccess, navigate]);

  const handlUpdateImpact = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const subtitle = e.target.subtitle.value;
    const order = e.target.order.value;

    const data = {
      title,
      subtitle,
      order,
    };
    updataImpact({ id, data });
  };

  if (getImpactLoading) return <Spinner />;

  return (
    <section className="bg-base-100 shadow rounded">
      <div className="p-4 border-b text-neutral font-medium flex justify-between items-center">
        <h3>Update Impact</h3>
      </div>

      <form onSubmit={handlUpdateImpact} className="p-4">
        <div>
          <p className="mb-1">Title</p>
          <input type="text" name="title" defaultValue={impact?.data?.title} />
        </div>
        <div>
          <p className="mb-1">Subtitle</p>
          <input
            type="text"
            name="subtitle"
            defaultValue={impact?.data?.subtitle}
          />
        </div>
        <div>
          <p className="mb-1">Order</p>
          <input
            type="number"
            name="order"
            defaultValue={impact?.data?.order}
          />
        </div>

        <div className="mt-5">
          <div className="flex gap-2">
            <button disabled={isLoading && "disabled"} className="primary_btn">
              {isLoading ? "Loading..." : "Update Impact"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default EditImpact;

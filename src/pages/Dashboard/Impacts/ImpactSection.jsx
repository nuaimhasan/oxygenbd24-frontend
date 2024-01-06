import Swal from "sweetalert2";
import {
  useAddImpactSectionMutation,
  useGetImpactSectionsQuery,
  useUpdateImpactSectionMutation,
} from "../../../Redux/impactSection/impactSectionApi";
import Spinner from "../../../components/Spinner/Spinner";

const ImpactSection = () => {
  const { data, isLoading } = useGetImpactSectionsQuery();
  const [updateImpactSection, { isLoading: updateLoading }] =
    useUpdateImpactSectionMutation();
  const [createImpactSection, { isLoading: createLoading }] =
    useAddImpactSectionMutation();

  if (isLoading) return <Spinner />;

  const id = data?.data[0]?._id;

  const updateAddImpactsHandler = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const details = e.target.details.value;

    const data = {
      title,
      description: details,
    };

    if (id) {
      try {
        const res = await updateImpactSection({ id, data }).unwrap();
        if (res?.success) {
          Swal.fire("", "update success", "success");
        }
      } catch (error) {
        Swal.fire("", error?.data?.error, "error");
      }
    } else {
      try {
        const res = await createImpactSection(data).unwrap();
        if (res?.success) {
          Swal.fire("", "Impact add success", "success");
        }
      } catch (error) {
        Swal.fire("", error?.data?.error, "error");
      }
    }
  };

  return (
    <section className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-medium text-neutral">About Info</h3>
      </div>

      <form onSubmit={updateAddImpactsHandler} className="p-4">
        <div className="text-neutral-content">
          <div className="flex flex-col gap-3 mb-4">
            <div>
              <p className="mb-1">Title</p>
              <input
                type="text"
                name="title"
                defaultValue={id && data?.data[0]?.title}
              />
            </div>
          </div>

          <div>
            <p className="mb-1">Description</p>
            <textarea
              name="details"
              rows="5"
              defaultValue={id && data?.data[0]?.description}
            ></textarea>
          </div>
        </div>

        <div className="mt-6">
          <button
            disabled={(updateLoading || createLoading) && "disabled"}
            className="primary_btn"
          >
            {updateLoading || createLoading
              ? "Loading.."
              : id
              ? "Update"
              : "Add"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ImpactSection;

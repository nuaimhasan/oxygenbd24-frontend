import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import {
  useAddImpactSectionMutation,
  useGetImpactSectionsQuery,
  useUpdateImpactSectionMutation,
} from "../../../Redux/impactSection/impactSectionApi";
import Spinner from "../../../components/Spinner/Spinner";

const ImpactSection = () => {
  const editor = useRef(null);

  const { data, isLoading } = useGetImpactSectionsQuery();
  const [updateImpactSection, { isLoading: updateLoading }] =
    useUpdateImpactSectionMutation();
  const [createImpactSection, { isLoading: createLoading }] =
    useAddImpactSectionMutation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (data && !isLoading) {
      const impactsections = data.data[0];
      setTitle(impactsections?.title);
      setDescription(impactsections?.description);
    }
  }, [data, isLoading]);

  if (isLoading) return <Spinner />;

  const id = data?.data[0]?._id;

  const updateAddImpactsHandler = async (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
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

      <form className="p-4">
        <div className="text-neutral-content grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
          <div className="flex flex-col gap-3">
            <div>
              <p className="mb-1">Title</p>
              <input
                type="text"
                name="title"
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div className="md:col-span-2 border rounded">
            <p className="border-b p-3">Description</p>

            <div className="p-4 about_details">
              <JoditEditor
                ref={editor}
                value={
                  data?.data[0]?.description?.length > 0
                    ? data?.data[0]?.description
                    : description
                }
                onBlur={(text) => setDescription(text)}
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            disabled={(updateLoading || createLoading) && "disabled"}
            className="primary_btn"
            onClick={updateAddImpactsHandler}
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

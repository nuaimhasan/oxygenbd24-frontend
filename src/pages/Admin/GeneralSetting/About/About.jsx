import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
// import Swal from "sweetalert2";
import Spinner from "../../../../components/Spinner/Spinner";
import {
  useCreateAboutUsMutation,
  useGetAboutUsQuery,
  useUpdateAboutUsMutation,
} from "../../../../Redux/about/aboutApi";
import Swal from "sweetalert2";

export default function About() {
  const editor = useRef(null);
  const { data, isLoading } = useGetAboutUsQuery();
  let id = data?.data[0]?._id;

  const [images, setImages] = useState([]);
  const [details, setDetails] = useState("");

  const [updateAbout, { isLoading: updateLoading }] =
    useUpdateAboutUsMutation();
  const [createAbout, { isLoading: addLoading }] = useCreateAboutUsMutation();

  const handleUpdateAbout = async (e) => {
    e.preventDefault();

    const image = images[0]?.file;
    if (!image && !data?.data[0]?.image)
      return Swal.fire("", "image is required", "warning");

    const description =
      details?.length > 0 ? details : data?.data[0]?.description;
    const title = e.target.title.value;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    if (data?.data[0] && id) {
      const res = await updateAbout({ id, formData });
      if (res?.data?.success) {
        Swal.fire("", "About update success", "success");
        setImages([]);
      } else {
        Swal.fire("", "something went wrong", "error");
      }
    } else {
      const res = await createAbout(formData);
      if (res?.data?.success) {
        Swal.fire("", "About add success", "success");
        setImages([]);
      } else {
        Swal.fire("", "something went wrong", "error");
      }
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-medium text-neutral">About</h3>
      </div>

      <form onSubmit={handleUpdateAbout} className="p-4">
        <div className="form_group mt-2">
          <p className="text-neutral-content">Title</p>
          <input
            type="text"
            name="title"
            required
            defaultValue={data?.data[0]?.title}
          />
        </div>

        <div className="mt-4 text-neutral-content grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
          <div className="rounded border">
            <div>
              <p className="border-b p-3">Image</p>
              <div className="p-4">
                <ImageUploading
                  value={images}
                  onChange={(icn) => setImages(icn)}
                  dataURLKey="data_url"
                >
                  {({ onImageUpload, onImageRemove, dragProps }) => (
                    <div
                      className="border rounded border-dashed p-4"
                      {...dragProps}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          onClick={onImageUpload}
                          className="w-max px-4 py-1.5 rounded-2xl text-base-100 bg-primary cursor-pointer text-sm"
                        >
                          Choose Image
                        </span>

                        <p className="text-neutral-content">or Drop here</p>
                      </div>

                      <div className={`${images?.length > 0 && "mt-4"} `}>
                        {images?.map((img, index) => (
                          <div key={index} className="image-item relative">
                            <img
                              src={img["data_url"]}
                              alt=""
                              className="w-40"
                            />
                            <div
                              onClick={() => onImageRemove(index)}
                              className="w-7 h-7 bg-primary rounded-full flex justify-center items-center text-base-100 absolute top-0 right-0 cursor-pointer"
                            >
                              <AiFillDelete />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </ImageUploading>

                {data?.data[0]?.image && (
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/aboutus/${
                      data?.data[0]?.image
                    }`}
                    alt=""
                    className="w-32 mt-4"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 border rounded">
            <p className="border-b p-3">Description</p>

            <div className="p-4">
              <JoditEditor
                ref={editor}
                value={
                  data?.data[0]?.description?.length > 0
                    ? data?.data[0]?.description
                    : details
                }
                onBlur={(text) => setDetails(text)}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            disabled={updateLoading && "disabled"}
            className="primary_btn"
          >
            {updateLoading || addLoading ? "Loading" : id ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </section>
  );
}

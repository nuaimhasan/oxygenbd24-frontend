import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import Spinner from "../../../../components/Spinner/Spinner";
import Swal from "sweetalert2";
import {
  useAddBannerMutation,
  useGetBannerQuery,
  useUpdateBannerMutation,
} from "../../../../Redux/banner/bannerApi";

export default function Banner() {
  const { data, isLoading } = useGetBannerQuery();
  let id = data?.data[0]?._id;

  const [images, setImages] = useState([]);

  const [updateBanner, { isLoading: updateLoading }] =
    useUpdateBannerMutation();
  const [addBanner, { isLoading: addLoading }] = useAddBannerMutation();

  const handleUpdateAbout = async (e) => {
    e.preventDefault();

    const image = images[0]?.file;
    if (!image && !data?.data[0]?.image)
      return Swal.fire("", "image is required", "warning");

    const title = e.target.title.value;
    const sub_title = e.target.sub_title.value;
    const description = e.target.description.value;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subTitle", sub_title);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    if (id) {
      const res = await updateBanner({ id, formData });

      if (res?.data?.success) {
        Swal.fire("", "Banner update success", "success");
        setImages([]);
      } else {
        Swal.fire("", "something went wrong", "error");
      }
    } else {
      const res = await addBanner(formData);
      if (res?.data?.success) {
        Swal.fire("", "Banner add success", "success");
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
        <h3 className="font-medium text-neutral">Banner</h3>
      </div>

      <form onSubmit={handleUpdateAbout} className="p-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="form_group mt-2">
            <p className="text-neutral-content">Short Title</p>
            <input
              type="text"
              name="title"
              required
              defaultValue={data?.data[0]?.title}
            />
          </div>

          <div className="form_group mt-2">
            <p className="text-neutral-content">Main Title</p>
            <input
              type="text"
              name="sub_title"
              required
              defaultValue={data?.data[0]?.subTitle}
            />
          </div>
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
              </div>

              {data?.data[0]?.image && (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/banner/${
                    data?.data[0]?.image
                  }`}
                  alt="banner image"
                  className="w-32 h-30 mt-4"
                />
              )}
            </div>
          </div>

          <div className="md:col-span-2 border rounded">
            <p className="border-b p-3">Description</p>

            <div className="p-4">
              <textarea
                name="description"
                rows="8"
                defaultValue={data?.data[0]?.description}
              ></textarea>
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

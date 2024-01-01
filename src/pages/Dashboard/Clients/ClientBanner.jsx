import { useEffect, useState } from "react";

import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import swal from "sweetalert2";
import {
  useAddClientBannerMutation,
  useAllClientBannersQuery,
  useUpdateClientBannerMutation,
} from "../../../Redux/clientBanner/clientBannerApi";
import Spinner from "../../../components/Spinner/Spinner";

export default function ClientBanner() {
  const [images, setImages] = useState([]);

  const { data, isLoading } = useAllClientBannersQuery();
  const banner = data?.data[0];

  const [
    updateClientBanner,
    {
      isLoading: updateLoading,
      isError: updateIsError,
      error: updateError,
      isSuccess: updateSuccess,
    },
  ] = useUpdateClientBannerMutation();
  const [
    addClientBanner,
    {
      isLoading: addLoading,
      isError: addIsError,
      error: addError,
      isSuccess: addSuccess,
    },
  ] = useAddClientBannerMutation();

  const handleAddBanner = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", images[0]?.file);

    if (banner?._id) {
      const id = banner?._id;
      await updateClientBanner({id, formData});
    } else {
      await addClientBanner(formData);
    }
  };

  useEffect(() => {
    if (addIsError) {
      swal.fire(
        "",
        addError?.data?.error ? addError?.data?.error : "Something went wrong",
        "error"
      );
      return;
    }

    if (updateIsError) {
      swal.fire(
        "",
        updateError?.data?.error
          ? updateError?.data?.error
          : "Something went wrong",
        "error"
      );
      return;
    }

    if (updateSuccess) {
      setImages([]);
      swal.fire("", "Banner updated successfully", "success");
      return;
    }

    if (addSuccess) {
      setImages([]);
      swal.fire("", "Banner added successfully", "success");
      return;
    }
  }, [
    addIsError,
    addError,
    addSuccess,
    updateSuccess,
    updateIsError,
    updateError,
  ]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="bg-base-100 shadow rounded">
      <div className="p-4 border-b text-neutral font-medium flex justify-between items-center">
        <h3>Client Banner Setting</h3>
      </div>

      <form onSubmit={handleAddBanner} className="p-4">
        <div className="md:w-1/2 w-full">
          <p className="mb-1">Image</p>
          <div>
            <ImageUploading
              defaultValue={images}
              onChange={(icn) => setImages(icn)}
              dataURLKey="data_url"
            >
              {({ onImageUpload, onImageRemove, dragProps }) => (
                <div
                  className="border rounded border-dashed p-4 md:flex items-center gap-10"
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
                          className="w-32 h-20"
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
        </div>
        <div>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/clientBanner/${
              banner?.image
            }`}
            alt=""
            className="w-32"
          />
        </div>

        <div className="mt-5">
          <div className="flex gap-2">
            <button disabled={addLoading && "disabled"} className="primary_btn">
              {addLoading || updateLoading
                ? "Loading..."
                : banner
                ? "Update"
                : "Add"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

import { useState } from "react";
import Swal from "sweetalert2";
import ImageUploading from "react-images-uploading";
import { AiFillDelete } from "react-icons/ai";

export default function AddBanner({ addModal, setAddModal }) {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const handleAddTeam = (e) => {
    e.preventDefault();

    let image = images[0]?.file;
    if (!image) {
      return alert("image is required");
    }

    const formData = new FormData();
    formData.append("title", "null");
    formData.append("description", "null");
    formData.append("image", image);

    setLoading(true);

    fetch(`${import.meta.env.VITE_BACKEND_URL}/banner/addBanner`, {
      method: "POST",
      headers: {
        authorization: `bearer ${localStorage.getItem("skrp_jwt")}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add Success",
            showConfirmButton: false,
            timer: 1000,
          });
          setAddModal(false);
          setTimeout(() => {
            location.reload();
          }, 1000);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <button
        onClick={() => setAddModal(false)}
        className={`overlay ${addModal && "overlay_show"}`}
      ></button>

      <div className={`modal w-full sm:w-[500px] ${addModal && "modal_show"}`}>
        <h2 className="text-lg font-medium text-neutral p-3 border-b bg-gray-50 rounded-t">
          Add New Team Member
        </h2>

        <form onSubmit={handleAddTeam} className="p-4">
          <div>
            <p>Image *</p>
            <ImageUploading
              value={images}
              onChange={(img) => setImages(img)}
              dataURLKey="data_url"
            >
              {({ onImageUpload, onImageRemove, dragProps }) => (
                <div
                  className="border rounded border-dashed p-4 w-max flex gap-4"
                  {...dragProps}
                >
                  <div className="flex items-center gap-2">
                    <span
                      onClick={onImageUpload}
                      className="px-4 py-1.5 rounded-2xl text-base-100 bg-primary cursor-pointer text-sm"
                    >
                      Choose Image
                    </span>

                    <p className="text-neutral-content">or Drop here</p>
                  </div>

                  <div className={`${images?.length > 0 && "mt-4"} `}>
                    {images?.map((img, index) => (
                      <div key={index} className="image-item relative">
                        <img src={img["data_url"]} alt="" className="w-40" />
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

          <div className="mt-4">
            <button
              className="text-base-100 bg-primary px-4 py-2 rounded"
              disabled={loading && "disabled"}
            >
              {loading ? "Loading..." : "Add Banner"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

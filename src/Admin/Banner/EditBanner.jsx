import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import ImageUploading from "react-images-uploading";

export default function EditBanner() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  const { data: banner = {}, refetch } = useQuery({
    queryKey: ["banner"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_BACKEND_URL}/banner/${id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("business_jwt")}`,
        },
      }).then((res) => res.json()),
  });

  const handleEditUser = (e) => {
    e.preventDefault();

    const form = e.target;
    let image = images[0]?.file;
    if (!image) {
      return alert("image is required");
    }

    const formData = new FormData();
    if (images?.length > 0) {
      formData.append("image", image);
    }

    setLoading(true);

    fetch(`${import.meta.env.VITE_BACKEND_URL}/banner/updateBanner/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("business_jwt")}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          form.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Edit Success",
            showConfirmButton: false,
            timer: 1000,
          });
          refetch();
          navigate("/admin/banner/banner-lists");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="sm:w-[50%]">
      <h2 className="text-lg font-medium text-neutral p-3 border-b bg-gray-50 rounded-t">
        Edit Banner
      </h2>

      <form onSubmit={handleEditUser} className="p-4">
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

                {images?.length <= 0 && banner?.data?.image && (
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/images/banners/${
                      banner?.data?.image
                    }`}
                    alt=""
                    className="w-32 mt-4"
                  />
                )}

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
            {loading ? "Loading..." : "Edit User"}
          </button>
        </div>
      </form>
    </div>
  );
}

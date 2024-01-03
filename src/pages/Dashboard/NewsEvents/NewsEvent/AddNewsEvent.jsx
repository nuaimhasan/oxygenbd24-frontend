import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import Swal from "sweetalert2";
import { useGetNewsCategoriesQuery } from "../../../../Redux/newsCategory/newsCategoryApi";
import { useCreateNewsEventMutation } from "../../../../Redux/newsEvents/newsEventsApi";
import { useNavigate } from "react-router-dom";

const AddNewsEvent = () => {
  const editor = useRef(null);
  const navigate = useNavigate();

  const [createNewsEvent, { isLoading: createLoading }] =
    useCreateNewsEventMutation();
  const { data } = useGetNewsCategoriesQuery();

  const [image, setImage] = useState([]);
  const [description, setDescription] = useState("");

  const addNewsHandler = async (e) => {
    e.preventDefault();

    const img = image[0]?.file;
    const category = e.target.category.value;
    const title = e.target.title.value;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);

    if (img) formData.append("image", img);

    try {
      const res = await createNewsEvent(formData).unwrap();
      if (res?.success) {
        setImage([]);
        setDescription("");
        e.target.reset();
        Swal.fire("", "News event add success", "success");
        navigate("/admin/news-events/all-news-events");
      }
    } catch (error) {
      Swal.fire("", error?.data?.error, "error");
    }
  };

  return (
    <section className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-medium text-neutral">Add News & Events</h3>
      </div>

      <form className="p-4" onSubmit={addNewsHandler}>
        <div className="text-neutral-content grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
          <div className="flex flex-col gap-3">
            <div>
              <p className="mb-1">Title</p>
              <input type="text" name="title" />
            </div>
            <div>
              <p className="mb-1">Category</p>
              <select name="category" id="category">
                {data?.data?.map((category) => (
                  <option key={category?._id} value={category?.name}>
                    {category?.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div>
                <p className="mb-1">Image</p>
                <div>
                  <ImageUploading
                    defaultValue={image}
                    onChange={(icn) => setImage(icn)}
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

                        <div className={`${image?.length > 0 && "mt-4"} `}>
                          {image?.map((img, index) => (
                            <div key={index} className="image-item relative">
                              <img
                                src={img["data_url"]}
                                alt=""
                                className="w-20 h-20"
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
            </div>
          </div>

          <div className="md:col-span-2 border rounded">
            <p className="border-b p-3">Description</p>

            <div className="p-4 about_details">
              <JoditEditor
                ref={editor}
                value={description}
                onBlur={(text) => setDescription(text)}
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            disabled={createLoading && "disabled"}
            className="primary_btn"
          >
            {createLoading ? "Loading.." : "Add"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddNewsEvent;

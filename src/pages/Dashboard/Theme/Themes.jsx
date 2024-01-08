import { useEffect } from "react";
import swal from "sweetalert2";
import {
  useAddThemeMutation,
  useGetThemesQuery,
  useUpdateThemeMutation,
} from "../../../Redux/theme/themeApi";

export default function Themes() {
  const { data } = useGetThemesQuery();
  const theme = data?.data[0];
  const id = theme?._id;

  const [
    addTheme,
    {
      isLoading: addIsLoading,
      isError: addIsError,
      error: addError,
      isSuccess: addIsSuccess,
    },
  ] = useAddThemeMutation();

  const [
    updateTheme,
    {
      isLoading: updateIsLoading,
      isError: updateIsError,
      error: updateError,
      isSuccess: updateIsSuccess,
    },
  ] = useUpdateThemeMutation();

  useEffect(() => {
    if (addIsError) {
      swal.fire(
        "",
        addError?.data?.error ? addError?.data?.error : "Something went wrong",
        "error"
      );
      return;
    }
    if (addIsSuccess && !id) {
      swal.fire("", "Theme Added Successfully", "success");

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
    if (updateIsSuccess && id) {
      swal.fire("", "Theme Updated Successfully", "success");

      return;
    }
  }, [
    addIsError,
    addIsSuccess,
    updateIsError,
    updateIsSuccess,
    addError,
    updateError,
    id,
  ]);

  const hanldeAddUpdate = async (e) => {
    e.preventDefault();

    const primary = e.target.primary.value;
    const secondary = e.target.secondary.value;
    const accent = e.target.accent.value;
    const neutral = e.target.neutral.value;
    const neutralContent = e.target.neutralContent.value;

    const data = {
      primary,
      secondary,
      accent,
      neutral,
      neutralContent,
    };

    if (id) {
      await updateTheme({ id, data });
    } else {
      await addTheme(data);
    }
  };

  return (
    <section className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-medium text-neutral">Theme</h3>
      </div>

      <form className="p-4" onSubmit={hanldeAddUpdate}>
        <div className="text-neutral-content grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
          <div>
            <p className="mb-1">Primary Color</p>
            <input
              type="color"
              name="primary"
              required
              defaultValue={theme?.primary}
            />
          </div>
          <div>
            <p className="mb-1">Secondary Color</p>
            <input
              type="color"
              name="secondary"
              required
              defaultValue={theme?.secondary}
            />
          </div>
          <div>
            <p className="mb-1">Accent Color</p>
            <input
              type="color"
              name="accent"
              required
              defaultValue={theme?.accent}
            />
          </div>

          <div>
            <p className="mb-1">Neutral Color</p>
            <input
              type="color"
              name="neutral"
              required
              defaultValue={theme?.accent}
            />
          </div>

          <div>
            <p className="mb-1">Neutral Content Color</p>
            <input
              type="color"
              name="neutralContent"
              required
              defaultValue={theme?.accent}
            />
          </div>
        </div>

        <div className="mt-5">
          <div className="flex gap-2">
            <button
              disabled={addIsLoading || (updateIsLoading && "disabled")}
              className="primary_btn"
            >
              {addIsLoading || updateIsLoading
                ? "Loading..."
                : theme?._id
                ? "Update"
                : "Add"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

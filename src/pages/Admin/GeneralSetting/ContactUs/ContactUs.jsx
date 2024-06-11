import Swal from "sweetalert2";
import {
  useAddContactMutation,
  useGetContactsQuery,
  useUpdateContactMutation,
} from "../../../../Redux/contact/contactApi";

export default function ContactUs() {
  const { data } = useGetContactsQuery();
  const contactUs = data?.data[0];
  const id = contactUs?._id;

  const [addContact, { isLoading: addIsLoading }] = useAddContactMutation();

  const [updateContact, { isLoading: updateIsLoading }] =
    useUpdateContactMutation();

  const hanldeAddUpdate = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const facebookLink = e.target.facebookLink.value;
    const linkedinLink = e.target.linkedinLink.value;

    const contactInfo = {
      email,
      phone,
      address,
      facebookLink,
      linkedinLink,
    };

    if (id) {
      const res = await updateContact({ id, contactInfo });
      if (res?.data?.success) {
        Swal.fire("", "Contact info update success", "success");
      } else {
        Swal.fire("", "something went wrong", "error");
      }
    } else {
      const res = await addContact(contactInfo);
      if (res?.data?.success) {
        Swal.fire("", "Contact info add success", "success");
      } else {
        Swal.fire("", "something went wrong", "error");
      }
    }
  };

  return (
    <section className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-medium text-neutral">Contact Us</h3>
      </div>

      <form className="p-4" onSubmit={hanldeAddUpdate}>
        <div className="text-neutral-content grid sm:grid-cols-2 gap-4 items-start">
          <div>
            <p className="mb-1">Email</p>
            <input
              type="email"
              name="email"
              required
              defaultValue={contactUs?.email}
            />
          </div>
          <div>
            <p className="mb-1">Phone</p>
            <input
              type="tel"
              name="phone"
              required
              defaultValue={contactUs?.phone}
            />
          </div>

          <div>
            <p className="mb-1">Address</p>
            <input
              type="text"
              name="address"
              required
              defaultValue={contactUs?.address}
            />
          </div>

          <div>
            <p className="mb-1">Facebook Link</p>
            <input
              type="text"
              name="facebookLink"
              defaultValue={contactUs?.facebookLink}
            />
          </div>

          <div>
            <p className="mb-1">LinkedIn Link</p>
            <input
              type="text"
              name="linkedinLink"
              defaultValue={contactUs?.linkedinLink}
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
                : contactUs?._id
                ? "Update"
                : "Add"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

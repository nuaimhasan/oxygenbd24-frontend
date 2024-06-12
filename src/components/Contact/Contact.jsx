import { MdCall, MdEmail } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import { useGetContactsQuery } from "../../Redux/contact/contactApi";

export default function Contact() {
  const { data } = useGetContactsQuery();
  const contact = data?.data[0];

  return (
    <section className="py-10" id="contact">
      <div className="container">
        <h2 className="text-2xl font-medium">Get In Touch</h2>

        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-full bg-base-100 text-black/80 shadow">
              <MdCall className="md:text-2xl " />
            </div>
            <div>
              <h2 className="sm:text-xl font-medium">Phone</h2>
              <p className="-mt-1 text-sm md:text-base">{contact?.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-full bg-base-100 text-black/80 shadow">
              <MdEmail className="md:text-2xl" />
            </div>
            <div>
              <h2 className="sm:text-xl font-medium">Email</h2>
              <p className="-mt-1 text-sm md:text-base">{contact?.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-full bg-base-100 text-black/80 shadow">
              <FaMap className="md:text-xl" />
            </div>
            <div>
              <h2 className="sm:text-xl font-medium">Location</h2>
              <p className="-mt-1 text-sm md:text-base">{contact?.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

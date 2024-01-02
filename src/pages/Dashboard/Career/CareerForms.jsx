import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import {
  useDeleteFormMutation,
  useGetCareerFormsQuery,
} from "../../../Redux/careerForms/careerFormApi";
import Spinner from "../../../components/Spinner/Spinner";

const CareerForms = () => {
  const { data, isLoading, isError, isSuccess } = useGetCareerFormsQuery();
  const [deleteClient] = useDeleteFormMutation();

  if (isLoading) return <Spinner />;

  const careerForms = data?.data;

  const deleteFormHandler = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this form?");
    if (isConfirm) {
      try {
        const res = await deleteClient(id).unwrap();
        if (res?.success) {
          Swal.fire({
            title: "",
            text: "From Deleted Successfully",
            icon: "success",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "",
          text: "Something went wrong",
          icon: "error",
        });
      }
    }
  };

  let content = null;

  if (isError) {
    content = (
      <p className="text-red-500 mt-5">Something went wrong to get data!</p>
    );
  }

  if (!isError && isSuccess) {
    content = (
      <tbody>
        {careerForms?.map((form) => (
          <tr key={form?._id}>
            <td>{form?.name}</td>
            <td>{form?.email}</td>
            <td>{form?.phone}</td>
            <td>{form?.subject}</td>
            <td>
              <button onClick={() => deleteFormHandler(form?._id)}>
                <AiOutlineDelete className="text-lg hover:text-red-500" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <div className="">
          <h1 className="font-medium text-neutral">Forms</h1>
        </div>
      </div>

      <div className="relative overflow-x-auto mt-2">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subject</th>
              <th>Action</th>
            </tr>
          </thead>
          {content}
        </table>
      </div>
    </section>
  );
};

export default CareerForms;

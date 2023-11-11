import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useQuery } from "react-query";
import AddAlliance from "./AddAlliance";

export default function AlliancesLists() {
  const [addModal, setAddModal] = useState(false);

  const { data: alliances = [], refetch } = useQuery({
    queryKey: ["alliances"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_BACKEND_URL}/alliance/allAlliances`).then(
        (res) => res.json()
      ),
  });

  const handleDelete = (id) => {
    const confirm = window.confirm(`Are you sure delete this ${id}`);
    if (confirm) {
      fetch(
        `${import.meta.env.VITE_BACKEND_URL}/alliance/deleteAlliance/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem(
              "rahimafrox-solar-jwt"
            )}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            refetch();
          }
        });
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-2">
        <button
          onClick={() => setAddModal(true)}
          className="px-5 py-2 rounded bg-primary text-base-100 text-sm"
        >
          Add New Team
        </button>

        <AddAlliance setAddModal={setAddModal} addModal={addModal} />
      </div>
      <div className="relative overflow-x-auto shadow-lg">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alliances?.data?.map((alliance) => (
              <tr key={alliance.uuid}>
                <td>
                  <img
                    src={`${
                      import.meta.env.VITE_BACKEND_URL
                    }/images/alliances/${alliance.image}`}
                    alt=""
                    className="h-10"
                  />
                </td>
                <td>
                  <div className="flex items-center gap-2 text-xl">
                    <button
                      onClick={() => handleDelete(alliance?.uuid)}
                      className="hover:text-red-500 duration-200"
                    >
                      <MdOutlineDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

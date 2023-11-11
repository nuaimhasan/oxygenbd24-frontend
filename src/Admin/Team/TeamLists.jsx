import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import AddTeamModal from "./AddTeamModal";

export default function TeamLists() {
  const [addModal, setAddModal] = useState(false);

  const { data: teams = [], refetch } = useQuery({
    queryKey: ["teams"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_BACKEND_URL}/team/allTeamMembers`).then(
        (res) => res.json()
      ),
  });

  const handleDelete = (id) => {
    const confirm = window.confirm(`Are you sure delete this ${id}`);
    if (confirm) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/team/deleteTeamMember/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem(
            "rahimafrox-solar-jwt"
          )}`,
        },
      })
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

        <AddTeamModal setAddModal={setAddModal} addModal={addModal} />
      </div>
      <div className="relative overflow-x-auto shadow-lg">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teams?.data?.map((team) => (
              <tr key={team.uuid}>
                <td>
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/images/teams/${
                      team.image
                    }`}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td>{team?.name}</td>
                <td>{team?.designation}</td>
                <td>
                  <div className="flex items-center gap-2 text-xl">
                    <Link
                      to={`/admin/team/edit-team/${team?.uuid}`}
                      className="hover:text-primary duration-200"
                    >
                      <AiOutlineEdit />
                    </Link>
                    <button
                      onClick={() => handleDelete(team?.uuid)}
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

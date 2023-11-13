import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import AddUserModal from "./AddUserModal";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

export default function UserLists() {
  const [addModal, setAddModal] = useState(false);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_BACKEND_URL}/user/allUsers`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("skrp_jwt")}`,
        },
      }).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    const confirm = window.confirm(`Are you sure delete this ${id}`);
    if (confirm) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/user/delete/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("skrp_jwt")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
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
          Add New Admin
        </button>

        <AddUserModal setAddModal={setAddModal} addModal={addModal} />
      </div>
      <div className="relative overflow-x-auto shadow-lg">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>name</th>
              <th>UserName</th>
              <th>email</th>
              <th>phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.data?.map((user) => (
              <tr key={user.uuid}>
                <td>{user?.name}</td>
                <td>{user?.userName}</td>
                <td>{user?.email}</td>
                <td>{user?.phone}</td>
                <td>
                  <div className="flex items-center gap-2 text-xl">
                    <Link
                      to={`/admin/user/edit-user/${user?.uuid}`}
                      className="hover:text-primary duration-200"
                    >
                      <AiOutlineEdit />
                    </Link>
                    <button
                      onClick={() => handleDelete(user?.uuid)}
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

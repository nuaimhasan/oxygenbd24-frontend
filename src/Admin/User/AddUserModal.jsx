import { useState } from "react";
import Swal from "sweetalert2";

export default function AddUserModal({ addModal, setAddModal }) {
  const [loading, setLoading] = useState(false);
  const handleAddUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const userName = form.userName.value;
    const password = form.password.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const info = {
      name,
      userName,
      password,
      email,
      phone,
    };

    setLoading(true);

    fetch(`${import.meta.env.VITE_BACKEND_URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("rahimafrox-solar-jwt")}`,
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          form.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add Success",
            showConfirmButton: false,
            timer: 1000,
          });
          setTimeout(() => {
            location.reload();
          }, 1000);
        }
      });

    setLoading(false);
  };
  return (
    <>
      <button
        onClick={() => setAddModal(false)}
        className={`overlay ${addModal && "overlay_show"}`}
      ></button>

      <div className={`modal w-full sm:w-[500px] ${addModal && "modal_show"}`}>
        <h2 className="text-lg font-medium text-neutral p-3 border-b bg-gray-50 rounded-t">
          Add New Admin
        </h2>

        <form onSubmit={handleAddUser} className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[15px]">Full Name *</p>
              <input type="text" name="name" required />
            </div>

            <div>
              <p className="text-[15px]">UserName *</p>
              <input type="text" name="userName" required />
            </div>
          </div>

          <div className="mt-4">
            <p className="text-[15px]">Password *</p>
            <input type="password" name="password" required />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-[15px]">Email</p>
              <input type="text" name="email" />
            </div>

            <div>
              <p className="text-[15px]">Phone</p>
              <input type="text" name="phone" />
            </div>
          </div>

          <div className="mt-4">
            <button
              className="text-base-100 bg-primary px-4 py-2 rounded"
              disabled={loading && "disabled"}
            >
              {loading ? "Loading..." : " Add User"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditUser() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { data: user = {}, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch(`http://rahimafroz-server.nuaimhasan.xyz/user/${id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem(
            "rahimafrox-solar-jwt"
          )}`,
        },
      }).then((res) => res.json()),
  });

  const handleEditUser = (e) => {
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

    fetch(`http://rahimafroz-server.nuaimhasan.xyz/user/update/${id}`, {
      method: "PUT",
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
            title: "Edit Success",
            showConfirmButton: false,
            timer: 1000,
          });
          refetch();
          navigate("/admin/user/user-lists");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="">
      <h2 className="text-lg font-medium text-neutral p-3 border-b bg-gray-50 rounded-t">
        Edit Admin Info
      </h2>

      <form onSubmit={handleEditUser} className="p-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-[15px]">Full Name *</p>
            <input
              type="text"
              placeholder="Type name"
              name="name"
              defaultValue={user?.data?.name}
              required
            />
          </div>

          <div>
            <p className="text-[15px]">UserName *</p>
            <input
              type="text"
              name="userName"
              placeholder="Type unique userName"
              defaultValue={user?.data?.userName}
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <p className="text-[15px]">Password *</p>
          <input
            type="password"
            placeholder="Type Password"
            name="password"
            defaultValue={user?.data?.password}
            required
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-[15px]">Email</p>
            <input
              type="text"
              placeholder="Type Email"
              name="email"
              defaultValue={user?.data?.email}
            />
          </div>

          <div>
            <p className="text-[15px]">Phone</p>
            <input
              type="text"
              name="phone"
              placeholder="Type Phone Number"
              defaultValue={user?.data?.phone}
            />
          </div>
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

import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLoginMutation } from "../../Redux/user/userApi";

export default function Login() {
  const { loggedUser } = useSelector((store) => store.user);
  const [login, { isLoading, isError, error }] = useLoginMutation();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/admin/dashboard";
  if (loggedUser?.success) {
    navigate(from, { replace: true });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const password = form.password.value;

    const info = {
      userName,
      password,
    };

    login(info);
  };

  return (
    <div className="flex justify-between items-center h-screen w-full">
      <div className="w-full sm:w-[430px] mx-auto shadow rounded p-4">
        <h2 className="text-2xl font-semibold text-center text-neutral mb-6">
          Admin Login
        </h2>
        <form onSubmit={handleLogin} className="p-4">
          <div className="mb-4">
            <p className="text-[15px]">username *</p>
            <input
              type="text"
              placeholder="Enter username"
              name="userName"
              required
            />
          </div>
          <div>
            <p className="text-[15px]">Password *</p>
            <input
              type="password"
              placeholder="******"
              name="password"
              required
            />
          </div>
          {isError && <p className="text-sm text-red-500">{error}</p>}

          <div className="mt-4">
            <button
              className="w-full text-base-100 bg-primary px-4 py-2 rounded"
              disabled={isLoading && "disabled"}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form className="w-[90%] sm:w-[350px]">
        <div>
          <h2 className="text-2xl font-medium text-center">Admin Login</h2>
        </div>
        <br />
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Username
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="eManager"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          className="text-base-100 bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

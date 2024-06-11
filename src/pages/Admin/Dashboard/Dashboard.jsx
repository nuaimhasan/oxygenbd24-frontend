import { Link } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { MdHomeRepairService } from "react-icons/md";
import { LuImageMinus } from "react-icons/lu";
// import Spinner from "../../../components/Spinner/Spinner";

export default function Dashboard() {
  return (
    <section>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link
          to="/admin/administrator/all-administrator"
          className="shadow rounded p-4 bg-base-100"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg">Total Admin</h2>
              <p>1</p>
            </div>
            <div>
              <RiAdminFill className="text-2xl text-secondary" />
            </div>
          </div>
        </Link>

        <Link to="/admin/services" className="shadow rounded p-4 bg-base-100">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg">Total Services</h2>
              <p>0</p>
            </div>
            <div>
              <MdHomeRepairService className="text-2xl text-primary" />
            </div>
          </div>
        </Link>

        <Link to="/admin/projects" className="shadow rounded p-4 bg-base-100">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg">Total Projects</h2>
              <p>0</p>
            </div>
            <div>
              <LuImageMinus className="text-2xl text-primary" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

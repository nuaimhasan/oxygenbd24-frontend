import { Link, useParams } from "react-router-dom";
import { FaPrint } from "react-icons/fa6";
import RentOrder from "../../../components/AdminComponents/RentOrder/RentOrder";

export default function RentOrderDetails() {
  const { id } = useParams();
  return (
    <section className="py-5">
      <div className="container">
        <div className="md:w-[700px] mx-auto border p-6 text-neutral">
          <div className="flex justify-end">
            <Link to={`/admin/rent/print/${id}`} target="_blank">
              <FaPrint />
            </Link>
          </div>
          <br />

          <RentOrder />
        </div>
      </div>
    </section>
  );
}

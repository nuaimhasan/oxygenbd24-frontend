import { Link } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { MdHomeRepairService } from "react-icons/md";
import { LuImageMinus } from "react-icons/lu";
import { useGetAllProductsQuery } from "../../../Redux/product/productApi";
import { useGetAdminsQuery } from "../../../Redux/user/userApi";
import { useGetAllOrdersQuery } from "../../../Redux/order/orderApi";
import { useGetAllRentOrdersQuery } from "../../../Redux/rentOrder/rentOrderApi";
import { useGetAllRentsQuery } from "../../../Redux/rent/rentApi";

export default function Dashboard() {
  const { data: products } = useGetAllProductsQuery();
  const { data: rent } = useGetAllRentsQuery();
  const { data: admins } = useGetAdminsQuery();
  const { data: orders } = useGetAllOrdersQuery();
  const { data: rentOrders } = useGetAllRentOrdersQuery();

  return (
    <section>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link
          to="/admin/administrator"
          className="shadow rounded p-4 bg-base-100"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg">Total Admin</h2>
              <p>{admins?.data?.length}</p>
            </div>
            <div>
              <RiAdminFill className="text-2xl text-secondary" />
            </div>
          </div>
        </Link>

        <Link to="/admin/products" className="shadow rounded p-4 bg-base-100">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg">Total Products</h2>
              <p>{products?.data?.length}</p>
            </div>
            <div>
              <MdHomeRepairService className="text-2xl text-primary" />
            </div>
          </div>
        </Link>

        <Link to="/admin/rental/all" className="shadow rounded p-4 bg-base-100">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg">Total rent</h2>
              <p>{rent?.data?.length}</p>
            </div>
            <div>
              <LuImageMinus className="text-2xl text-primary" />
            </div>
          </div>
        </Link>

        <Link to="/admin/orders" className="shadow rounded p-4 bg-base-100">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg">Total Order</h2>
              <p>{orders?.data?.length}</p>
            </div>
            <div>
              <LuImageMinus className="text-2xl text-primary" />
            </div>
          </div>
        </Link>

        <Link
          to="/admin/rent-orders"
          className="shadow rounded p-4 bg-base-100"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg">Total Rent orders</h2>
              <p>{rentOrders?.data?.length}</p>
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

import { useParams } from "react-router-dom";
import { useGetOrderByIdQuery } from "../../../Redux/order/orderApi";
import Spinner from "../../Spinner/Spinner";
import { useGetContactsQuery } from "../../../Redux/contact/contactApi";

export default function Order() {
  const { id } = useParams();
  const { data, isLoading } = useGetOrderByIdQuery(id);
  const { data: contactData } = useGetContactsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  const order = data?.data;
  const { createdAt, product, shipping, invoiceNumber } = order;

  const date = createdAt?.split("T")[0];

  return (
    <div>
      <div className="flex justify-between items-start border-b border-neutral-content pb-3">
        <div className="text-neutral-content text-sm">
          <img src="/images/logo/logo.png" alt="" className="w-36" />
          <p>{contactData?.data[0]?.phone}</p>
          <p>{contactData?.data[0]?.address}</p>
        </div>

        <div>
          <p className="text-sm text-neutral-content">{date}</p>
          <h2 className="text-lg font-semibold">INV: {invoiceNumber}</h2>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-[15px]">
          <h2>{shipping?.name}</h2>
          <p>{shipping?.phone}</p>
          <p>{shipping?.email}</p>
          <p>{shipping?.address}</p>
          <p>{shipping?.note}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-neutral-content">
        <div className="grid grid-cols-5">
          <div className="col-span-3">
            <p className="text-[15px]">{product?.title}</p>
          </div>

          <p className="text-end">{product?.price}৳</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-neutral-content">
        <div className="grid grid-cols-5">
          <div className="col-span-3">
            <p className="text-[15px]">Total</p>
          </div>

          <p className="text-end">{product?.price}৳</p>
        </div>
      </div>
      <div className="mt-40">
        <p className="text-neutral-content text-xs text-center">
          Thank you for your order
        </p>
      </div>
    </div>
  );
}

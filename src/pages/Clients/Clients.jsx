import { useAllClientBannersQuery } from "../../Redux/clientBanner/clientBannerApi";
import { useAllClientsQuery } from "../../Redux/clients/clientsApi";
import Spinner from "../../components/Spinner/Spinner";

export default function Clients() {
  const { data: clientsData, isLoading } = useAllClientsQuery();
  const { data: clientBanner, isLoading: bannerLoading } =
    useAllClientBannersQuery();

  if (isLoading || bannerLoading) return <Spinner />;

  return (
    <section>
      <div>
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/clientBanner/${
            clientBanner?.data[0]?.image
          }`}
          alt=""
          className="w-full md:h-80"
        />
      </div>

      <div className="container py-10">
        <div className="mt-10 grid grid-cols-3 md:grid-cols-5 gap-10">
          {clientsData?.data?.map((client) => (
            <div key={client._id} className="flex justify-center items-center">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/clients/${
                  client.image
                }`}
                alt=""
                className="h-20 w-[90%] mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

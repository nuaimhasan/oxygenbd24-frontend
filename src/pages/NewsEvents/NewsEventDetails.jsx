import { useParams } from "react-router-dom";
import { useGetNewsEventBySlugQuery } from "../../Redux/newsEvents/newsEventsApi";
import Spinner from "../../components/Spinner/Spinner";
import perser from "html-react-parser";

const NewsEventDetails = () => {
  window.scroll(0, 0);
  const { slug } = useParams();

  const { data, isLoading } = useGetNewsEventBySlugQuery(slug);
  // console.log(data?.data);
  if (isLoading) return <Spinner />;

  const perserDescription = perser(data?.data?.description);

  return (
    <section className="py-6">
      <div className="container">
        <div>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/newsEvent/${
              data?.data?.image
            }`}
            alt=""
            className="w-full md:h-80"
          />
        </div>
        <div className="mt-10">
          <h1 className="text-xl font-medium mb-5">{data?.data?.title}</h1>
          <p>{perserDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default NewsEventDetails;

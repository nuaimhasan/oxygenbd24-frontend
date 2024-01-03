import { useGetNewsEventsQuery } from "../../Redux/newsEvents/newsEventsApi";
import Spinner from "../Spinner/Spinner";
import NewsEventCard from "./NewsEventCard";

const NewsEvent = () => {
  const { data, isLoading } = useGetNewsEventsQuery({});
  if (isLoading) return <Spinner />;
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl text-center w-max mx-auto border-b-2 border-primary text-priamry pb-2 font-semibold text-neutral">
          News & Events
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mt-10">
          {data?.data?.slice(0, 4).map((news) => (
            <NewsEventCard news={news} key={news?._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvent;

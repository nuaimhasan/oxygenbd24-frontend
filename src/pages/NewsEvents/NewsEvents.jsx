import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import { useGetNewsCategoriesQuery } from "../../Redux/newsCategory/newsCategoryApi";
import { useGetNewsEventsQuery } from "../../Redux/newsEvents/newsEventsApi";
import Spinner from "../../components/Spinner/Spinner";
import "./NewsEvents.css";
import NewsEventCard from "../../components/NewsEvent/NewsEventCard";

export default function NewsEvents() {
  window.scroll(0, 0);
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        (!e.target.closest(".news_sidebar_btn") &&
          !e.target.closest(".news_sidebar")) ||
        e.target.closest(".news_sidebar ul li a")
      ) {
        setSidebar(false);
      }
    });
  }, []);

  const params = useParams();
  let categoryParams = params?.category ? params?.category : "";
  console.log(categoryParams);

  const query = {};
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(8);
  const [category, setCategory] = useState("");

  query["page"] = page;
  query["limit"] = limit;
  query["category"] = category;

  useEffect(() => {
    setCategory(categoryParams);
  }, [categoryParams]);

  // console.log(categoryParams, category);

  const { data, isLoading, isError, isSuccess } = useGetNewsEventsQuery({
    ...query,
  });
  const { data: newsCategory } = useGetNewsCategoriesQuery();
  console.log(newsCategory?.data);
  if (isLoading) return <Spinner />;

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1) return;
    if (data?.meta?.total && pageNumber > data?.meta.total / limit) return;

    setPage(pageNumber);
  };

  let content = null;

  if (isError) content = <div>Something went wrong</div>;

  if (!isLoading && isSuccess && data?.data?.length === 0)
    content = <div>In this category no news found</div>;

  if (!isLoading && isSuccess && data?.data?.length > 0) {
    content = (
      <div className="flex flex-col gap-8">
        {data?.data?.map((news) => (
          <NewsEventCard news={news} key={news?._id} />
        ))}
      </div>
    );
  }

  return (
    <section className="py-6">
      <div className="container">
        <div className="lg:mx-28 flex items-center gap-2 text-neutral-content text-sm border-b pb-1">
          <button
            onClick={() => setSidebar(true)}
            className="md:hidden news_sidebar_btn"
          >
            <HiOutlineMenuAlt2 className="text-xl" />
          </button>
          <p>Home</p>
          <p>-</p>
          <Link to="/news-events">
            <p className="text-blue-500">News & Events</p>
          </Link>
        </div>

        <div className="md:flex gap-6 lg:mx-28 mt-6">
          <div className={`news_sidebar ${sidebar && "news_sidebar_show"}`}>
            <div className="py-2">
              <p className="text-neutral font-medium">Categories</p>
              <ul className="mt-1.5 pl-1 text-neutral-content flex flex-col gap-1">
                {newsCategory?.data?.map((category) => (
                  <li key={category?._id}>
                    <Link
                      to={`/news-events/${category?.slug}`}
                      className="hover:text-secondary duration-200"
                    >
                      {category?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="news_content">
            {content}

            {data?.data?.length > 0 && (
              <div className="flex items-center justify-center mt-16">
                <div className="flex items-center space-x-1 border border-gray-300 rounded overflow-hidden text-sm">
                  <button
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                  >
                    <FaArrowLeft />
                  </button>
                  <button className="px-4 py-2 bg-gray-700 text-gray-100 font-medium focus:outline-none">
                    Page {page}
                  </button>
                  <button
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                    onClick={() => handlePageChange(page + 1)}
                    disabled={
                      data?.meta?.total && page === data?.meta.total / limit
                    }
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


import { Link } from 'react-router-dom';

const NewsEventCard = ({news}) => {
  return (
    <div className="news_card" key={news?._id}>
      <div>
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/newsEvent/${news?.image}`}
          alt=""
          className="w-full h-60 rounded"
        />
      </div>
      <h2 className="mt-2">
        <Link
          to={`/news-events/${news?.slug}`}
          className="hover:text-secondary duration-200"
        >
          {news?.title}
        </Link>
      </h2>
    </div>
  );
}

export default NewsEventCard
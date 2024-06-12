import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import useAuthCheck from "./Hook/useAuthCheck";
import { Helmet } from "react-helmet-async";
import { useGetSEOQuery } from "./Redux/seo/seoApi";
import { useGetFaviconQuery } from "./Redux/favicon/faviconApi";

export default function App() {
  const authChecked = useAuthCheck();

  const { data } = useGetSEOQuery();
  const seo = data?.data[0];

  const { data: faviconData } = useGetFaviconQuery();
  const favicon = faviconData?.data[0];

  if (!authChecked) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Helmet>
        <title>{seo?.title}</title>
        <meta name="title" content={seo?.title} />
        <link
          rel="icon"
          type="image/svg+xml"
          href={`${import.meta.env.VITE_BACKEND_URL}/logo/${favicon?.favicon}`}
        />
        <meta name="description" content={seo?.description} />
        <meta name="keywords" content={seo?.keywords} />
        <meta name="author" content={seo?.author} />
        <meta name="sitemap_link" content={seo?.sitemap_link} />
      </Helmet>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

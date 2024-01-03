import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../Redux/product/productApi";
import ProductCard from "../../components/Product/ProductCard";
import Spinner from "../../components/Spinner/Spinner";

export default function Products() {
  const params = useParams();
  let categoryParams = params?.category ? params?.category : "";
  let subCategoryParams = params?.subCategory ? params?.subCategory : "";
  let subSubCategoryParams = params?.subSubCategory
    ? params?.subSubCategory
    : "";
  console.log(categoryParams, subCategoryParams, subSubCategoryParams);

  const query = {};
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(8);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subSubCategory, setSubSubCategory] = useState("");

  query["page"] = page;
  query["limit"] = limit;
  query["category"] = category;
  query["subCategory"] = subCategory;
  query["subSubCategory"] = subSubCategory;

  useEffect(() => {
    setCategory(categoryParams);
    setSubCategory(subCategoryParams);
    setSubSubCategory(subSubCategoryParams);
  }, [categoryParams, subCategoryParams, subSubCategoryParams]);

  const { data, isLoading, isError, isSuccess } = useGetAllProductsQuery({
    ...query,
  });

  if (isLoading) return <Spinner />;

  let content = null;

  if (isError) content = <div>Something went wrong please reload the page</div>;

  if (!isLoading && isSuccess && data?.data?.length === 0)
    content = <div>In this category no products found</div>;

  if (!isLoading && isSuccess && data?.data?.length > 0) {
    content = (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.data?.map((product) => (
          <ProductCard product={product} key={product?._id} />
        ))}
      </div>
    );
  }

  return (
    <section>
      <div className="relative">
        <img
          src="/images/solar-solutions/banner.png"
          alt=""
          className="w-full h-28 md:h-80"
        />
        <div className="container">
          <h2 className="absolute top-1/2 -translate-y-1/2 text-3xl text-base-100 font-semibold">
            {params?.category ? params?.category : "Solar Solutions"}
          </h2>
        </div>
      </div>

      <div className="container py-10">{content}</div>
    </section>
  );
}

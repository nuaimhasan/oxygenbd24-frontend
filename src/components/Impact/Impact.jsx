import percer from "html-react-parser";
import { useGetImpactSectionsQuery } from "../../Redux/impactSection/impactSectionApi";
import { useGetImpactsQuery } from "../../Redux/impacts/impactsApi";
import Spinner from "../Spinner/Spinner";

export default function Impact() {
  const { data: impactSectionData, isLoading } = useGetImpactSectionsQuery();
  const impactSection = impactSectionData?.data[0];

  const { data } = useGetImpactsQuery();

  if (isLoading) return <Spinner />;

  const percerDescription = percer(impactSection?.description);
  return (
    <section className="bg-primary py-20 text-base-100">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-semibold border-b-2 w-max border-base-100 pb-2">
              {impactSection?.title}
            </h2>
            <p className="mt-5 text-[15px] font-light">{percerDescription}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
            {data?.data?.map((impact) => (
              <div
                className="bg-base-100 p-4 rounded text-primary "
                key={impact._id}
              >
                <p className="text-4xl font-light mb-4 border-b w-max border-primary">
                  {impact?.title}
                </p>
                <p>{impact?.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

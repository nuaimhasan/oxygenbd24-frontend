import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import AddBanner from "./AddBanner";

export default function BannerLists() {
  const [addModal, setAddModal] = useState(false);

  const { data: banners = [], refetch } = useQuery({
    queryKey: ["banners"],
    queryFn: () =>
      fetch(`http://rahimafroz-server.nuaimhasan.xyz/banner/allBanners`).then(
        (res) => res.json()
      ),
  });

  const handleDelete = (id) => {
    const confirm = window.confirm(`Are you sure delete this ${id}`);
    if (confirm) {
      fetch(
        `http://rahimafroz-server.nuaimhasan.xyz/banner/deleteBanner/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem(
              "rahimafrox-solar-jwt"
            )}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            refetch();
          }
        });
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-2">
        <button
          onClick={() => setAddModal(true)}
          className="px-5 py-2 rounded bg-primary text-base-100 text-sm"
        >
          Add New Team
        </button>

        <AddBanner setAddModal={setAddModal} addModal={addModal} />
      </div>
      <div className="relative overflow-x-auto shadow-lg">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {banners?.data?.map((banner) => (
              <tr key={banner.uuid}>
                <td>
                  <img
                    src={`http://rahimafroz-server.nuaimhasan.xyz/images/banners/${banner.image}`}
                    alt=""
                    className="w-14 h-10"
                  />
                </td>
                <td>{banner?.title}</td>
                <td>
                  {banner?.description?.length > 40
                    ? banner?.description.slice(0, 40) + "..."
                    : banner?.description}
                </td>
                <td>
                  <div className="flex items-center gap-2 text-xl">
                    <Link
                      to={`/admin/banner/edit-banner/${banner?.uuid}`}
                      className="hover:text-primary duration-200"
                    >
                      <AiOutlineEdit />
                    </Link>
                    <button
                      onClick={() => handleDelete(banner?.uuid)}
                      className="hover:text-red-500 duration-200"
                    >
                      <MdOutlineDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

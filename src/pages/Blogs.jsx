import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlog, updatePublish, deleteBlog } from "../redux/slices/blogSlice";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blogs, isLoading, isSuccess } = useSelector((state) => state.blog);
  console.log(blogs);

  const formatDate = (date) => {
    const newDate = new Date(date);
    const formatter = new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    return formatter.format(newDate);
  };

  useEffect(() => {
    dispatch(getBlog(1));
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(getBlog(1));
    }
  }, [isSuccess, dispatch]);  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Blogs</h1>
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <caption className="py-2 text-start text-sm text-gray-600">
            Blog Lists
          </caption>
          <thead className="bg-gray-50">
            {/* Button row */}
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase border-b-2"
                colSpan="4"
              >
                {/* Button Add */}
                <button
                  onClick={() => navigate("/blog/create")}
                  className="p-2 bg-primary-500 text-black rounded-sm float-right"
                >
                  <i className="bx bx-add-to-queue mr-1"></i>
                  Add new artticle
                </button>
              </th>
            </tr>
            {/* Table Header */}
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Create Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 group">
            {blogs?.data?.map((item) => (
              <tr key={item.id} className="last:border-b">
                <td className="px-6 py-4 text-sm text-black">{item.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  {formatDate(item.created_at)}
                </td>
                <td className="px-6 py-4 flex gap-1 justify-center items-center text-end text-sm font-medium">
                  {/* Button Delete */}
                  <button
                    onClick={() => dispatch(deleteBlog(item.id))}
                    type="button"
                    className="p-2 rounded-lg border border-red-500"
                  >
                    <i className="bx bx-trash text-red-500"></i>
                  </button>
                  <button
                    onClick={() => navigate(`/blog/edit/${item.id}`)}
                    type="button"
                    className="p-2 rounded-lg border border-yellow-500"
                  >
                    <i className="bx bx-pencil text-yellow-500"></i>
                  </button>
                  <button
                    onClick={() => dispatch(updatePublish(item.id))}
                    type="button"
                    className={`p-2 rounded-lg border ${item.published ? 'bg-black' : 'bg-white' } border-blue-500`}
                  >
                    <i className="bx bx-upload text-blue-500"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Blogs;

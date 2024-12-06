import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPortfolio,
  deletePortfolio,
} from "../redux/slices/portfolioSlice";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { portfolio, isLoading, isSuccess } = useSelector((state) => state.portfolio);

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
    dispatch(getPortfolio(1));
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(getPortfolio(1));
    }
  }, [isSuccess, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Portfolio</h1>
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <caption className="py-2 text-start text-sm text-gray-600">
            Portfolio Lists
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
                  onClick={() => navigate("/portfolio/create")}
                  className="p-2 bg-primary-500 text-black rounded-sm float-right"
                >
                  <i className="bx bx-add-to-queue mr-1"></i>
                  Add new project
                </button>
              </th>
            </tr>
            {/* Table Header */}
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Banner
              </th>
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
            { portfolio?.data?.map((item) => (
              <tr key={item.id} className="last:border-b">
                <td className="px-6 py-4 text-sm font-medium text-black">
                  <div className="w-14 h-14  overflow-hidden">
                    <img
                      src={item.banner}
                      className="w-full h-full object-cover"
                      alt={item.title}
                    />
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-black">{item.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  {formatDate(item.created_at)}
                </td>
                <td className="px-6 py-4 flex gap-1 justify-center items-center text-end text-sm font-medium">
                  {/* Button Delete */}
                  <button
                    type="button"
                    className="p-2 rounded-lg border border-red-500"
                    onClick={() => dispatch(deletePortfolio(item.id))}
                  >
                    <i className="bx bx-trash text-red-500"></i>
                  </button>
                  {/* Button Edit */}
                  <button
                    onClick={() => navigate(`/portfolio/edit/${item.id}`)}
                    type="button"
                    className="p-2 rounded-lg border border-red-500"
                  >
                    <i className="bx bx-pencil text-primary-500"></i>
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

export default Portfolio;

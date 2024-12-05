import React, {useEffect} from "react";
// import { useGetAllUserQuery } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, getUsers } from "../redux/slices/userSlice";

const Teams = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { data, isLoading, error } = useGetAllUserQuery(1);
  const { users: data, isLoading, isEror: error, isSuccess } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers(1));
  }, [dispatch, isSuccess]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error...</p>;
  }
  return (
    <>
      <h1>Teams</h1>
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <caption className="py-2 text-start text-sm text-gray-600">
            Team Members
          </caption>
          <thead className="bg-gray-50">
            {/* Button row */}
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase border-b-2"
                colSpan="5"
              >
                {/* Button Add */}
                <button
                  onClick={() => navigate("/user/create")}
                  className="p-2 bg-primary-500 text-black rounded-sm float-right"
                >
                  <i className="bx bx-add-to-queue mr-1"></i>
                  Add new member
                </button>
              </th>
            </tr>
            {/* Table Header */}
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Photo
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Title
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
            {data?.data?.map((item, index) => (
              <tr key={index} className=" last:border-b">
                <td className="px-6 py-4 text-sm font-medium text-black">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img
                      src={item.photo}
                      className="w-full h-full object-cover"
                      alt={item.name}
                    />
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-black">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  {item.name}
                </td>
                <td className="px-6 py-4 text-sm text-black">{item.title}</td>
                <td className="px-6 py-4 flex gap-1 justify-center items-center text-end text-sm font-medium">
                  {/* Button Delete */}
                  <button
                    onClick={() => handleDelete(item.id)}
                    type="button"
                    className="p-2 rounded-lg border border-red-500 disabled:cursor-not-allowed"
                    disabled = {isLoading}
                  >
                    <i className="bx bx-trash text-red-500"></i>
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

export default Teams;

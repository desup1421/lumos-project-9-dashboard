import React from "react";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const { user } = useSelector((state) => state.auth);

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

  return (
    <div className="mt-20 md:mt-10 lg:mt-0 border border-gray-300 rounded-lg p-4 shadow-md grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="col-span-1">
        <img src={user.photo} alt="profile" className="w-full md:h-full object-cover" />
      </div>
      <div className="col-span-3 grid gap-1">
        <header>
          <h1 className="text-2xl font-bold text-wrap">
            {`${user.name} `}
            <span className="text-base text-gray-600">{`(${user.title})`}</span>
          </h1>
          <p className="text-sm text-gray-500">{`@${user.username}`}</p>
        </header>
        <table>
          <tr>
            <th className="text-left">Email</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th className="text-left">LinedIn</th>
            <td>
              <a
                className="text-blue-500 underline cursor-pointer"
                href={user.linkedin}
              >
                Visit linkedIn
              </a>
            </td>
          </tr>
          <tr>
            <th className="text-left">Instagram</th>
            <td>
              <a
                className="text-blue-500 underline cursor-pointer"
                href={user.linkedin}
              >
                Visit instagram
              </a>
            </td>
          </tr>
          <tr>
            <th className="text-left">Create at</th>
            <td>{formatDate(user.created_at)}</td>
          </tr>
          <tr>
            <th className="text-left">Last modified</th>
            <td>{formatDate(user.updated_at)}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProfileCard;

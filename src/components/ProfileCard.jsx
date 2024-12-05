import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const formadivate = (date) => {
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
        <img
          src={user.photo}
          alt="profile"
          className="w-full md:h-full object-cover"
        />
      </div>
      <div className="col-span-3 grid gap-1">
        <header>
          <h1 className="text-2xl font-bold text-wrap">
            {`${user.name} `}
            <span className="text-base text-gray-600">{`(${user.title})`}</span>
          </h1>
          <p className="text-sm text-gray-500">{`@${user.username}`}</p>
        </header>
        <div>
          <div className="grid grid-cols-4">
            <div className="text-left">Email</div>
            <div className="col-span-3">{user.email}</div>
          </div>
          <div className="grid grid-cols-4">
            <div className="text-left">LinedIn</div>
            <div className="col-span-3">
              <a
                className="text-blue-500 underline cursor-pointer"
                href={user.linkedin_url}
              >
                {user.linkedin_url}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="text-left">Instagram</div>
            <div className="col-span-3">
              <a
                className="text-blue-500 underline cursor-pointer"
                href={user.ig_url}
              >
                {user.ig_url}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="text-left">Create at</div>
            <div className="col-span-3">{formadivate(user.created_at)}</div>
          </div>
          <div className="grid grid-cols-4">
            <div className="text-left">Last modified</div>
            <div className="col-span-3">{formadivate(user.updated_at)}</div>
          </div>
          <button 
            onClick={() => navigate(`/user/edit/${user.email}`)}
            className="bg-primary-500 px-5 py-2 self-start rounded-md mt-5">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

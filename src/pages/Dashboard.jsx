import React from "react";

const Dashboard = () => {
  return (
    <div className="relative flex flex-col gap-5">
        <header className="mb-10">
          <h1 className="text-4xl font-bold">Dashboard</h1>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="flex flex-col justify-between gap-5 items-center">
            <div className="h-36 w-36 border-8 border-primary-500 rounded-full flex justify-center items-center bg-white">
              <p className="font-bold text-3xl">350 +</p>
            </div>
            <p className="text-lg font-semibold text-center">
              Clients Worldwide
            </p>
          </div>

          <div className="flex flex-col justify-between gap-5 items-center">
            <div className="h-36 w-36 border-8 border-primary-500 rounded-full flex justify-center items-center bg-white">
              <p className="font-bold text-3xl">20 +</p>
            </div>
            <p className="text-lg font-semibold text-center">Team Members</p>
          </div>

          <div className="flex flex-col justify-between gap-5 items-center">
            <div className="h-36 w-36 border-8 border-primary-500 rounded-full flex justify-center items-center bg-white">
              <p className="font-bold text-3xl">100 +</p>
            </div>
            <p className="text-lg font-semibold text-center">Project</p>
          </div>

          <div className="flex flex-col justify-between gap-5 items-center">
            <div className="h-36 w-36 border-8 border-primary-500 rounded-full flex justify-center items-center bg-white">
              <p className="font-bold text-3xl">85M +</p>
            </div>
            <p className="text-lg font-semibold text-center">
              Revenue Generated
            </p>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;

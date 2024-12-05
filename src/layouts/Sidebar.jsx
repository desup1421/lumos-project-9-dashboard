import React, { useState } from "react";
import { Link } from "react-router-dom";

// IMAGES
import logo from "../assets/images/logo.svg";

const Sidebar = () => {
  const [isShow, setIsShow] = useState(false);
  const handleShowModal = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="w-screen relative">
      <button
        onClick={handleShowModal}
        className="fixed bg-primary-500 top-10 right-10 p-1 md:hidden"
      >
        <i className="bx bx-menu text-5xl"></i>
      </button>
      <div className="flex md:flex flex-row gap-10">
        <div className="w-full max-w-[18rem]">
          <aside
            className={`sidebar h-full w-0 overflow-hidden md:w-full ${
              isShow && "w-full"
            } sidebar-fixed-left justify-start bg-black text-white transition-all duration-500`}
          >
            <section className="sidebar-title items-center p-4">
              <img className="h-6 w-20" src={logo} alt="logo" />
            </section>

            <section className="sidebar-content h-fit min-h-[20rem] overflow-visible">
              <nav className="menu rounded-md">
                <section className="menu-section px-4 pt-10">
                  <ul className="menu-items">
                    {/* DASHBOARD */}
                    <li className="menu-item group">
                      <i className="bx bx-file text-white text-xl group-hover:text-black"></i>
                      <Link
                        to="/"
                        className="text-white group-hover:text-black"
                      >
                        Dashboard
                      </Link>
                    </li>
                    {/* TEAMS */}
                    <li className="menu-item group">
                      <i className="bx bx-file text-white text-xl group-hover:text-black"></i>
                      <Link to="/user" className="text-white group-hover:text-black">
                        Teams
                      </Link>
                    </li>
                    {/* CONTENT */}
                    <li>
                      <input
                        type="checkbox"
                        id="menu-1"
                        className="menu-toggle"
                        defaultChecked
                      />
                      <label
                        className="menu-item justify-between group"
                        htmlFor="menu-1"
                      >
                        {/* LOGO AND TEXT */}
                        <div className="flex gap-2">
                          <i className="bx bx-file text-white text-xl group-hover:text-black"></i>

                          <span className="text-white group-hover:text-black">
                            Content
                          </span>
                        </div>
                        {/* LOGO TOGGLE */}
                        <span className="menu-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white group-hover:text-black"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </label>

                      <div className="menu-item-collapse">
                        <div className="min-h-0">
                          <Link
                            to="/portfolio"
                            className="menu-item ml-6 text-white/50 hover:text-black"
                          >
                            Portfolio
                          </Link>
                          <Link
                            to="/blog"
                            className="menu-item ml-6 text-white/50 hover:text-black"
                          >
                            Blog
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
              </nav>
            </section>

            <section className="sidebar-footer h-full justify-end bg-black text-white pt-2">
              <div className="divider my-0"></div>
              <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-white/5">
                <label
                  className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-white/5"
                  tabIndex="0"
                >
                  <div className="flex flex-row gap-4 p-4">
                    <div className="avatar avatar-md">
                      <img
                        src="https://i.pravatar.cc/150?img=30"
                        alt="avatar"
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-white text-nowrap group-hover:text-black">
                        Sandra Marx
                      </span>
                      <span className="text-xs font-normal text-white/50">
                        sandra
                      </span>
                    </div>
                  </div>
                </label>

                <div className="dropdown-menu dropdown-menu-right-top ml-2">
                  <a className="dropdown-item text-sm">Profile</a>
                  <a tabIndex="-1" className="dropdown-item text-sm text-black">
                    Account settings
                  </a>
                  <a tabIndex="-1" className="dropdown-item text-sm text-black">
                    Change email
                  </a>
                  <a tabIndex="-1" className="dropdown-item text-sm text-black">
                    Subscriptions
                  </a>
                  <a tabIndex="-1" className="dropdown-item text-sm text-black">
                    Change password
                  </a>
                  <a tabIndex="-1" className="dropdown-item text-sm text-black">
                    Refer a friend
                  </a>
                  <a tabIndex="-1" className="dropdown-item text-sm text-black">
                    Settings
                  </a>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
    // <aside className="h-lvh w-0 overflow-hidden md:w-72 bg-black text-white transition-all duration-500 fixed">
    //   <div className="p-10">
    //     <header className="pb-10">
    //       <img className="h-8 w-28" src={logo} alt="logo" />
    //     </header>
    //     <div className="mt-20">
    //       <ul className="text-xl flex flex-col gap-5">
    //         <li>
    //           <Link to="/">Dashboard</Link>
    //         </li>
    //         <li>
    //           <Link to="/profile">Profile</Link>
    //         </li>
    //         <li>
    //           <Link to="/blog">Blog</Link>
    //         </li>
    //         <li>
    //           <Link to="/portfolio">Portfolio</Link>
    //         </li>
    //         <li>
    //           <Link to="/user">Teams</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </aside>
  );
};

export default Sidebar;

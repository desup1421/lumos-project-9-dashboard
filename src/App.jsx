import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// LAYOUTS
import Sidebar from "./layouts/Sidebar";
// PAGES
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import CreatePortfolio from "./pages/CreatePortfolio";
import CreateBlog from "./pages/CreateBlog";
import Teams from "./pages/Teams";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";
// COMPONENTS
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Sidebar />
        <main className="bg-white min-h-screen md:ml-72 p-10 ">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route>
              <Route path="/user" element={<Teams />} />
              <Route path="/user/create" element={<CreateUser />} />
            </Route>
            <Route>
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/create" element={<CreatePortfolio />} />
            </Route>
            <Route>
              <Route path="/blog" element={<Blogs />} />
              <Route path="/blog/create" element={<CreateBlog />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default App;

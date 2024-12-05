import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PropTypes from "prop-types";
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
// REDUX
import { useSelector } from "react-redux";

// Protected Route
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Router>
        <ScrollToTop />
        {isAuthenticated && <Sidebar />}
        <main className={`bg-white min-h-screen ${isAuthenticated && 'md:ml-72' }  p-10 `}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route>
              <Route
                path="/user"
                element={
                  <ProtectedRoute>
                    <Teams />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user/create"
                element={
                  <ProtectedRoute>
                    <CreateUser />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user/edit/:email"
                element={
                  <ProtectedRoute>
                    <CreateUser />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route>
              <Route
                path="/portfolio"
                element={
                  <ProtectedRoute>
                    <Portfolio />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/portfolio/create"
                element={
                  <ProtectedRoute>
                    <CreatePortfolio />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route>
              <Route
                path="/blog"
                element={
                  <ProtectedRoute>
                    <Blogs />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/blog/create"
                element={
                  <ProtectedRoute>
                    <CreateBlog />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default App;

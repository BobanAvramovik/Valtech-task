import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import ImageDetail from "./pages/ImageDetail";
import Login from "./pages/Login";
import { checkLogin } from "./utils/checkLogin";
import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(checkLogin());
  }, []);

  return (
    <>
      <Header />
      <Layout>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/" element={<Login />} />
          ) : (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/:id" element={<ImageDetail />} />
            </>
          )}
        </Routes>
      </Layout>
    </>
  );
}

export default App;

import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import ImageDetail from "./pages/ImageDetail/ImageDetail";
import Login from "./pages/Login/Login";
import { checkLogin } from "./utils/checkLogin";
import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(checkLogin());
  }, [isLoggedIn]);

  return (
    <>
      <Header />
      <Layout>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/" element={<Login handleLogin={setIsLoggedIn} />} />
          ) : (
            <>
              <Route path="/*" element={<Dashboard />} />
              <Route path="/:id" element={<ImageDetail />} />
            </>
          )}
        </Routes>
      </Layout>
    </>
  );
}

export default App;

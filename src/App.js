import React from "react";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import StartPage from "./pages/StartPage/StartPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MemberListPage from "./pages/MemberListPage/MemberListPage";
import ManagerListPage from "./pages/ManagerListPage/ManagerListPage";
import Layout from "./layout/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/memberList" element={<MemberListPage />} />
          <Route path="/managerList" element={<ManagerListPage />} />
          <Route path="/eventList" element={<ManagerListPage />} />
          <Route path="/event" element={<ManagerListPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
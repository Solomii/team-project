import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Route, Routes } from "react-router-dom";

import Start from "./pages/Start";
// import Profile from "./pages/Profile"; in the end work come back!!!!
import Event from "./pages/Event/Event"
import MemberList from "./pages/MemberList";
import ManagerList from "./pages/ManagerList";
import Layout from "./ui/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="/profile" element={<Event />} />
          <Route path="/memberList" element={<MemberList />} />
          <Route path="/managerList" element={<ManagerList />} />
          <Route path="/eventList" element={<ManagerList />} />
          <Route path="/event" element={<ManagerList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
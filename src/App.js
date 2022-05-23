import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Route, Routes } from "react-router-dom";

import Layout from "./ui/Layout"
import Start from "./pages/Start";
import Profile from "./pages/Profile";
import MemberList from "./pages/MemberList";
import ManagerList from "./pages/ManagerList";
import EventList from "./pages/EventList";
import EventManagement from "./pages/EventManagement";
import Event from "./pages/Event";
import ManagerManagment from "./pages/ManagerManagment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/memberList" element={<MemberList />} />
          <Route path="/managerList" element={<ManagerList />} />
          <Route path="/managerManagment" element={<ManagerManagment />} />
          <Route path="/eventList" element={<EventList />} />
          <Route path="/eventManagement" element={<EventManagement />} />
          <Route path="/event" element={<Event />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

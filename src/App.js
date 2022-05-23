import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Route, Routes } from "react-router-dom";

import Layout from "./ui/Layout"
import Start from "./pages/Start";
import Profile from "./pages/Profile";
import MemberList from "./pages/MemberList";
import ManagerList from "./pages/ManagerList";
<<<<<<< HEAD
import EventList from "./pages/EventList";
import EventManagement from "./pages/EventManagement";
import Layout from "./ui/Layout";
import Event from "./pages/Event";
=======
import EventList from "./pages/EventList/";
import ManagerManagment from "./pages/ManagerManagment";
>>>>>>> e2875d2c8c6700fae2817709dd9b9d96a728c2aa

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
<<<<<<< HEAD
          <Route path="/eventManagement" element={<EventManagement />} />
          
=======
          <Route path="/event" element={<ManagerList />} />
>>>>>>> e2875d2c8c6700fae2817709dd9b9d96a728c2aa
        </Route>
      </Routes>
    </div>
  );
}

export default App;

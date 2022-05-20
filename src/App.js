import React from "react";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="" element={< />} />
          <Route path="" element={< />} />
          <Route element={< />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

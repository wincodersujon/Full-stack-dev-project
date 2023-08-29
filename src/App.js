import React from "react";

// import MasterLayout from "./layouts/admin/MasterLayout";
import Home from "./components/frontend/Home"; 
import Login from "./components/frontend/auth/Login"; 
import Register from "./components/frontend/auth/Register";
import { Route, Routes } from "react-router-dom";
// import MasterLayout from "./layouts/admin/MasterLayout";
import Dashboard from "./components/admin/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/admin" element={<MasterLayout />}>
          <Route index element={welcome} />
          <Route path="dashboard" element={dashboard} />
          <Route path="profile" element={profile} />
        </Route> */}
      </Routes>

      {/* <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>

          
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;

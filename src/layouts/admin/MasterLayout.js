// import React from "react";
// import '../../assets/admin/css/styles.css';
// import '../../assets/admin/js/scripts.js';

// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
// import Footer from './Footer';
// import routes from '../../routes/routes.js';
// import { Switch, Route, Redirect } from 'react-router-dom';


// const MasterLayout = () => {
//   return (
//     <div className="sb-nav-fixed">
//       <Navbar />
//       <div id="layoutSidenav">
//         <div id="layoutSidenav_nav">
//           <Sidebar />
//         </div>
//         <div id="layoutSidenav_content">
//           <main>
//             <Switch>
//               {routes.map((route, index) => {
//                 return (
//                   route.component && (
//                     <Route
//                       key={index}
//                       path={route.path}
//                       exact={route.exact}
//                       name={route.name}
//                       render={(props) => (
//                         <route.component {...props} />
//                       )}
//                     />

//                   )
//                 )
//               })}
//               <Redirect from="admin" to="/admin/dashboard" />
//             </Switch>
//           </main>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }


// export default MasterLayout;


import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts.js';
import { Outlet } from 'react-router-dom';
const MasterLayout = () => {
  return (
      <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
              
                <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;

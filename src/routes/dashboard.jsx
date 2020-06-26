import TableList from "views/TableList/TableList.jsx";
import Requests from "../views/requests/requests.jsx";
import Maps from "views/Maps/Maps.jsx";
import UserPage from "../components/UI/Modals/Modal.jsx";
var dashRoutes = [
  
  { path: "/maps", name: "maps", icon: "location_map-big", component: Maps },

  {
    path:"/farmer-feedback",
    name:"Feedback",
    icon:"ui-2_like",
    component:TableList
  },
  {
    path:"/requests",
    name:"Requests",
    icon:"ui-1_email-85",
    component:Requests
  },
  {
    path:"/user/:id",
    name:"user",
    icon:"ui-2_like",
    component:UserPage
  },
  { redirect: true, path: "/", pathTo: "/maps", name: "Dashboard" }
];
export default dashRoutes;

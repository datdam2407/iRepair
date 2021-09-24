
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import ManageCompany from "views/ManageCompany.js";
import ManageRepairman from "views/ManageRepairman.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import ManageService from "views/ManageService";
import CreateNewCompany from "components/IRepairCreate/CreateNewCompany";
import CreateNewService from "components/IRepairCreate/CreateNewService";
import CreateNewRepairman from "components/IRepairCreate/CreateNewRepairman";

const dashboardRoutes = [
  

  
  {
    upgrade: true,
    path: "/upgrade",
    name: "AZAI GROUP",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/admin",
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    name: "Manage",
  },
  {
    path: "/table",
    name: "Manage Company",
    icon: "nc-icon nc-notes",
    component: ManageCompany,
    layout: "/admin",
  },

  {
    path: "/service",
    name: "Manage Service",
    icon: "nc-icon nc-notes",
    component: ManageService,
    layout: "/admin",
  },
 
  {
    path: "/ManageRepairman",
    name: "Manage Repairman",
    icon: "nc-icon nc-paper-2",
    component: ManageRepairman,
    layout: "/admin",
  },
  //create
  {
    name: "Create new ",
  },
  {
    path: "/create/company",
    name: "Create Company",
    icon: "nc-icon nc-simple-add",
    component: CreateNewCompany,
    layout: "/admin",
  },
  {
    path: "/create/service",
    name: "Create Service",
    icon: "nc-icon nc-simple-add",
    component: CreateNewService,
    layout: "/admin",
  },
  {
    path: "/create/repairman",
    name: "Create Repairman",
    icon: "nc-icon nc-simple-add",
    component: CreateNewRepairman,
    layout: "/admin",
  },

  //icon
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
  },
  
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
 
  
];

export default dashboardRoutes;

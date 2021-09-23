
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import ManageCompany from "views/ManageCompany.js";
import ManageRepairman from "views/ManageRepairman.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import ManageService from "views/ManageService";

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
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
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

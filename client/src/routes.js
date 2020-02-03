import Dashboard from "views/Dashboard.jsx";
import TableList from "views/ListContacts.js";
import PRODUITS from "views/PRODUITS.jsx";
import CLIENTS from "views/CLIENTS.jsx";
import FORNUSSEURS from "views/FORNUSSEURS.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fa fa-pie-chart",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "ListContacts",
    icon: "fa fa-id-card",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/FormPage",
    name: "STOCK",
    icon: "fa fa-stack-exchange",
    component: TableList,
    layout: "/admin"
  },

  {
    path: "/PRODUITS",
    name: "PRODUITS",
    icon: "fa fa-product-hunt",
    component: PRODUITS,
    layout: "/admin"
  },
  {
    path: "/CLIENTS",
    name: "CLIENTS",
    icon: "fa fa-group",
    component: CLIENTS,
    layout: "/admin"
  },
  {
    path: "/FORNUSSEURS",
    name: "FORNUSSEURS",
    icon: "fa fa-truck",
    component: FORNUSSEURS,
    layout: "/admin"
  }
];

export default dashboardRoutes;

import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Sweets from "views/examples/Sweets.js";
import Milky from "views/examples/Milky";

var routes = [
  {
    path: "/index",
    name: "ICHIMLIKLAR",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/shirinliklar",
    name: "SHIRINLIKLAR ",
    icon: "ni ni-tv-2 text-primary",
    component: Sweets,
    layout: "/admin",
  },
  {
    path: "/sut-mahsulotlar",
    name: "SUT MAXSULOTLARI",
    icon: "ni ni-tv-2 text-primary",
    component: Milky,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "GUSHT VA KOLBASA MAXSULOTLARI ",
    icon: "ni ni-tv-2 text-primary",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Oziq-ovqat MAXSULOTLARI",
    icon: "ni ni-tv-2 text-primary",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "DENGIZ MAXSULOTLARI ",
    icon: "ni ni-tv-2 text-primary",
    component: Login,
    layout: "/auth",
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth",
  // },
];
export default routes;

import Vue from "vue";
import Router from "vue-router";

const Company = r =>
  require.ensure([], () => r(require("@/views/Company")), "Company");
const CAuthenticate = r =>
  require.ensure(
    [],
    () => r(require("@/views/CAuthenticate")),
    "CAuthenticate"
  );
const System = r =>
  require.ensure([], () => r(require("@/views/System")), "System");
const SAuthenticate = r =>
  require.ensure(
    [],
    () => r(require("@/views/SAuthenticate")),
    "SAuthenticate"
  );
const SAuthinfo = r =>
  require.ensure([], () => r(require("@/views/SAuthinfo")), "SAuthinfo");

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/company",
      component: Company,
      children: [
        {
          path: "",
          name: "CAuthenticate",
          component: CAuthenticate
        }
      ]
    },
    {
      path: "/system",
      component: System,
      children: [
        {
          path: "",
          name: "SAuthenticate",
          component: SAuthenticate
        },
        {
          path: "/authinfo/:userId",
          name: "authinfo",
          component: SAuthinfo
        }
      ]
    },
    {
      path: "*",
      redirect: "/company"
    }
  ]
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Import modules
import Nav from "./modules/Nav";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {Nav}
});

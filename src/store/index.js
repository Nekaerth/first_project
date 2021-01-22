import Vue from "vue";
import Vuex from "vuex";

import items from "./modules/items/";
import todos from "./modules/todos/";

Vue.use(Vuex);

const modules = { items, todos };

export default new Vuex.Store({
  modules,
});

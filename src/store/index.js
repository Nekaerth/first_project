import Vue from "vue";
import Vuex from "vuex";
import { fetchTodos } from "../service";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    items: [],
    todos: [],
    status: "",
  },
  mutations: {
    addItem(state, item) {
      state.items.push({ id: state.items.length, ...item });
    },
    removeItem(state, id) {
      state.items.splice(
        state.items.findIndex((item) => {
          return item.id === id;
        }),
        1
      );
    },
    setStatus(state, status) {
      state.status = status;
    },
    setTodos(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    addItem(context, item) {
      context.commit("addItem", item);
    },
    removeItem(context, id) {
      context.commit("removeItem", id);
    },
    fetchTodos(context) {
      context.commit("setStatus", "fetching");
      fetchTodos()
        .then((response) => {
          context.commit("setTodos", response);
          context.commit("setStatus", "fetched");
        })
        .catch((error) => {
          console.error(error);
          context.commit("setStatus", "error");
        });
    },
  },
});

export default store;

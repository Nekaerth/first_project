import { fetchTodos } from "../../../service";
import { Mutation, State } from "./types";

const state = {
  status: "",
  todos: [],
};

const getters = {};

const actions = {
  fetchTodos({ commit }) {
    commit(Mutation.SET_STATUS, State.FETCHING);
    fetchTodos()
      .then((response) => {
        commit(Mutation.SET_TODOS, response);
        commit(Mutation.SET_STATUS, State.FETCHED);
      })
      .catch((error) => {
        console.error(error);
        commit(Mutation.SET_STATUS, State.ERROR);
      });
  },
};

const mutations = {
  [Mutation.SET_STATUS](state, status) {
    state.status = status;
  },
  [Mutation.SET_TODOS](state, todos) {
    state.todos = todos;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

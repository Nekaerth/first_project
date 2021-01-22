import { Mutation } from "./types";

const state = {
  items: [],
};

const getters = {};

const actions = {
  addItem(context, item) {
    context.commit(Mutation.ADD_ITEM, item);
  },
  removeItem(context, id) {
    context.commit(Mutation.REMOVE_ITEM, id);
  },
};

const mutations = {
  [Mutation.ADD_ITEM](state, item) {
    state.items.push({ id: state.items.length, ...item });
  },
  [Mutation.REMOVE_ITEM](state, id) {
    state.items.splice(
      state.items.findIndex((item) => {
        return item.id === id;
      }),
      1
    );
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

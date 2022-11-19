import { createStore } from "vuex";

export default createStore({
  state: {
      coaches: [
        {
        id: 'coach',
        firstName: 'Manuel',
        lastName: 'Lopez',
        price: 39,
        skills: ['frontend', 'career'],
        rate: 9.6,
        desc: "Just some stuff"
      }, {
        id: 'coach2',
        firstName: 'Max',
        lastName: 'Ligo',
        price: 39,
        skills: ['frontend', 'backend', 'career'],
        rate: 9.6,
        desc: "Easy peasy lemon squizy"
      },
    ]
  },
  getters: {
    getCoachesList(state) {
      return state.coaches
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});

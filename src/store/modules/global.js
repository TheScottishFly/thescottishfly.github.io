export default {
  state: {
    introduction: true
  },
  getters: {
    getIntro: state => {
      return state.introduction;
    }
  },
  mutations: {
    finishIntro (state) {
      state.introduction = false;
    }
  },
  actions: {

  },
}

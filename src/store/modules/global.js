export default {
  state: {
    introduction: true
  },
  getters: {
    skipIntro: state => {
      return !state.introduction;
    }
  },
  mutations: {
    finishIntro (state) {
      state.introduction = !state.introduction;
    }
  },
  actions: {

  },
}

export default {
  state: {
    bgApp: 'white',
    introduction: true,
    typed: true
  },
  getters: {
    getIntro: state =>  state.introduction,
    getBgApp: state =>  state.bgApp,
    getTyped: state =>  state.typed,
  },
  mutations: {
    finishIntro: state => state.introduction = false,
    changeBgApp: (state, color) => state.bgApp = color,
    changeTyped: (state) => state.typed = false,
  },
  actions: {

  },
}

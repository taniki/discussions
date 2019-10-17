import Api from '~/services/Api.js'

const $api = new Api()

const mapping = {
  Dataset: 'datasets',
  Reuse: 'reuses'
}

const module = {
  namespaced: true,
  state () {
    return {
      discussions: [],
      dataset: {},
      thread: {}
    }
  },
  mutations: {
    setDiscussions (state, data) {
      state.list = data
    },
    setThread (state, data) {
      state.thread = data
    },
    setSubject (state, data) {
      state.subject = data
    }
  },
  actions: {
    discussions () {},
    load_discussion ({ commit, dispatch }, id) {
      commit('setThread', {})
      commit('setSubject', {})

      $api.get(`discussions/${id}`).then((res) => {
        commit('setThread', res.data)
        dispatch('load_subject', res.data.subject)
      })
    },
    load_subject ({ commit }, subject) {
      const id = subject.id

      console.log(subject)

      $api.get(`${mapping[subject.class]}/${id}`).then((res) => {
        commit('setSubject', res.data)
      })
    }
  }
}

export default module

export const state = () => ({
  searchText: ''
})

export const actions = {
  searchPosts({ commit }, data) {
    commit('SET_SEARCH', data)
  }
}

export const mutations = {
  SET_SEARCH(state, data) {
    state.searchText = data
  }
}

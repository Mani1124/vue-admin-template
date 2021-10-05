const actions = {
    setAuthenticatedData ({ commit }, data) {
      commit('SET_AUTH_USER', data.user)
      commit('SET_AUTH_TOKEN', data.token)
    },
    signOut ({ commit }, data) {
      commit('SET_AUTH_USER', null)
      commit('SET_AUTH_TOKEN', null)
    },
    toggleTheme ({ commit },value) {
        commit('TOGGLE_THEME',value)
    },
    toggleRTL ({ commit },value) {
        commit('TOGGLE_RTL',value)
    },
    setLanguage ({ commit },value) {
        commit('SET_LANGUAGE',value)
    },
    setColor({ commit },color) {
        commit('SET_COLOR',color)
    },
    setDrawer({ commit },value) {
        commit('SET_DRAWER',value)
    },
    setActiveNavigation({ commit },value) {
        commit('SET_ACTIVE_NAV',value)
    },
}

export default actions


const mutations = {
    SET_AUTH_USER (state, user) {
        state.user = user
    },
    SET_AUTH_TOKEN (state, token) {
        state.token = token
    },
    SET_DRAWER (state, val) {
        state.drawer = val
    },
    TOGGLE_THEME (state,value) {
        state.dark = value
    },
    TOGGLE_RTL (state,value) {
        state.rtl = value
    },
    SET_LANGUAGE (state,value) {
        state.language = value
    },
    SET_COLOR(state,color) {
        state.color = color
    },
    SET_ACTIVE_NAV(state,value) {
        state.active_nav = value
    },
}

export default mutations

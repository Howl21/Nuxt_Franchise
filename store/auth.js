export const state = () => ({
    token: null
})

export const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    clearToken(state) {
        state.token = null;
    }
}

export const actions = {
    async login({ commit, dispatch }, formData) {
        try {
            const { token } = await this.$axios.$post('/api/auth/admin/login', formData)
            dispatch('setToken', token)
        } catch (e) {
            commit('setError', e, { root: true })
            throw e

        }
    },
}

export const getters = {
    isAuthenticated: state => Boolean(state.token),
    token: state => state.token
}
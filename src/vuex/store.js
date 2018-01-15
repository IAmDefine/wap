import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={
    status:JSON.parse(sessionStorage.getItem('user'))||{},
};
const mutations={
    signIn(state, user) {
        sessionStorage.setItem('user',JSON.stringify(user));
        state.status=user;
    },
    signOut(state) {
        sessionStorage.removeItem('user');
        state.status={}
    }
};
const actions={
    signIn({commit}, user) {
        commit('signIn', user)
    },
    signOut({commit}) {
        commit('signOut')
    }
};
export default new Vuex.Store({
    state,
    mutations,
    actions,
})









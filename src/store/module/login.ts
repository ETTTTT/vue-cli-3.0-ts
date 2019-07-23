import { LoginState } from '@/types/views/login.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as LoginApi from '@/api/login'

const state: LoginState = {
  data: {
   author: undefined
  }
}

// 强制使用getter获取state
const getters: GetterTree<LoginState, any> = {
  author: (state: LoginState) => state.data.author
}

// 更改state
const mutations: MutationTree<LoginState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: any, data: any) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<LoginState, any> = {
  UPDATE_STATE_ASYN({ commit, state: LoginState }, data: LoginState) {
    commit('UPDATE_STATE', data)
  },
  GET_DATA_ASYN({ commit, state: LoginState }) {
    LoginApi.getData()
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}


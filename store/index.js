const cookieparser = process.server ? require("cookieparser") : undefined;
export const state = () => {
  return {
    auth: null,
    user: [],
    page: []
  };
};

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth;
  },
  setUser(state, user) {
    state.user = user;
  },
  setPage(state, page) {
    state.page = page;
  }
};
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let auth = null;
    let user = [];
    let page = [];
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      try {
        auth = JSON.parse(parsed.auth);
        user = JSON.parse(parsed.user);
        page = JSON.parse(parsed.page);
      } catch (err) {
        // No valid cookie found
      }
    }
    commit("setAuth", auth);
    commit("setUser", user);
    commit("setPage", page);
  }
};

// import router from '../router';
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    projects: [],
    newProjectTitle: null,
    createProjectError: null,
    fetchProjectError: null
  },
  actions: {
    fetchProjects({ commit }) {
      commit('setFetchProjectError', null);
      return HTTP()
        .get('/projects')
        .then(({ data }) => {
          commit('setProjects', data);
        })
        .catch(() => {
          commit('setFetchProjectError', 'Error has occured fetching projects');
        });
    },
    createProject({ commit, state }) {
      commit('setProjectError', null);
      return HTTP()
        .post('/projects', {
          title: state.newProjectTitle
        })
        .then(({ data }) => {
          commit('appendProject', data);
          commit('setNewProjectTitle', null);
        })
        .catch(() => {
          commit('setProjectError', 'Error has occured creating project');
        });
    }
  },
  getters: {},
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    },
    setNewProjectTitle(state, name) {
      state.newProjectTitle = name;
    },
    appendProject(state, project) {
      state.projects.push(project);
    },
    setFetchProjectError(state, error) {
      state.fetchProjectError = error;
    },
    setProjectError(state, error) {
      state.createProjectError = error;
    }
  }
};

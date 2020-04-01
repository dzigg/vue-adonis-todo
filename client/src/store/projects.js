// import router from '../router';
import Vue from 'vue';
import { getField, updateField } from 'vuex-map-fields';
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
    },
    saveProject({ commit }, project) {
      return HTTP()
        .patch(`/projects/${project.id}`, project)
        .then(() => {
          commit('unsetEditMode', project);
        });
    },
    deleteProject({ commit }, project) {
      return HTTP()
        .delete(`/projects/${project.id}`)
        .then(() => {
          commit('removeProject', project);
        });
    }
  },
  getters: {
    getField
  },
  mutations: {
    updateField,
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
    },
    setProjectTitle(state, { project, title }) {
      project.title = title;
    },
    setEditMode(state, project) {
      Vue.set(project, 'isEditMode', true);
    },
    unsetEditMode(state, project) {
      Vue.set(project, 'isEditMode', false);
    },
    removeProject(state, project) {
      state.projects.splice(state.projects.indexOf(project), 1);
    }
  }
};

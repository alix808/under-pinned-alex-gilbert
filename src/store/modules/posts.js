import axios from 'axios';

const state = {
  posts: []
};

const getters = {
  allPosts: state => state.posts
};

const actions = {
  async fetchPosts({ commit }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    commit('setPosts', response.data);
  },
  async addPost({ commit }, title) {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      { title, completed: false }
    );

    commit('newPost', response.data);
  },
  async deletePost({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

    commit('removePost', id);
  },
  async updatePost({ commit }, updPost) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${updPost.id}, updPost`
    );
    commit('updatePost', response.data);
  }
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  newPost: (state, post) => state.posts.unshift(post),
  removePost: (state, id) =>
    (state.posts = state.posts.filter(post => post.id !== id)),
  updatePost: (state, updPost) => {
    const index = state.posts.findIndex(post => post.id === updPost.id);
    if (index !== -1) {
      state.posts.splice(index, 1, updPost);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

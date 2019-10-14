<template>
  <div>
    <h3 class="title">Posts</h3>
    <div class="posts">
      <div v-for="post in allPosts" :key="post.id" class="post">
        {{ post.title }}
        <i @click="deletePost(post.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Posts",
  methods: {
    ...mapActions(["fetchPosts", "deletePost", "updatePost"])
  },
  computed: mapGetters(["allPosts"]),
  created() {
    this.fetchPosts();
  }
};
</script>

<style scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.post {
  border: 1px solid #343536;
  background: #1a1a1b;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.post:hover {
  background-color: #d7dadc;
  color: black;
  border: 1px solid black;
}

.title {
  color: #d7dadc;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>

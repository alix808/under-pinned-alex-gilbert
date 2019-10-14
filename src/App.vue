<template>
  <div id="app">
    <div class="container">
      <AddPost />
      <Posts />
    </div>
  </div>
</template>

<script>
import AddPost from "./components/AddPost.vue";
import Posts from "./components/Posts.vue";

export default {
  name: "app",
  components: {
    AddPost,
    Posts
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap");
body {
  font-family: "Open Sans Condensed", sans-serif;
  line-height: 1.6;
  background: #030303;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>

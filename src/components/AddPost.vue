<template>
  <div>
    <h3 class="title">Add Post</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add post..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddPost",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addPost"]),
    onSubmit(e) {
      e.preventDefault();
      this.addPost(this.title);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #343536;
  outline: 0;
  background: #272729;
  border-radius: 4px;
  color: #d7dadc;
}
input[type="submit"] {
  flex: 2;
  background: #d7dadc;
  color: black;
  border: 1px #d7dadc solid;
  cursor: pointer;
  border-radius: 4px;
  text-transform: uppercase;
}

.title {
  color: #d7dadc;
}
</style>

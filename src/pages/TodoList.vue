<template>
  <div v-if="!todosList.length">
    <p>
      You have no todo, please create one.
      <router-link to="/add-todo">Add todo</router-link>
    </p>
  </div>
  <div v-else>
    <todo-item
      v-for="todo in todosList"
      :key="todo.id"
      :todo="todo"
      @remove-todo="removeTodo"
    ></todo-item>
  </div>
</template>

<script>
import TodoItem from "../components/UI/TodoItem.vue";
export default {
  components: { TodoItem },
  computed: {
    UserLogged() {
      return this.$store.getters.isUserLogged;
    },
    todosList() {
      return this.$store.getters.todosList;
    },
  },

  methods: {
    removeTodo(id) {
      this.$store.commit("removeItem", id);
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => !vm.UserLogged && vm.$router.replace({ name: "login" }));
  },
};
</script>

<style scoped>
p {
  margin-top: 4rem;
  text-align: center;
}
a {
  margin: auto;
  display: inline-block;
}
</style>
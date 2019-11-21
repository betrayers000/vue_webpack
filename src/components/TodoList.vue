<template>
  <div class="todo-list">
    <h1>{{category}}</h1>
    <input type="text" v-model="newTodo" v-on:keyup.enter="addTodo">
    <button v-on:click="addTodo">+</button>
    <li v-for="todo in todos" v-bind:key="todo.id">
    <span>{{ todo.content }}</span>
    <button v-on:click="removeTodo(todo.id)">x</button>
    </li>
  </div>
</template>

<script>
export default {
  props:['category'],
  data: function(){
      return {
      todos: [],
      newTodo: '',
      }
  },
  methods: {
      addTodo: function(e) {
      if (this.newTodo.length != 0) {
          this.todos.push({
          id: Date.now(),
          content: this.newTodo,
          completed: false,
          })
          this.newTodo = ''
      }
      },
      removeTodo: function(todoID) {
      this.todos = this.todos.filter(todo => {
          return todo.id !== todoID
      })
      }
  }
}
</script>

<style>
  .todo-list{
    display: inline-block;
    width:33%;
  }
</style>
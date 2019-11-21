<template>
  <div>
    <h1>여기는 최상위입니다</h1>
    <!-- 등록된 component를 사용한다. -->
    <todo-list category="a"></todo-list>
    <todo-list category="b"></todo-list>
    <TodoList category="c"/>
  </div>
</template>

<script>
// 1. component를 가져온다
import TodoList from './components/TodoList.vue'
export default {
  // 2. 가져온 component를 등록한다.
  components:{
    TodoList,
  }
}
</script>

<style>

</style>
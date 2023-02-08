<script setup>
import {ref} from "vue";
import AddTodo from "../components/AddTodo.vue";
import TodoList from "../components/TodoList.vue";

const data = ref([]);

const addItem = (item) => {
  data.value.push({
    id: Math.random(),
    name: item.trim(),
    status: "UNFINISHED",
  });
};

const updateItem = (item) => {
  data.value = data.value.map(i=> i.id === item.id ? {...i, status : "FINISHED"}: i)
};

const deleteItem = (item) => {
  data.value = data.value.filter((i) => i.id !== item)
};


</script>
<template>
  <h1>TODO APP</h1>
  <AddTodo @add="addItem" />
  <TodoList :data="data" @update="updateItem" @delete="deleteItem" />
</template>

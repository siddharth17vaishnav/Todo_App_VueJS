import { defineComponent } from 'vue';
<script setup>
import { ref } from 'vue';

const emit = defineEmits([('add')])

const todo = ref("")
</script>
<template>
    <div class="container">
        <input type="text" placeholder="Add a TODO" v-model="todo" enter/>
        <button @click="emit('add', todo)">ADD</button>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    gap: 10px
}

.container input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.container button {
    background-color: teal;
    color: aliceblue;
}
</style>
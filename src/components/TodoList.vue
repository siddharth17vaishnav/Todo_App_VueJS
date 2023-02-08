<script setup>
import { ref } from 'vue';
const selected = ref("ALL")

const props = defineProps({
    data: Array,
});
const emit = defineEmits(['update','delete'])
</script>
<template>
    <div>
    <div class="wrapper" v-for="item in props.data">
      <h4>{{ item.name }}</h4>
      <p :style="{color: item.status === 'FINISHED' ? 'green' : 'blue'}" @click="emit('update', item)">{{ item.status }}</p>
      <p @click="emit('delete',item.id)">Delete</p>
    </div>
<!--    <select id="filter" name="filter" @click="emit('filter',selected)" v-model="selected">-->
<!--      <option value="ALL">ALL</option>-->
<!--      <option value="UNFINISHED">UNFINISHED</option>-->
<!--      <option value="FINISHED">FINISHED</option>-->
<!--    </select>-->
</div>
</template>
<style scoped>
.wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

select {
    padding: 12px 20px;
    margin: 8px 0;
    display: flex;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    justify-content: flex-end;
}

p{
  cursor: pointer;
}
</style>

<template>
  <ul class="to-do collection">
    <ToDoItem :key="item.id" :model-value="item" v-for="item in toDoList" />
    <Pagination
      v-if="!loading && allPage > 0"
      v-model:modelValue="page"
      :numberOfPages="allPage"
      @input="onChangePage"
    />
    <Loader v-show="loading" />
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ToDoItem from "@/components/ToDoItem.vue";
import Pagination from "@/components/Pagination.vue";
import { useTodos } from "@/hooks/useTodos";
import Loader from "@/components/Loader.vue";

export default defineComponent({
  components: {
    ToDoItem,
    Pagination,
    Loader,
  },
  setup() {
    const { toDoList, loading, fetchToDos, countAll, allPage, page, nextPage } =
      useTodos();

    fetchToDos();

    const onChangePage = (numberPage: number) => {
      page.value = numberPage;
    };

    return {
      loading,
      countAll,
      allPage,
      page,
      nextPage,
      toDoList,
      onChangePage,
    };
  },
});
</script>

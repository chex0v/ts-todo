<template>
  <loader v-if="loading" />
  <div class="post row" v-if="toDo">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <span class="post__title card-title">{{ toDo.id }}</span>
        </div>
        <div class="card-content">
          <p>
            {{ toDo.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useRoute, RouteLocationNormalized } from "vue-router";
import { defineComponent } from "vue";
import useTodo from "@/hooks/useTodo";
import Loader from "@/components/Loader.vue";

export default defineComponent({
  components: {
    Loader,
  },
  setup() {
    const route: RouteLocationNormalized = useRoute();

    const { id } = route.params;

    const { fetchTodo, loading, toDo } = useTodo(parseInt(id as string));

    fetchTodo();

    return {
      loading,
      toDo,
    };
  },
});
</script>
<style lang="scss" scoped>
.post {
  margin-top: 5rem;
  &__title {
    color: #000 !important;
  }
}
</style>
<template>
  <li class="collection-item to-do-item">
    <span class="title to-do-item__id">
      {{ modelValue.id }}
    </span>
    <p class="to-do-item__title">
      {{ modelValue.title }}
    </p>
    <div class="secondary-content to-do-item__action">
      <!-- actions btn -->
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ToDoType from "@/types/ToDo";

export default defineComponent({
  props: {
    modelValue: {
      type: Object as PropType<ToDoType>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.to-do-item {
  cursor: pointer;
}
</style>

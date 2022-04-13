<template>
  <ul class="pagination">
    <li class="waves-effect" :class="{ disabled: page <= 1 }">
      <a @click.prevent="onClickPrev">
        <i class="material-icons">chevron_left</i>
      </a>
    </li>
    <li
      class="waves-effect"
      :class="{ active: page === p }"
      v-for="p in countPages"
      :key="p"
    >
      <a @click="setPage(p)">{{ p }}</a>
    </li>
    <li class="waves-effect" :class="{ disabled: page >= countPages.length }">
      <a @click.prevent="onClickNext">
        <i class="material-icons">chevron_right</i>
      </a>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType, toRefs, ToRefs, computed } from "vue";

export default defineComponent({
  props: {
    numberOfPages: {
      type: Number as PropType<number>,
      required: true,
      validator(value: number) {
        return value > 0;
      },
    },
    modelValue: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const newProp: ToRefs<any> = toRefs(props);
    const page = computed(() => newProp.modelValue.value);
    const countPages = newProp.numberOfPages.value;

    const onClickPrev = () => {
      if (page.value <= 1) {
        return;
      }
      emit("input", page.value - 1);
    };

    const onClickNext = () => {
      if (page.value >= countPages) {
        return;
      }
      emit("input", page.value + 1);
    };

    const setPage = (numberPage: number) => {
      emit("input", numberPage);
    };

    return {
      page,
      countPages: Array.from({ length: countPages }, (_, i) => i + 1),
      onClickPrev,
      onClickNext,
      setPage,
    };
  },
});
</script>

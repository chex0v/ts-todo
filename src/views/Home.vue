<template>
  <div class="home">
    <ToDo />
  </div>
</template>

<script lang="ts">
import ToDo from "@/components/ToDo.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {
    ToDo,
  },
});
</script>

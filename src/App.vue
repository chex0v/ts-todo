<template>
  <Navbar />
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
</style>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/UI/Navbar.vue";

export default defineComponent({
  components: {
    Navbar,
  },
});
</script>

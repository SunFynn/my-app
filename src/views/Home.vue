<template>
  <div class="home">
    <HelloWorld>
      <template v-slot:title>title</template>
      <template>content</template>
      <template v-slot:footer="{ a, b }">{{ a }}---{{ b }}</template>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

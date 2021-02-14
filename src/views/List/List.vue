<template>
  <div>
    <img alt="Vue logo" src="@/assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script>

import HelloWorld from "@/components/HelloWorld.vue"; 

export default {
  name: "ViewHome",
  components: { HelloWorld },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

img{
  margin-top:calc(var(--height_title) + var(--height_header));
}
</style>

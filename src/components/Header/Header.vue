<template>
  <nav>
      <h3>{{ msg }}</h3>      
  </nav>
</template>

<script>
export default {
  name: "CompHeader",
  data: () => ({
    msg: "Header Element",
    subtitle: "Header",
  }),
};
</script>

<style src="./Header.scss" lang="scss" scoped/>

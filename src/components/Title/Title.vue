<template>
  <header>
    <h1>{{ msg }}</h1>    
  </header>
</template>

<script>
export default {
  name: "CompTitle",
  data: () => ({
    msg:'Title Element',    
  }),
};
</script>

<style src="./Title.scss" lang="scss" scoped/>  
  

<template>
  <footer>
    <h3>{{ msg }} - {{ new Date().getFullYear() }}</h3>    
  </footer>
</template>

<script>
export default {
  name: "CompFooter",
  data: () => ({
    msg:'Footer Element',    
  }),
};
</script>

<style src="./Footer.scss" lang="scss" scoped/>  
  

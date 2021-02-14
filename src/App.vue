<template>
  <div id="app">    
    <!--This component Header-->
    <CompHeader />

    <!--This component Title-->
    <CompTitle />

    <!--View-->
    <router-view />

    <!--This component Footer-->
    <CompFooter />

  </div>
</template>

<script>
import CompHeader from "@/components/Header/Header.vue";
import CompTitle from "@/components/Title/Title.vue";
import CompFooter from "@/components/Footer/Footer.vue";

export default {
  name: "App",

  components: {
    CompHeader,
    CompTitle,
    CompFooter,
  },

  data: () => ({
    //
  }),
};
</script>

<style src="@/assets/scss/index.scss" lang="scss"/>
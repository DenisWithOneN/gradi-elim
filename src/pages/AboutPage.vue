<script setup>
import Navbar from "../components/general/Navbar.vue";
import Footer from "../components/general/Footer.vue";
import AboutSectionOne from "../components/about/AboutSectionOne.vue";
import AboutSectionTwo from "../components/about/AboutSectionTwo.vue";
import AboutSectionThree from "../components/about/AboutSectionThree.vue";
</script>
<template>
  <body class="min-h-screen flex flex-col justify-between">
    <Navbar></Navbar>
    <section class="container mx-auto">
      <AboutSectionOne></AboutSectionOne>
      <AboutSectionTwo></AboutSectionTwo>
    </section>
    <Footer></Footer>
  </body>
</template>
<style scoped></style>

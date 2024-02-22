<script setup>
import Navbar from "../components/general/Navbar.vue";
import Footer from "../components/general/Footer.vue";
import Hero from "../components/home/Hero.vue";
import Quote from "../components/home/Quote.vue";
import AboutUs from "../components/home/AboutUs.vue";
import Schedule from "../components/home/Schedule.vue";
import Gallery from "../components/home/Gallery.vue";
import EducationalOffer from "../components/home/EducationalOffer.vue";
</script>
<template>
  <body class="min-h-screen flex flex-col justify-between">
    <Navbar></Navbar>
    <Hero></Hero>
    <Quote></Quote>
    <AboutUs></AboutUs>
    <Schedule></Schedule>
    <Gallery></Gallery>
    <EducationalOffer></EducationalOffer>
    <Footer></Footer>
  </body>
</template>
<style>

</style>

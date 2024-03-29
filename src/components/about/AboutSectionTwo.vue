<script setup></script>
<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-center gap-5 mx-10"
  >
    <div class="flex flex-col gap-2 md:gap-4">
      <div
        class="photo2 rounded-2xl w-52 h-24 md:w-72 md:h-40 lg:w-96 lg:h-60"
      ></div>
      <div class="flex gap-4 md:gap-7">
        <div
          class="photo3 rounded-2xl w-24 h-24 md:w-32 md:h-28 lg:w-44 lg:h-40"
        ></div>
        <div
          class="photo4 rounded-2xl w-24 h-24 md:w-32 md:h-28 lg:w-44 lg:h-40"
        ></div>
      </div>
    </div>

    <div class="flex flex-col lg:justify-end lg:items-end">
      <h1
        class="text-center font-heading font-black uppercase text-yellow text-3xl md:text-5xl lg:text-6xl lg:text-end"
      >
        misiunea &<br />
        viziunea noastra
      </h1>
      <div class="text-center">line</div>
      <p
        class="text-darkblue text-center font-body text-sm sm:text-lg md:text-xl xl:text-2xl lg:max-w-2xl lg:text-end"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatum
        id omnis et vitae natus illum est dignissimos deleniti alias amet
        corporis quis ad, asperiores animi tempore officia maiores. Illum.
      </p>
    </div>
  </div>
</template>
<style scoped>
.photo2 {
  background-image: url("src/assets/gallery-images/ZVE05452.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.photo3 {
  background-image: url("src/assets/gallery-images/ZVE05452.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.photo4 {
  background-image: url("src/assets/gallery-images/ZVE05452.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

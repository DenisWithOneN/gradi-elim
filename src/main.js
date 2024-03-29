import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";

import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import EducationOfferPage from "./pages/EducationOfferPage.vue";
import GalleryPage from "./pages/GalleryPage.vue";
import SchedulePage from "./pages/SchedulePage.vue";
import ContactPage from "./pages/ContactPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/offer", component: EducationOfferPage },
  { path: "/gallery", component: GalleryPage },
  { path: "/schedule", component: SchedulePage },
  { path: "/contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(router).mount("#app");

import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/pages/Home.vue';
import Projects from './components/pages/Projects.vue';
import Contacts from './components/pages/Contacts.vue';
import Error404 from './components/pages/Error404.vue';
import ProjectDetails from './components/pages/ProjectDetails.vue';
import TypeProjects from './components/pages/TypeProjects.vue';


const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/progetti",
      name: "projects",
      component: Projects,
    },

    {
      path: "/contatti",
      name: "contacts",
      component: Contacts,
    },
    {
      path: '/dettaglio-progetto/:slug',
      name: 'projectDetails',
      component: ProjectDetails
    },
    {
      path: '/type-project/:slug',
      name: 'typeProjects',
      component: TypeProjects
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error404",
      component: Error404,
    },
  ],
});

export { router };
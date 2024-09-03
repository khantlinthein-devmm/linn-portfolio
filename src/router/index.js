import {createRouter, createWebHistory} from 'vue-router';

// import Home from '../views/Home.vue';
// import About from '../views/About.vue';
// import Project from '../views/Project.vue';
// import Movies from '../views/Movies.vue';
// import Contact from '../views/Contact.vue';

const Home = () => import("../views/Home.vue");

const routes = [
  {
    path : '/',
    name : 'Home',
    component : Home,
  },
  {
    path : '/about',
    name : 'About',
    component : () => import("../views/About.vue"),
  },
  {
    path : '/project',
    name : 'Project',
    component : () => import("../views/Project.vue"),
  },
  {
    path : '/movies',
    name : 'Movies',
    component : () => import("../views/Movies.vue"),
  },
  {
    path : '/contact',
    name : 'Contact',
    component : () => import("../views/Contact.vue"),
  },
];

const router = createRouter ({
  history : createWebHistory(),
  routes,
})

export default router;
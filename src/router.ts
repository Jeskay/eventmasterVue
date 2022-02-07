import { createRouter, createWebHashHistory,  } from "vue-router";
import About from './views/About.vue';
import Tutorial from './views/Tutorial.vue';
import Reviews from './views/Reviews.vue';

const routes =  [
    { path: '/', component: About },
    {path: '/Tutorial', component: Tutorial},
    {path: '/Reviews', component: Reviews}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
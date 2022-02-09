import { createRouter, createWebHashHistory,  } from "vue-router";
import About from './views/About.vue';
import Tutorial from './views/Tutorial.vue';
import Reviews from './views/Reviews.vue';
import Profile from './views/Profile.vue';

const routes =  [
    { path: '/', component: About },
    {path: '/Tutorial', component: Tutorial},
    {path: '/Reviews', component: Reviews},
    {path: '/Profile', component: Profile},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
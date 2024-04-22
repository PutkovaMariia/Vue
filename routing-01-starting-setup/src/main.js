import {createApp} from 'vue';
import {createRouter, createWebHistory} from "vue-router";

import App from './App.vue';
import TeamsList from "@/components/teams/TeamsList.vue";
import UsersList from "@/components/users/UsersList.vue";
import TeamMembers from "@/components/teams/TeamMembers.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/teams'},
        // or we can redirect it inside the path that we want to
        // redirect to (with redirect the url is changed,
        // in alias url is the same)
        //{path: '/teams', component: TeamsList, alias: '/'}, //our-domain.com/teams => TeamsList
        {
            path: '/teams',
            component: TeamsList,
            children: [
                {path: ':teamId', component: TeamMembers, props: true}, // /teams/t1

            ]
        }, //our-domain.com/teams => TeamsList
        {path: '/users', component: UsersList}, //our-domain.com/users => UsersList
        //if no of this routes handling users input we can
        // set our reserved page or any another component that we want
        {path: '/:notFound(.*)', redirect: '/teams'},
    ],
    linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');

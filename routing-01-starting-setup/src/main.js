import {createApp} from 'vue';
import {createRouter, createWebHistory} from "vue-router";

import App from './App.vue';
import TeamsList from "@/components/teams/TeamsList.vue";
import UsersList from "@/components/users/UsersList.vue";
import TeamMembers from "@/components/teams/TeamMembers.vue";
import TeamsFooter from "@/components/teams/TeamsFooter.vue";
import UsersFooter from "@/components/users/UsersFooter.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/teams'},
        // or we can redirect it inside the path that we want to
        // redirect to (with redirect the url is changed,
        // in alias url is the same)
        //{path: '/teams', component: TeamsList, alias: '/'}, //our-domain.com/teams => TeamsList
        {
            name: 'teams',
            path: '/teams',
            components: {default: TeamsList, footer: TeamsFooter},
            children: [
                {name: 'team-members', path: ':teamId', component: TeamMembers, props: true}, // /teams/t1

            ]
        }, //our-domain.com/teams => TeamsList
        {
            path: '/users', components: {
                default: UsersList,
                footer: UsersFooter
            }
        }, //our-domain.com/users => UsersList
        //if no of this routes handling users input we can
        // set our reserved page or any another component that we want
        {path: '/:notFound(.*)', redirect: '/teams'},
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        //console.log(to, from, savedPosition);
        if (savedPosition){
            return savedPosition;
        }
        return {
            left: 0,
            top: 0
        };
    }
});

router.beforeEach(function(to, from, next){
    console.log('global before each');
    console.log(to, from);
    next();//we allow to go to the next page, in case next(false) we reject

    //for example, we can redirect user to needed page like =>
    // if (to.name === 'team-members'){
    //     next();
    // } else{
    //     next({name: 'team-members', params: {teamId: 't2'}});
    // }
});

const app = createApp(App);

app.use(router);

app.mount('#app');

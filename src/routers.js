import HomePage from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import {createRouter,createWebHashHistory} from 'vue-router'

const routes=[
    {
        name:'HomePage',
        component : HomePage,
        path:'/'
    },
    {
        name:'SignUp',
        component: SignUp,
        path:'/sign-up'
    }
]

const router = createRouter({
    history: createWebHashHistory(), //hash mode for vue js routing
    routes
})

export default router;
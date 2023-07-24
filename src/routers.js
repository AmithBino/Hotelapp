import HomePage from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import LoginPage from './components/Login.vue'

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
    },
    {
        name:'LoginPage',
        component: LoginPage,
        path: '/login'
    }
]

const router = createRouter({
    history: createWebHashHistory(), //hash mode for vue js routing
    routes
})

export default router;
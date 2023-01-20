import { createRouter, createWebHistory } from 'vue-router'
import TopPage from '../components/TopPage.vue'

// ルーティングを設定
const routes = [
    {
        path: "/",
        name: "TopPage",
        component: TopPage
    },
    {
        path:'/plan',
        name: 'PlanPage',
        component: () => import('../components/PlanPage.vue')
    },
    {
        path:'/fair',
        name: 'FairPage',
        component: () => import('../components/FairPage.vue')
    },
    {
        path:'/concept',
        name: 'ConceptPage',
        component: () => import('../components/ConceptPage.vue')
    },
    {
        path:'/contact',
        name: 'ContactPage',
        component: () => import('../components/ContactPage.vue')
    }
]

// ルーターを生成
const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes
})

// 外部ファイルにこのオブジェクトを公開
export default router
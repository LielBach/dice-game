import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from '@/components/MainScreen.vue'
import ScoreView from '@/views/ScoresView.vue'
import GameView from '@/views/GameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainScreen
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    },
    {
      path: '/scores',
      name: 'scores',
      component: ScoreView
    }
  ]
})

export default router

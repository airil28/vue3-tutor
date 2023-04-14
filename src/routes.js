import Home from './views/Home.vue'
import About from './views/About.vue'
import Anime from './views/Anime.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' }},
  { path: '/about', component: About, meta: { title: 'About' }},
  { path: '/anime', component: Anime, meta: { title: 'Anime' }},
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }},
]

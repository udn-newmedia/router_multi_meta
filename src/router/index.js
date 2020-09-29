import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Eslite from '../views/Eslite.vue'
import TaipeiMainStation from '../views/taipei-main-station.vue'
import SenseOfCalling from '../views/sense-of-calling.vue'
import Democracy from '../views/democracy.vue'
import Ximen from '../views/ximen.vue'
import StandUpComedy from '../views/stand-up-comedy.vue'
import Food from '../views/food.vue'
import CausewayBayBooks from '../views/causeway-bay-books.vue'
import Paradox from '../views/paradox.vue'
// share
import IndependentBookStore from '../views/independent-bookstore.vue'
import LGBTCulture from '../views/LGBT-culture.vue'
import Globalization from '../views/globalization.vue'
import Bars from '../views/bars.vue'
import ArtAndCuture from '../views/art-and-cuture.vue'
import KetagalanBlvd from '../views/ketagalan-blvd.vue'


Vue.use(VueRouter)

  const routes = [
    // {
    //   path: '/',
    //   redirect: '/about'
    // },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{index:0}
  },
  {
    path:'/eslite',
    name: 'Eslite',
    component: Eslite,
    meta:{index:1}
  },
  {
    path:'/taipei-main-station',
    name: 'taipei-main-station',
    component: TaipeiMainStation,
    meta:{index:2}
  },
  {
    path:'/sense-of-calling',
    name: 'sense-of-calling',
    component: SenseOfCalling,
    meta:{index:3}
  },
  {
    path:'/democracy',
    name: 'democracy',
    component: Democracy
  },
  {
    path:'/ximen',
    name: 'ximen',
    component: Ximen
  },
  {
    path:'/stand-up-comedy',
    name: 'stand-up-comedy',
    component: StandUpComedy
  },
  {
    path:'/food',
    name: 'food',
    component: Food
  },
  {
    path:'/causeway-bay-books',
    name: 'causeway-bay-books',
    component: CausewayBayBooks
  },
  {
    path:'/paradox',
    name: 'paradox',
    component: Paradox
  },
  {
    path:'/independent-bookstore',
    name: 'independent-bookstore',
    component: IndependentBookStore
  },
  {
    path:'/LGBT-culture',
    name: 'LGBT-culture',
    component: LGBTCulture
  },
  {
    path:'/globalization',
    name: 'globalization',
    component: Globalization
  },
  {
    path:'/bars',
    name: 'bars',
    component: Bars
  },
  {
    path:'/art-and-cuture',
    name: 'art-and-cuture',
    component: ArtAndCuture
  },
  {
    path:'/ketagalan-blvd',
    name: 'ketagalan-blvd',
    component: KetagalanBlvd
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

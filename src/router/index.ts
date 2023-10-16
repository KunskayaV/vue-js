import { createRouter, createWebHistory } from 'vue-router'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import { SORT_KEY } from '@/api/constants'
import { getPartialMatchingParam } from '@/api/helpers'
import { sortQueryMap, searchQueryMap } from './constants'
import { getSearchByKeyFromQuery } from './helpers'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: (route: RouteLocationNormalizedLoaded) => {
      const { query } = route

      const sortByValue = (query[SORT_KEY] as string) || ''
      const searchByValue = getSearchByKeyFromQuery(query)
      const searchValue = query[getPartialMatchingParam(searchByValue)] || ''

      return {
        sortQuery: sortByValue && sortQueryMap[sortByValue],
        searchByQuery: searchValue ? searchQueryMap[searchByValue] : '',
        searchQuery: searchValue
      }
    }
  },
  {
    path: '/details/:id(\\d+)',
    name: 'details',
    component: () => import('@/views/MovieDetailsView.vue'),
    props: (route: RouteLocationNormalizedLoaded) => ({ id: parseInt(route.params.id as string) })
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not_found',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router

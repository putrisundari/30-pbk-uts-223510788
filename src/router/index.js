// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import TodoList from '../components/TodoList.vue'
import PostList from '../components/PostList.vue'
import Album from '../components/Album.vue'
import AlbumOpen from '../components/AlbumOpen.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Todos',
        component: TodoList
      },
      {
        path: 'post',
        name: 'Post',
        component: PostList
      },
      {
        path: 'album',
        name: 'Album',
        component: Album
      },
      {
        path: 'album/:id',
        name: 'AlbumOpen',
        component: AlbumOpen
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

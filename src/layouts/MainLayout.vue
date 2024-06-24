<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          UAS PRAK PBK
        </q-toolbar-title>
        <q-space />
        <q-btn flat label="Todos" @click="navigateTo('')" />
        <q-btn flat label="Post" @click="navigateTo('post')" />
        <q-btn flat label="Album" @click="navigateTo('album')" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Putri Sundari (223510788)</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path) => {
  router.push(`/${path}`)
}
</script>
<style scoped>
.container {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(193, 87, 143, 0.2);
  padding: 30px;
  width: 80%;
  max-width: 600px;
  margin: auto;
}

.header {
  background-color: #f2f2f2;
  padding: 10px;
}

.header ul {
  list-style-type: none;
  padding: 0;
}

.header ul li {
  display: inline-block;
  margin-right: 10px;
}

.header ul li .active {
  font-weight: bold;
}

.content {
  margin-top: 20px;
}
</style>

<template>
    <div class="album-container">
      <q-page class="q-pa-md">
        <h1>My Photo Albums</h1>
        <q-list class="album-list">
          <q-item
            v-for="album in albums"
            :key="album.id"
            clickable
            @click="viewAlbum(album.id)"
            class="album-item"
          >
            <q-card class="album-card" flat bordered>
              <q-card-section>
                <div class="row no-wrap items-center">
                  <div class="q-pl-md">
                    <q-item-label class="album-title">{{ album.title }}</q-item-label>
                    <q-item-label caption>Album ID: {{ album.id }}</q-item-label>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-item>
        </q-list>
      </q-page>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const albums = ref([]);
  const router = useRouter();
  
  const fetchAlbums = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
      albums.value = response.data;
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };
  
  const viewAlbum = (id) => {
    router.push(`/album/${id}`);
  };
  
  onMounted(fetchAlbums);
  </script>
  
  <style scoped>
  .album-container {
    background: #fff;
    padding-top: 100px;
    max-height: 100vh;
    overflow-y: auto;
  }
  
  h1 {
    font-family: 'Montserrat', sans-serif;
    color: #2c3e50;
    font-size: 42px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .album-list {
    max-height: calc(100vh - 100px); /* Adjust based on your header height */
    overflow-y: auto;
  }
  
  .album-item {
    margin-bottom: 10px;
  }
  
  .album-card {
    width: 100%;
  }
  
  .album-title {
    font-size: 18px;
    font-weight: bold;
  }
  </style>
  
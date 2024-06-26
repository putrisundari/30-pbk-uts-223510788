<template>
    <div class="album-open-container">
      <q-page class="q-pa-md">
        <q-btn flat label="Back" @click="goBack" icon="arrow_back" class="back-button" />
        <h1>Album Details</h1>
        <div v-if="album">
          <q-card flat bordered class="album-details">
            <q-card-section>
              <div class="row no-wrap items-center">
                <div class="q-pl-md">
                  <q-item-label class="album-title">{{ album.title }}</q-item-label>
                  <q-item-label caption>Album ID: {{ album.id }}</q-item-label>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="photo-grid">
          <div v-for="photo in photos" :key="photo.id" class="photo-item" @click="openImage(photo)">
            <img :src="photo.thumbnailUrl" :alt="photo.title" />
            <div class="photo-title">{{ photo.title }}</div>
          </div>
        </div>
      </q-page>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import { useRoute, useRouter } from 'vue-router'
  
  const album = ref(null)
  const photos = ref([])
  const route = useRoute()
  const router = useRouter()
  const showDialog = ref(false)
  const selectedImageUrl = ref('')
  const selectedImageTitle = ref('')
  
  const fetchAlbumDetails = async () => {
    try {
      const albumId = route.params.id
      const albumResponse = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
      album.value = albumResponse.data
  
      const photosResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      photos.value = photosResponse.data
    } catch (error) {
      console.error('Error fetching album details:', error)
    }
  }
  
  const openImage = (photo) => {
    selectedImageUrl.value = photo.url
    selectedImageTitle.value = photo.title
    showDialog.value = true
  }
  
  const goBack = () => {
    router.back()
  }
  
  onMounted(fetchAlbumDetails)
  </script>
  
  <style scoped>
  .album-open-container {
    margin: 10px 20px 40px;
    background: #fff;
    max-width: 100%;
    max-height: 100vh;
    overflow-y: auto;
  }
  
  h1 {
    font-family: 'Montserrat', sans-serif;
    color: #2c3e50;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .back-button {
    margin-bottom: 20px;
  }
  
  .album-details {
    margin-bottom: 20px;
  }
  
  .photo-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
  
  .photo-item {
    width: 150px;
    cursor: pointer;
    text-align: center;
  }
  
  .photo-item img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  
  .photo-title {
    margin-top: 5px;
    font-size: 14px;
  }
  </style>
  
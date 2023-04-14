<template>
  <div>
    <input
      type="text"
      :v-model="searchQuery"
      placeholder="Search for an anime"
    >
    <!-- <ul>
      <li v-for="anime in searchResults" :key="anime.mal_id">
        {{ anime.title }}
      </li>
    </ul>
    <button class="border-2 border-red-500 p-4 rounded-md" @click="fetchAnime()"> Search</button> -->
    <header>
      <div class="gap-4 flex text-center justify-center ">
        <button
          class="border-2 border-green-400 rounded-lg py-1 px-4">
          Anime
        </button>
        <button class="border-2 border-green-400 rounded-lg py-1 px-4">
          Character
        </button>
        <button class="border-2 border-green-400 rounded-lg py-1 px-4">
          Book
        </button>
      </div>
    </header>
    <body class="bg-gray-200">
    <div class="container mx-auto my-8">
      <div class="flex justify-center">
        <form class="flex items-center">
          <input
          type="text"
          :v-model="searchQuery"
          placeholder="Search for an anime"
          class="w-64 py-2 px-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r-lg"
            @click="fetchAnime(searchQuery),logValue(searchQuery)"
          >
            Search
          </button>
        </form>
      </div>
      <div class="mt-8 p-4 bg-white rounded-lg shadow-lg">
        <p class="text-gray-500 italic">Results go here...</p>
        <ul>
          <li v-for="anime in searchResults" :key="anime">
            {{ anime.title }}
            <img :src="anime.images.jpg.image_url" alt="">
            {{ anime.rating }}
          </li>
          <li>

          </li>
        </ul>
      </div>
    </div>
  </body>
  </div>
</template>

<script lang="ts">
  import axios from 'axios'
  import { defineComponent, ref, reactive } from 'vue'

  export default defineComponent({
    components: {

    },
    setup() {
      const currentPage = ref('home')
      const isActive = reactive({
        activeButton: '',
      })
      const searchQuery = ref('3')
      const searchResults = ref([])
      const data = reactive({
        anime:''
      }
      )

      return {
        data,
        currentPage,
        isActive,
        searchQuery,
        searchResults,
      }
    },
    computed: {

    },
    created() {
      this.fetchAnime()
    },
    mounted(){
      console.log(this.searchQuery)
    },
    beforeUnmount(){

    },

    methods: {
      setSearchQuery(data){
        this.searchQuery = data
      },
      async fetchAnime(id) {
          try {
            const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`)
            this.searchResults = response.data
            console.log(this.searchResults)
            console.log('23')
          } catch (error) {
            console.error(error)
          }
        },
        logValue(value){
          console.log(value)
        }

    },


  })
</script>


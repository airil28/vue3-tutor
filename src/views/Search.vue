<template>
  <div>
    <header>
      <div class="flex justify-center gap-4">
        <button
          class="w-32 border-2 border-green-500 p-2 rounded-md"
          @click="changeActiveTab('anime')"
        >ANIME</button>
        <button
          class="w-32 border-2 border-green-500 p-2 rounded-md"
          @click="changeActiveTab('character')"
        >CHARACTER</button>
        <button
          class="w-32 border-2 border-green-500 p-2 rounded-md"
          @click="changeActiveTab('book')"
        >BOOK</button>
      </div>
    </header>

    <div
      v-if="isActive.activeTab ==='anime' "
      class=" bg-gray-400"
    >
      <h1> ANIME SEARCH </h1>
      <div class="flex gap-4">
        <input type="text" placeholder="search anime" :value="query" @input="query = $event.target.value">

        <button
          @click="fetchAnime()"
          class="border-2 border-blue-500 p-2">
          SEARCH
        </button>
      </div>
      <div>
      </div>
      <div
        v-if="searchData"
        class="bg-gray-400 m-4 w-full">
        {{ searchData.data.title }}
        <img :src="searchData.data.images.jpg.image_url" alt="">
        <div>Synopsis = {{ searchData.data.synopsis }}</div>
      </div>
      <div>
       </div>


    </div>

    <div
      v-else-if="isActive.activeTab ==='character'"
      class=" bg-green-200"
    >
      <h1> CHARACTER SEARCH </h1>
      <div class="flex gap-4">
        <input type="text" placeholder="search anime">
        <button class="border-2 border-blue-500 p-2">SEARCH</button>
      </div>
      <div
        v-if="activeTab ==='datas' "
        class="bg-gray-400 m-4 w-full">
        {{ activeTab }}
      </div>
      <div v-else>
        No Data
      </div>
    </div>

    <div v-else>
      <h1> BOOK SEARCH </h1>
      <div class="flex gap-4">
        <input type="text" placeholder="search anime">
        <button class="border-2 border-blue-500 p-2">SEARCH</button>
      </div>
      <div
        v-if="activeTab ==='datas' "
        class="bg-gray-400 m-4 w-full">
        {{ activeTab }}
      </div>
      <div v-else>
        No Data
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  components: {},
  setup(){
    // ref
    const activeTab ='data'

    // reactive
    const isActive = reactive({
      activeTab : 'anime',
      activeObject: '',
    })
    const query = ref('')
    const searchData = ref('')


    function changeActiveTab(value){
      isActive.activeTab = value
    }
    return{
      activeTab,
      isActive,
      changeActiveTab,
      query,
      searchData,
      // changeQuery
    }



  },
  methods:{
    async fetchAnime(){
      console.log(this.query)
      let response
      try{
        if(this.query ==''){
           response = await axios.get(`https://api.jikan.moe/v4/anime/1`)
        }
        else
        { response = await axios.get(` https://api.jikan.moe/v4/anime?q=${this.query}`)}

        // const response = await axios.get('https://api.jikan.moe/v4/anime/1')
        // const response = await axios.get('https://api.jikan.moe/v4/anime/1')
        this.searchData = response.data
        console.log(this.searchData)
        console.log('https://api.jikan.moe/v4/anime?q=spy&sfw')
      }

    catch(error){
      console.error(error)
    }
  },
  logData(){
    console.log(this.query)
  },
  created(){

  },
  mounted(){
    console

  },
  beforeUnmount(){

  }
}
})
</script>

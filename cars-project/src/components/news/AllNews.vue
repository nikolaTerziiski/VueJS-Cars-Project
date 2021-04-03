<template>
  <div>
    <button style="justify-content:center; margin-top: 15px; margin-bottom: 15px" type="button" class="btn btn-primary">
        <router-link style="color: black" :to="{name: 'CreateNews'}">Add new</router-link>
    </button>
    <div class="list-group">
      <div v-for="oneNew in news" :key=oneNew._id href="/news/details/" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{oneNew.topic}}   |     <router-link style="font-size: 15px" :to="{name: 'NewsDetails', params: {id: oneNew._id}}">Read more</router-link></h5>
          <small class="text-muted">by {{oneNew.authorName}}</small>
        </div>
        <p class="mb-1">{{oneNew.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {newsService} from '../../services/newsService.js'

export default {
  data() {
    return {
      news: {}
    }
  },
  created() {
    this.generateAllnews();
  },
  methods: {
    generateAllnews(){
        newsService.getAllNews().then((response) => {
        this.news = response.data;
      });
    } 
  },
  mixins: [newsService]
}
</script>

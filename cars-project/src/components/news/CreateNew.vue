<template>
  <form style="margin-top:50px" @submit.prevent="onCreateNew">
  <div class="form-group">
    <label for="Topic">Topic</label>
    <input type="text" class="form-control" id="topicExample" required v-model="$v.topic.$model" aria-describedby="topic" placeholder="Enter the topic of the new">
  </div>
  <div class="form-group">
    <label for="informationNew">Information about the News</label>
    <textarea class="form-control" id="informationNew" required v-model="$v.description.$model" rows="10" placeholder="Description..."></textarea>
  </div>
  <div class="form-group">
    <label for="authorName">Your name:</label>
    <input type="text" class="form-control" required v-model="$v.authorName.$model" placeholder="Enter your name">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>

import {required, minLength, maxLength, email} from 'vuelidate/lib/validators'
import router from '../../router.js'
import {newsService} from '../../services/newsService.js'

export default({
  data() {
    return{
      topic: "",
      description: "",
      authorName: "",
    }
  },
  methods: {
    onCreateNew() {
         const {topic, description, authorName} = this

         this.$v.$touch();
        if(this.$v.$invalid){
                console.log('errors');
        }
        newsService.createNew(topic, description, authorName)
        .then((res) => {console.log(res)});

        router.push('/');
        router.go();
    }
  },
  validations: {
        topic: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(45)
        },
        description: {
          required,
          minLength: minLength(20),
            maxLength: maxLength(600)
        },
        authorName: {
          required,
          minLength: minLength(6),
           maxLength: maxLength(30)
        }
  },
})
</script>

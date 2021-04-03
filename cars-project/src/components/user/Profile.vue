<template>
<div>

    <v-avatar
            class="profile"
            color="grey"
            size="200"
            tile
            style="margin-top : 25px"
          >
            <v-img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"></v-img>
          </v-avatar>
        <v-simple-table
    fixed-header
    height="400px"
    max-width:400px
    style="width:400px;justify-content: center;margin-left: 600px; margin-top: 50px"
  >
    <template v-slot:default>
      <tbody>
        <tr >
          <td>Username</td>
          <td>{{user.username}}</td>
        </tr>
         <tr >
          <td>Email</td>
          <td>{{user.email}}</td>
        </tr> <tr >
          <td>Created on</td>
          <td>{{user._kmd.ect.toString()}}</td>
        </tr> <tr >
          <td>Cars created: </td>
          <td>{{user.carsCount}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>

<script>
import {store} from '../../store.js'
import {carService} from '../../services/carServices.js'

export default {
    data() {
        return {
          user: {}
        }
    },
    created() {
          this.generateUser();
    },
    methods: {
      generateUser(){
          this.user = store.getters['userAuth/getUserInfo']

          carService.getCarCountForUser().then((response) => {
             this.user.carsCount = response.data.length;
          });
      }
    }
}
</script>

<template>
  <div class="row">
    <div class="col-md-8">
      <img style="width: 600px; height: 550px; margin-top: 25px" class="img-fluid" :src="this.car.carImage" alt="">
    </div>

    <div class="col-md-4">
      <h3 class="my-3">{{this.car.carBrand}}</h3>
      <p>{{this.car.description}}</p>
      <br>
      <br>
      <br>
      <h3 class="my-3">Car spec details</h3>
      <ul>
        <li>{{this.car.carModel}}</li>
        <li>{{this.car.price}}.00 EUR</li>
      </ul>
      <div v-if=this.car.isUserCurrent>
        <button class="btn btn-warning my-4" type="submit"><router-link :to="{name: 'editCar', params: {id: this.car._id}}">Edit car</router-link></button>
    </div>
    <div v-else>
    </div>
    </div>
  </div>
  <!-- /.row -->
<!-- /.container -->
</template>

<script>
import {carService} from '../../services/carServices.js'
import router from '../../router.js'
import {store} from '../../store.js'
export default {
    data() {
        return {
          car: {},
        }
    },
    created() {
      this.generateData();
    },
    methods: {
      generateData() {
        let carId = this.$route.params.id
        carService.getOneCar(carId).then((response) => {
          this.car = response.data
          let userInfo = store.getters['userAuth/getUserInfo']
          
          userInfo._id == response.data._acl.creator ? this.car.isUserCurrent = true : this.car.isUserCurrent = false;
          

        }).catch(() => {
            router.push('/NotFound')
            router.go();
        });
      }
    },
}
</script>

<style>

</style>
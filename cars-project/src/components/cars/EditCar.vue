<template>
  <!-- Default form contact -->
<form class="text-center border border-light p-5" @submit.prevent="onEditCar">
    <p class="h4 mb-4">Edit Car</p>

    <!-- Name -->
    <div class="row">
        <div class="col">
         <input type="text" id="defaultContactFormName" required v-model="$v.carBrand.$model" class="form-control mb-4 col-sm-12" :placeholder="this.carBrand">
        </div>
        <div class="col">
         <input type="text" id="defaultContactFormName" required v-model="$v.carModel.$model" class="form-control mb-4 col-sm-12" :placeholder="this.carModel">
        </div>
    </div>

    <div class="row">
        <div class="col">
            <input type="currency" id="defaultContactFormEmail" required v-model="$v.price.$model" class="form-control mb-4 col-sm-12" :placeholder="this.price">
        </div>
    </div>
    <div class="row">
        <div class="col">
            <input type="imageURl" id="defaultContactFormEmail" required v-model="$v.carImage.$model" class="form-control mb-4 col-sm-12" :placeholder="this.carImage">
        </div>
    </div>

    <!-- Message -->
    <div class="form-group">
        <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" required v-model="$v.description.$model" rows="6" :placeholder="this.description"></textarea>
    </div>

    <!-- Send button -->
    <button class="btn btn-info btn-block col-sm-12" type="submit" :disabled="$v.$error">Edit Car</button>

</form>
<!-- Default form contact -->
</template>
<script>
/* eslint-disable */
import {required, minLength, maxLength, email} from 'vuelidate/lib/validators'
import {carService} from '../../services/carServices.js'
import router from '../../router.js'

export default {
    data() {
        return {
          carId: "",
          carBrand: "",
          carModel: "",
          price : "",
          carImage: "",
          description: "",
        }
    },
    created() {
      this.generateCarProperties()
    },
    methods: {
         generateCarProperties(){
            let paramId = this.$route.params.id
            this.carId = paramId;
             carService.getOneCar(paramId).then((response) => {
               
                let carData = response.data

                this.carBrand = carData.carBrand;
                this.carModel = carData.carModel;
                this.price = carData.price;
                this.carImage = carData.carImage;
                this.description = carData.description; 
            }).catch((error) => {
              router.push('/NotFound')
              router.go();
            })
        },
        onEditCar() {
          const {
            carId,
            carBrand,
            carModel,
            price,
            carImage,
            description,
          } = this;

          console.log(carId);
          this.$v.$touch();
          if(this.$v.$invalid){
            console.log('invalid');
            return;
          }

          carService.updateCar(carId, carBrand, carModel, price, carImage, description)
          .then(() => {
            console.log('successful edit');

            router.push({name: 'carDetails', params: {id: carId}});
            router.go();
          }).catch((error) => {
            console.log(error)
            return;
          });
        }
    },
    validations: {
        carBrand: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(20)
        },
        carModel: {
          required,
          minLength: minLength(2),
            maxLength: maxLength(20)
        },
        price: {
          required,
          minLength: minLength(2),
            maxLength: maxLength(20)
        },
        carImage: {
            required
        },
        description: {
          required,
          minLength: minLength(2),
            maxLength: maxLength(500)
        }
  },
}
</script>

<style>
form {
  margin: 0 auto;
  width: 700px
}
</style>
<template>
  <div></div>
</template>


<script>

export default {
    created() {
      const { dispatch } = this.$store
      dispatch('userAuth/logout');
    }
}
</script>

<style>

</style>
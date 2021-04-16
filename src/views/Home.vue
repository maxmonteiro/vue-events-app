<template>
  <div class="col-md-12">
    <h2>Home</h2>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios.get(this.$apiURL + '/users/')
      .then(({data}) => {
        console.log('data', data);
      }).catch((err) => {
        console.error(err);
      });
    }
  }
}
</script>

<style scoped>
</style>
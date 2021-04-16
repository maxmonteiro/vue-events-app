<template>
  <div class="col-md-12">
    <form>
      <h2 class="text-center mb-4">Login</h2>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="E-mail"
            v-model="form.email"
        >
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Senha"
            v-model="form.password"
        >
      </div>

      <div class="form-group text-center">
        <button class="btn btn-primary"
            @click.prevent="doLogin"
        >Entrar</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
      return {
          form: {
              email: '',
              password: ''
          }
      }
  },
  methods: {
      doLogin() {
          /* let obj = this.form;
          axios.post('api/token/', obj)
          .then(({data}) => {
            console.log('data', data);
              let token = data.token;
              localStorage.setItem('token', token);
              axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          }).catch((err) => {
            console.error(err);
          }); */
          
          // https://reqres.in/
          /* axios.post('api/login', obj)
          .then(({data}) => {
              console.log('data', data);
              let token = data.token;
              localStorage.setItem('token', token);
              axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          }).catch((err) => {
              console.error(err);
          }); */
      }
  }
}
</script>

<style scoped>
form {
  width: 100%;
  max-width: 330px;
  margin: auto;
  padding: 15px;
  padding-top: 200px;
}
</style>
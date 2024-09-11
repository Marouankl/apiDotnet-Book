<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input v-model="credentials.email" type="email" id="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input v-model="credentials.password" type="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const credentials = ref({
      email: '',
      password: ''
    });
    const errorMessage = ref('');

    const login = async () => {
      try {
        const response = await axios.post('https://localhost:7031/api/Auth/login', credentials.value);
        const token = response.data.token;

        // Sauvegarder le token dans le localStorage
        localStorage.setItem('authToken', token);

        // Rediriger l'utilisateur après connexion
        router.push('/');
      } catch (error) {
        errorMessage.value = 'Login failed. Please check your email and password.';
      }
    };

    return {
      credentials,
      errorMessage,
      login
    };
  }
};
</script>

<style scoped>
/* Ajoutez ici vos styles */
</style>

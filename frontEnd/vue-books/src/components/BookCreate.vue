<template>
    <div>
      <h1>Create Book</h1>
      <form @submit.prevent="createBook">
        <div>
          <label for="title">Title:</label>
          <input v-model="book.title" type="text" id="title" required />
        </div>
        <div>
          <label for="description">Description:</label>
          <input v-model="book.description" type="text" id="description" required />
        </div>
        <div>
          <label for="price">Price:</label>
          <input v-model="book.price" type="number" id="price" required />
        </div>
        <div>
          <label for="auteur">Author:</label>
          <input v-model="book.auteur" type="text" id="auteur" required />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  
  export default {
    data() {
      return {
        book: {
          title: '',
          description: '',
          price: 0,
          auteur: ''
        }
      };
    },
    methods: {
      async createBook() {
        try {
          await axios.post('https://localhost:7031/api/Books', this.book);
          this.$router.push('/');
        } catch (error) {
          console.error('Failed to create book:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Ajoutez ici vos styles */
  div {
    margin: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin: 10px 0 5px;
  }
  
  input {
    margin-bottom: 15px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  
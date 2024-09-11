<template>
    <div>
      <h1>Book List</h1>
      <ul>
        <li v-for="book in books" :key="book.id">
            {{ book.title }} - {{ book.description }} - {{ book.price }} - {{ book.auteur }}
            <button @click="editBook(book.id)">Edit</button>
            <button @click="deleteBook(book.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        books: []
      };
    },
    mounted() {
      this.fetchBooks();
    },
    methods: {
      async fetchBooks() {
        try {
          const response = await axios.get('https://localhost:7031/api/Books'); 
          this.books = response.data;
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Ajoutez ici vos styles */
  </style>
  
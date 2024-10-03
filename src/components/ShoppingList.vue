<template>
    <div>
      <!-- Navbar with Cart Icon -->
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">My Store</b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="showCartModal">
            <b-icon icon="cart" variant="warning">My Cart</b-icon>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
  
      <!-- Fruits Shopping List -->
      <div class="container mt-5">
        <h2>Fruits Shopping List</h2>
        <b-row>
          <b-col
            v-for="(fruit, index) in fruitsList"
            :key="index"
            cols="12"
            md="6"
            lg="4"
            class="mb-4"
          >
            <b-card
              :title="fruit.name"
              class="text-center"
              img-top
              :img-src="fruit.image"
              img-alt="fruit.name"
              img-height="200"
            >
              <b-card-text>
                {{ fruit.description }}
              </b-card-text>
              <b-button variant="primary" @click="addToCart(fruit)">Add to Cart</b-button>
            </b-card>
          </b-col>
        </b-row>
      </div>
  
      <!-- Cart Modal -->
      <b-modal v-model="cartModal" title="Your Cart" hide-footer>
        <div v-if="cartItems.length > 0">
          <ul>
            <li v-for="(item, index) in cartItems" :key="index">
              {{ item.name }} - ₹{{ item.price }}
            </li>
          </ul>
        </div>
        <div v-else>
          <p>Your cart is empty.</p>
        </div>
      </b-modal>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ShoppingList',
    data() {
      return {
        cartModal: false, // Controls modal visibility
        cartItems: [], // Holds added items in the cart
        fruitsList: [
          {
            name: "Apple",
            description: "A sweet, crunchy fruit that is good for health.",
            image: "https://via.placeholder.com/200x150?text=Apple",
            price: 1.99,
          },
          {
            name: "Banana",
            description: "A soft, sweet fruit rich in potassium.",
            image: "https://via.placeholder.com/200x150?text=Banana",
            price: 0.99,
          },
          {
            name: "Orange",
            description: "A citrus fruit that is juicy and rich in Vitamin C.",
            image: "https://via.placeholder.com/200x150?text=Orange",
            price: 2.49,
          },
          {
            name: "Grapes",
            description: "A small, juicy fruit available in different colors.",
            image: "https://via.placeholder.com/200x150?text=Grapes",
            price: 3.99,
          },
          {
            name: "Mango",
            description: "A tropical fruit that is sweet and juicy, often called the king of fruits.",
            image: "https://via.placeholder.com/200x150?text=Mango",
            price: 1.49,
          },
        ],
      };
    },
    methods: {
      addToCart(fruit) {
        this.cartItems.push(fruit); // Add selected fruit to the cart
      },
      showCartModal() {
        this.cartModal = true; // Show cart modal
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
  }
  </style>
  
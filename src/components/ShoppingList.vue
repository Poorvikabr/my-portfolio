<template>
  <div>
    <!-- Navbar with Cart Icon -->
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">My Store</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="showCartModal">
          <b-icon icon="cart" variant="warning"
            >My Cart ({{ cartItems.length }})</b-icon
          >
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
            @click="showCartModalDetails"
          >
            <b-card-text>
              {{ fruit.description }}
              <br />
              <strong>Price: ₹{{ fruit.price }} per kg</strong>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>

    <div>
      <b-modal
        v-for="(fruit, index) in fruitsList"
        :key="index"
        cols="12"
        md="6"
        lg="4"
        class="mb-4"
        v-model="cartModalDetails"
        hide-footer
        title="Descripition"
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
            <br />
            <strong>Price: ₹{{ fruit.price }} per kg</strong>
          </b-card-text>
        </b-card>
        <b-img></b-img>
        <b-button variant="primary" @click="addToCart(fruit)"
          >Add to Cart</b-button
        >
      </b-modal>
    </div>

    <!-- Cart Modal -->
    <b-modal v-model="cartModal" title="Your Cart" hide-footer>
      <div v-if="cartItems.length > 0">
        <ul>
          <li v-for="(item, index) in cartItems" :key="index">
            {{ item.name }} - ₹{{ item.price }} per kg
            <b-button variant="danger" size="sm" @click="removeFromCart(index)"
              >Remove</b-button
            >
          </li>
        </ul>
        <b-button @click="checkoutFn()">Check Out</b-button>
      </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ShoppingList",
  data() {
    return {
      cartModal: false,
      cartModalDetails: false,
      cartItems: [],
      selectedItems: [],
      fruitsList: [
        {
          name: "Apple",
          description: "A sweet, crunchy fruit that is good for health.",
          image:
            "https://www.mashed.com/img/gallery/popular-types-of-apples-and-what-theyre-used-for/l-intro-1634566536.jpg",
          price: 300,
        },
        {
          name: "Banana",
          description: "A soft, sweet fruit rich in potassium.",
          image:
            "https://www.popoptiq.com/wp-content/uploads/2019/01/4-28-1-1.jpg",
          price: 80,
        },
        {
          name: "Orange",
          description: "A citrus fruit that is juicy and rich in Vitamin C.",
          image:
            "https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Fresh-Organic-Tangerine-Oranges-with-Leaves.jpg",
          price: 250,
        },
        {
          name: "Grapes",
          description: "A small, juicy fruit available in different colors.",
          image: "https://images6.alphacoders.com/368/368747.jpg",
          price: 280,
        },
        {
          name: "Mango",
          description:
            "A tropical fruit that is sweet and juicy, often called the king of fruits.",
          image:
            "https://www.tastingtable.com/img/gallery/how-to-tell-if-a-mango-has-gone-bad/l-intro-1654872594.jpg",
          price: 350,
        },
        {
          name: "Litchi",
          description:
            "A tropical fruit that is sweet and juicy, often called the king of fruits.",
          image:
            "https://static.toiimg.com/photo/msid-69913666/69913666.jpg?1369636",
          price: 400,
        },
      ],
    };
  },
  methods: {
    checkoutFn() {
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
      this.$router.push("/checkout");
    },

    addToCart(fruit) {
      this.cartItems.push(fruit);
    },
    showCartModal() {
      this.cartModal = true;
    },
    showCartModalDetails() {
      this.cartModalDetails = true;
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
}
</style>

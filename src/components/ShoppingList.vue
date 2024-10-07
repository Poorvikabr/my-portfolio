<template>
  <div>
    <!-- Navbar with Cart Icon -->
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">My Store</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="showCartModal">
          My Cart ({{ cartItems.length }})
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <!-- Fruits Shopping List -->
    <b-container class="my-5">
      <h2 class="my-4">Fruits Shopping List</h2>
      <b-row>
        <b-col
          v-for="fruit in fruitsList"
          :key="fruit.id"
          cols="12"
          md="6"
          lg="3"
          class="mb-4"
        >
          <b-card no-body style="height: 100%">
            <div>
              <img
                @click="showCartModalDetails(fruit)"
                style="object-fit: cover"
                height="150px"
                width="100%"
                :src="fruit.images.length > 0 ? fruit.images[0] : ''"
                alt=""
              />
              <div class="p-2">
                <div @click="showCartModalDetails(fruit)">
                  <b-card-title>
                    {{ fruit.name }}
                  </b-card-title>
                  <b-card-text class="text-truncate">
                    {{ fruit.description }}
                    <br />
                    <strong>Price: ₹{{ fruit.price }} per kg</strong>
                  </b-card-text>
                </div>
                <div class="mt-4">
                  <b-button
                    v-if="checkIfAvailableOnCart(fruit)"
                    variant="danger"
                    @click="removeFromCart(fruit)"
                  >
                    Remove from Cart
                  </b-button>
                  <b-button v-else variant="primary" @click="addToCart(fruit)">
                    Add to Cart
                  </b-button>
                </div>
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <!-- Cart Modal -->
    <b-modal v-model="cartModal" title="Your Cart" hide-footer>
      <div v-if="cartItems.length > 0">
        <b-card v-for="(item, index) in cartItems" :key="index" class="mb-3">
          <div class="d-flex align-items-center justify-content-between">
            <!-- Item name and price -->
            <div>
              <strong>{{ item.name }}</strong> - ₹{{ item.price }} per kg
            </div>

            <!-- Quantity control -->
            <div class="d-flex align-items-center">
              <label for="sb-inline" class="mr-2">Qty:</label>
              <b-form-spinbutton
                id="sb-inline"
                v-model="item.quantity"
                @input="updateCartQuantity(item)"
                inline
                min="1"
                max="100"
                size="sm"
              ></b-form-spinbutton>
            </div>

            <!-- Remove button -->
            <b-button
              variant="danger"
              size="sm"
              @click="removeFromCart(item)"
              class="ml-2"
            >
              Remove
            </b-button>
          </div>
        </b-card>

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
      currentSelectedFruit: null,
      cartModal: false,
      cartModalDetails: false,
      cartItems: [],
      selectedItems: [],
      fruitsList: [
        {
          id: "1",
          name: "Apple",
          description: "A sweet, crunchy fruit that is good for health.",
          images: [
            "https://www.mashed.com/img/gallery/popular-types-of-apples-and-what-theyre-used-for/l-intro-1634566536.jpg",
          ],
          price: 300,
          isAddedToCart: false,
          quantity: 1,
        },
        {
          id: "2",
          name: "Banana",
          description: "A soft, sweet fruit rich in potassium.",
          images: [
            "https://www.popoptiq.com/wp-content/uploads/2019/01/4-28-1-1.jpg",
          ],
          price: 80,
          isAddedToCart: false,
          quantity: 1,
        },
        {
          id: "3",
          name: "Orange",
          description: "A citrus fruit that is juicy and rich in Vitamin C.",
          images: [
            "https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Fresh-Organic-Tangerine-Oranges-with-Leaves.jpg",
          ],
          price: 250,
          isAddedToCart: false,
          quantity: 1,
        },
        {
          id: "4",
          name: "Grapes",
          description: "A small, juicy fruit available in different colors.",
          images: ["https://images6.alphacoders.com/368/368747.jpg"],
          price: 280,
          isAddedToCart: false,
          quantity: 1,
        },
        {
          id: "5",
          name: "Mango",
          description:
            "A tropical fruit that is sweet and juicy, often called the king of fruits.",
          images: [
            "https://www.tastingtable.com/img/gallery/how-to-tell-if-a-mango-has-gone-bad/l-intro-1654872594.jpg",
          ],
          price: 350,
          isAddedToCart: false,
          quantity: 1,
        },
        {
          id: "6",
          name: "Litchi",
          description: "A tropical fruit that is juicy and refreshing.",
          images: [
            "https://static.toiimg.com/photo/msid-69913666/69913666.jpg?1369636",
          ],
          price: 400,
          isAddedToCart: false,
          quantity: 1,
        },
      ],
    };
  },
  watch: {
    cartItems() {
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
  },
  mounted() {
    const localSavedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    this.cartItems = localSavedCartItems ? localSavedCartItems : [];
  },
  methods: {
    checkIfAvailableOnCart(fruit) {
      return this.cartItems.some((cart) => cart.id === fruit.id);
    },
    checkoutFn() {
      this.$router.push("/checkout");
    },
    showCartModal() {
      this.cartModal = true;
    },
    showCartModalDetails(fruit) {
      this.currentSelectedFruit = fruit;
      this.cartModalDetails = true;
    },
    addToCart(fruit) {
      fruit.quantity = 1;
      this.cartItems.push(fruit);
      this.$bvToast.toast(`${fruit.name} added to the cart!`, {
        title: "Item Added",
        variant: "success",
        autoHideDelay: 3000, // Auto hide after 3 seconds
        solid: true,
        position: "bottom-center",
      });
    },
    removeFromCart(fruit) {
      this.cartItems = this.cartItems.filter((item) => item.id !== fruit.id);
      this.$bvToast.toast(`${fruit.name} removed form the cart!`, {
        title: "Item Removed",
        variant: "danger",
        autoHideDelay: 3000, // Auto hide after 3 seconds
        solid: true,
      });
    },
    updateCartQuantity(fruit) {
      const cartItem = this.cartItems.find((item) => item.id === fruit.id);
      if (cartItem) {
        cartItem.quantity = fruit.quantity;
        localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
      }
    },
  },
};
</script>

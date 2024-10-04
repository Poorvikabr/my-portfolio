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
          v-for="(fruit, index) in fruitsList"
          :key="index"
          cols="12"
          md="6"
          lg="4"
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
                    >Remove from Cart</b-button
                  >
                  <b-button v-else variant="primary" @click="addToCart(fruit)"
                    >Add to Cart</b-button
                  >
                </div>
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <b-modal
      v-model="cartModalDetails"
      hide-footer
      hide-header
      scrollable
      size="xl"
    >
      <b-card
        v-if="currentSelectedFruit"
        :title="currentSelectedFruit.name"
        img-height="200"
      >
        <b-row>
          <b-col cols="4">
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              indicators
            >
              <b-carousel-slide
                v-for="(image, index) in currentSelectedFruit.images"
                :key="index"
                caption="First Slide"
                :img-src="image"
              ></b-carousel-slide>
            </b-carousel>
          </b-col>
          <b-col cols="8">
            <b-card-text>
              {{ currentSelectedFruit.description }}
              <br />
              <strong>Price: ₹{{ currentSelectedFruit.price }} per kg</strong>
            </b-card-text>
            <b-img></b-img>
            <b-button variant="primary" @click="addToCart(fruit)"
              >Add to Cart</b-button
            >
          </b-col>
        </b-row>
      </b-card>
      <div class="my-4" v-else>
        <div><strong>Please select a fruit first</strong></div>
      </div>
    </b-modal>

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
            "https://www.mashed.com/img/gallery/popular-types-of-apples-and-what-theyre-used-for/l-intro-1634566536.jpg",
            "https://www.mashed.com/img/gallery/popular-types-of-apples-and-what-theyre-used-for/l-intro-1634566536.jpg",
          ],
          price: 300,
          isAddedToCart: false,
          quantity: 10,
        },
        {
          id: "2",
          name: "Banana",
          description: "A soft, sweet fruit rich in potassium.",
          images: [
            "https://www.popoptiq.com/wp-content/uploads/2019/01/4-28-1-1.jpg",
            "https://www.collinsdictionary.com/images/full/banana_64728013.jpg",
            "https://www.eatthis.com/wp-content/uploads/sites/4/2020/08/bunch-of-bananas.jpg",
          ],
          price: 80,
          isAddedToCart: false,
          quantity: 20,
        },
        {
          id: "3",
          name: "Orange",
          description: "A citrus fruit that is juicy and rich in Vitamin C.",
          images: [
            "https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Fresh-Organic-Tangerine-Oranges-with-Leaves.jpg",
            "https://static.libertyprim.com/files/familles/orange-large.jpg?1569271834",
            "https://i.ndtvimg.com/mt/cooks/2014-11/orange.jpg",
          ],
          price: 250,
          isAddedToCart: false,
          quantity: 15,
        },
        {
          id: "4",
          name: "Grapes",
          description: "A small, juicy fruit available in different colors.",
          images: [
            "https://images6.alphacoders.com/368/368747.jpg",
            "https://cdn.britannica.com/95/7595-050-F5BC3C38/Bunch-of-red-grapes.jpg",
            "https://www.jiomart.com/images/product/600x600/590000008/super-grapes-black-seedless-500-g-product-images-o590000008-p590000008-0-202207271536.jpg",
          ],
          price: 280,
          isAddedToCart: false,
          quantity: 12,
        },
        {
          id: "5",
          name: "Mango",
          description:
            "A tropical fruit that is sweet and juicy, often called the king of fruits.",
          images: [
            "https://www.tastingtable.com/img/gallery/how-to-tell-if-a-mango-has-gone-bad/l-intro-1654872594.jpg",
            "https://cdn.britannica.com/82/170682-050-DC17EB8D/Ripe-mango-fruit.jpg",
            "https://i.ndtvimg.com/mt/cooks/2014-11/mango.jpg",
          ],
          price: 350,
          isAddedToCart: false,
          quantity: 8,
        },
        {
          id: "6",
          name: "Litchi",
          description: "A tropical fruit that is juicy and refreshing.",
          images: [
            "https://static.toiimg.com/photo/msid-69913666/69913666.jpg?1369636",
            "https://cdn.britannica.com/47/75947-050-9057DC09/Lychee-fruit.jpg",
            "https://i.ndtvimg.com/mt/cooks/2014-11/litchi.jpg",
          ],
          price: 400,
          isAddedToCart: false,
          quantity: 5,
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
    let localSavedCartItems = JSON.parse(localStorage.getItem("cartItems")); // retrieve data
    this.cartItems = localSavedCartItems ? localSavedCartItems : []; // assign retirived data
  },
  methods: {
    checkIfAvailableOnCart(fruit) {
      const hasFruit = this.cartItems.find((cart) => {
        return cart.id == fruit.id;
      });
      return hasFruit ? true : false;
    },
    checkoutFn() {
      this.$router.push("/checkout");
    },

    addToCart(fruit) {
      this.cartItems.push(fruit);
    },
    showCartModal() {
      this.cartModal = true;
    },
    showCartModalDetails(fruit) {
      this.currentSelectedFruit = fruit;
      this.cartModalDetails = true;
    },
    removeFromCart(fruit) {
      this.cartItems.splice(this.cartItems.indexOf(fruit), 1);
    },
  },
};
</script>

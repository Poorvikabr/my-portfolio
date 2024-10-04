<template>
  <b-container class="my-4">
    <b-card style="max-width: 600px" class="mx-auto">
      <div v-if="cartItems.length > 0">
        <div
          class="d-flex justify-content-between my-4"
          v-for="(item, index) in cartItems"
          :key="index"
        >
          <div>
            <b-button variant="danger" size="sm" @click="removeFromCart(index)"
              >-</b-button
            >
            {{ item.name }}
          </div>
          <div>₹{{ item.price }}</div>
        </div>
        <hr />
        <div class="d-flex justify-content-between my-4">
          <div>Total Price</div>
          <dicv
            ><strong>Rs. {{ totalPrice }}</strong></dicv
          >
        </div>
        <b-button block variant="success" @click="payNow()">Pay Now</b-button>
      </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "CheckOut",
  data() {
    return {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    };
  },
  methods: {
    payNow() {
      alert("HIP HIP HUrray");
    },
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (accumulator, current) => accumulator + current.price,
        0
      );
    },
  },
};
</script>

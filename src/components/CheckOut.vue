<template>
  <b-container class="my-4">
    <b-card style="max-width: 600px" class="mx-auto">
      <div v-if="cartItems.length > 0">
        <div
          class="d-flex justify-content-between my-4"
          v-for="(item, index) in cartItems"
          :key="index"
        >
          <div class="d-flex align-items-center">
            <b-icon
              @click="removeFromCart(index)"
              variant="danger"
              icon="trash"
              class="mr-2"
            ></b-icon>

            {{ item.name }} (₹{{ item.price }} per kg x {{ item.quantity }})
          </div>
          <div>₹{{ item.price * item.quantity }}</div>
        </div>
        <hr />
        <div class="d-flex justify-content-between my-4">
          <div>Total Price</div>
          <div>
            <strong>₹{{ totalPrice }}</strong>
          </div>
        </div>
        <b-button block variant="success" @click="sendWhatsApp">Pay Now</b-button>
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
    sendWhatsApp() {
        const upiId = 'krrohit6@ybl';
        const totalPrice = this.totalPrice;
        const message = `Total Price: ₹${totalPrice}\nPlease make your payment using the following UPI ID: ${upiId}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      },
    payNow() {
      alert("Payment Successful!");
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (accumulator, current) =>
          accumulator + current.price * current.quantity,
        0
      );
    },
  },
};
</script>

<template>
    <div>
        <h1>Check Out</h1>
        {{cartItems}}
    </div>
</template>


<script>
export default {
  name: "CheckOut",
  data() {
    return {
          cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]
    }
}
};
</script>
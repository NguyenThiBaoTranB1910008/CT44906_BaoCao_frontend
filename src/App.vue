<script>
  import MyHeader from "@/components/MyHeader.vue";
  import MyFooter from "@/components/MyFooter.vue";
  import ProductPage from "@/views/ProductPage.vue";
  import OrderPage from "@/views/OrderPage.vue";
  export default{
    components:{
      MyHeader,
      MyFooter,
      OrderPage,
    },
  };
</script>

<template>
  <div id="app">
    <!-- <ProductPage/> -->
    <MyHeader/>
      <router-view/>
      <MyFooter/>
  </div>
</template>

<style>
  .page{
    max-width: 400px;
    margin: auto;
  }
</style>
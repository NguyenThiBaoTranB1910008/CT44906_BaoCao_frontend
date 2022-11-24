<template>
    <div class="container p-5">
      <h2 class="form-title">Quản lý sản phẩm</h2>
      <div class="row form-border">
          <NameProductList v-bind:products="products"/>
      </div>
    </div>
</template>

<script>
  import MyHeader from "@/components/MyHeader.vue";
  import MyFooter from "@/components/MyFooter.vue";
  import NameProductList from "@/components/NameProductList.vue";
  import ProductService from '@/services/product.service.js';
  import CartService from '@/services/cart.service.js';
  export default{
    components:{
      MyHeader,
      MyFooter,
      NameProductList,
    },
    data(){
        return{
          products: [],
        };
    },
    methods:{
        async retrieveContacts(){
            try{
                this.products = await ProductService.getAll();
            } catch(error){
                console.log(error);
            }
        },

        refreshList(){
            this.retrieveContacts();
            },
        },
      mounted() {
        this.refreshList();
        },
  };
</script>

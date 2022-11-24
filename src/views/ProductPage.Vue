<template>
    <div class="productpage-title">
      <div class="overlay"></div>
      <h2 class="page-title">
        Our Products</h2>
    </div>
    <ProductList v-bind:products="products"/> 
    <router-link
                :to="{
                    name: 'product.edit',
                }"
            >
                <span class="mt-2 badge badge-warning">
                    <i class="fas fa-edit"></i>Hiệu chỉnh
                </span>
            </router-link>
 </template> 
<!-- <script>
    export default{
       
    };
</script> -->

<script>
  import MyHeader from "@/components/MyHeader.vue";
  import MyFooter from "@/components/MyFooter.vue";
  import ProductList from "@/components/ProductList.vue";
  import ProductService from '@/services/product.service.js';
  import CartService from '@/services/cart.service.js';
  export default{
    components:{
      MyHeader,
      MyFooter,
      ProductList,
    },
    data(){
        return{
          products: [{"title": "nama"}],
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

        //     async removeAllContacts() {
        //         if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
        //         try {
        //             await ContactService.deleteAll();
        //             this.refreshList();
        //         } catch (error) {
        //             console.log(error);
        //         }
        //         }
        //     },

        //     goToAddContact() {
        //         this.$router.push({ name: "contact.create" });
        //     },
        },
      mounted() {
        this.refreshList();
        },
  };
</script>


<!-- <script>
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
import ProductList from "@/components/ProductList.vue";
import ProductService from '@/services/product.service';

export default{
    components:{
      MyHeader,
      MyFooter,
      ProductList,
    },

    // data(){
    //     return{
    //     products: [],
    //     };
    // },
    // methods:{
        // async retrieveContacts(){
        //     try{
        //         this.products = await ProductService.getAll();
        //     } catch(error){
        //         console.log(error);
        //     }
        // },

        // refreshList(){
        //     this.retrieveContacts();
        // },

            // async removeAllContacts() {
            //     if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
            //     try {
            //         await ContactService.deleteAll();
            //         this.refreshList();
            //     } catch (error) {
            //         console.log(error);
            //     }
            //     }
            // },

            // goToAddContact() {
            //     this.$router.push({ name: "contact.create" });
            // },
        // },
    // mounted() {
    //     this.refreshList();
    //     },
    };
</script> -->

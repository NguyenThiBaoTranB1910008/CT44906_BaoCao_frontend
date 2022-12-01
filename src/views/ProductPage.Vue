<template>
    <div class="productpage-title">
      <div class="overlay"></div>
      <h2 class="page-title">
        Our Products</h2>
    </div>
    <div class=" row">
        <div class="col-8"></div>
        <div class="col-4 seatchText">
            <InputSearch v-bind:searchText="searchText"
                            v-on:updateModelValue="updateModelValue" />
        </div>
    </div>
    <ProductList v-if= "filteredProductsCount > 0"
                :products ="filteredProducts"/> 

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
  import InputSearch from '@/components/InputSearch.vue';

  export default{
    components:{
      MyHeader,
      MyFooter,
      ProductList,
      InputSearch
    },
    data(){
        return{
          products: [],
        searchText:"",
        };
    },
    computed:{
            productStrings(){
                return this.products.map((product) =>{
                    const {title, imageUrl, description, price, colection} = product;
                    return [title].join("");
                });
            },
            filteredProducts(){
                if(!this.searchText)
                return this.products;
                return this.products.filter((_product, index) =>
                    this.productStrings[index].includes(this.searchText));
            },

            filteredProductsCount(){
                // alert(this.filteredProducts);
                return this.filteredProducts.length;
            },
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

        updateModelValue(value){
            // alert(value);
            this.searchText= value;
        },
        },
      mounted() {
        this.refreshList();
        },
  };
</script>

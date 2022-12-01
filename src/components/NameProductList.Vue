<script>
    export default{
      props:{
         products: {type: Array, default: []},
         activeIndex: {type: Number, default: -1},
      },  
      data(){
         return{
            activeclass: "",
         };
      },
      methods:{
            updateActiveIndex(index){
               this.$emit("updateActiveIndex", index);
               this.activeclass = index;
            },
            addNewProduct(){
               this.$emit("updateActiveIndex", -1);
            }
        }
    };
</script>
<template>
    <div class="col-3 editproduct p-0">
       <table>
         <tr  v-for="(product, index) in products" 
                        :key="product._id" 
                        @click="updateActiveIndex(index)"
                        :class="{pink: index === activeclass}"
                        >
            <td class="cart-col1">
               <span>{{product.title}}</span>
            </td>
         </tr>
         <tr class="cart-item" @click="updateActiveIndex(-1)"
                              :class="{pink: -1 === activeclass}">
            <td class="cart-col1">
               <span>Thêm sản phẩm mới <i class="fa-solid fa-plus"></i></span>
            </td>
         </tr>
      </table>
   </div>
</template>

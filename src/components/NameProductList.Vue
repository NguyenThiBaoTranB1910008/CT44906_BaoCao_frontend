<script>
    export default{
      props:{
         products: {type: Array, default: []},
      },  
      methods:{       
      },
    };
</script>
<template>
    <div class="col-4 order pe-5 editproduct">
       <table>
         <tr class="cart-item"  v-for="(product, index) in products"  :key="product._id">
            <td class="cart-col1">
               <span>{{product.title}}</span>
            </td>
         </tr>
      </table>
   </div>
</template>

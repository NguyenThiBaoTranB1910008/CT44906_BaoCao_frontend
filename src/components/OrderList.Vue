<script>
    export default{
      props:{
         cart: {type: Array, default: []},
      },  
      methods:{   
         totalCart(){
           var total=0;
           this.cart.forEach((item, index)=>{
            total += item.quatity*item.price;
            });
            return total;
         },

         cost(){
            var carttotal= this.totalCart();
            return carttotal*2/100;
         },

         totalPrice(){
            var carttotal= this.totalCart();
            var cost= this.cost();
            return carttotal + cost;
         }
        },      

    };
</script>
<template>
    <div class="col-6 order px-3">
       <table>
        <tr class="cart-item" v-for="(orderitem, index) in cart"  :key="orderitem._id" >
           <td class="cart-col1">
              <img v-bind:src="orderitem.imageUrl" alt="">
           </td>
           <td class="cart-col2">
              <span>{{orderitem.title}}</span>
           </td>
           <td class="cart-col3">
              <span class="order-price">{{orderitem.quatity}} x {{orderitem.price}} </span>
            </td>
        </tr>
         <tr class="cart-item" >
            <td class="cart-col1" colspan="2">
               <span>Tổng đơn hàng:</span>
            </td>
            <td class="cart-col3">
               <span class="">{{totalCart()}}đ</span>
            </td>
         </tr>
         <tr class="cart-item" >
            <td class="cart-col1" colspan="2">
               <span>Phí vận chuyển:</span>
            </td>
            <td class="cart-col3">
               <span class="">{{cost()}}đ</span>
            </td>
         </tr>
         <tr class="cart-item" >
            <td class="cart-col1" colspan="2">
               <span>Tổng đơn hàng:</span>
            </td>
            <td class="cart-col3">
               <!-- <input type="number" :value="cartitem.quatity" v-on:change="updateCartItem(cartitem, $event)" min="1" size="4"> -->
               <span class="order-price">{{totalPrice()}}đ</span>
            </td>
         </tr>   
      </table>
   </div>
</template>

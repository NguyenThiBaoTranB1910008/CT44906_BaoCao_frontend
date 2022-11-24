<script>
    export default{
        props:{
            cart: {type: Array, default: []},
        },  
        methods:{
         deleteCartItem(id){
            this.$emit('deleteCartItem', id);
            window.location.href = "/cart"
         },
         updateCartItem(data, event){
            // if(parseInt(event.target.value)<=0){
            //    alert("Vui lòng nhập số lượng sản phẩm >0");
            // }
            var cartItem={
                     "_id": data._id,
                    "imageUrl": data.imageUrl,
                    "title": data.title,
                    "price": data.price,
                    "quatity":  parseInt(event.target.value),
                };
            this.$emit('updateCartItem', cartItem);
            // window.location.href = "/cart"
            // console.log(event.target.value);
         }
      }
    };
</script>
<template>
   <div class="container p-0 pt-2"> 
      <table class="cart">
      <thead class="cart-header">
         <td class="cart-col1">Hình ảnh</td>
         <td class="cart-col2">Tên sản phẩm</td>
         <td class="cart-col3">Số lượng</td>
         <td class="cart-col4">Đơn giá</td>
         <td class="cart-col5"></td>
      </thead>
      <tbody>
         <tr class="cart-item" v-for="(cartitem, index) in cart"
                :key="cartitem._id" >
            <td class="cart-col1">
               <img v-bind:src="cartitem.imageUrl" alt="">
            </td>
            <td class="cart-col2">
               <p>{{cartitem.title}}</p>
            </td>
            <td class="cart-col3">
               <input type="number" :value="cartitem.quatity" v-on:change="updateCartItem(cartitem, $event)" min="1" size="4">
            </td>
            <td class="cart-col4">
               <p>{{cartitem.price}}$</p>
            </td>
            <td class="cart-col5">
               <a href="#" v-on:click="deleteCartItem(cartitem._id)">
                  <i class="fa-solid fa-x"></i>
               </a>
               
            </td>
         </tr>
      </tbody>
   </table>
</div>  
</template>

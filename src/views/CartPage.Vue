<template>
    <div class="cartpage-title">
      <div class="overlay"></div>
      <h2 class="page-title">
        Giỏ hàng</h2>
    </div>
    <div class="container pt-5">
   <CartList v-bind:cart="cart"  
            v-on:deleteCartItem="deleteCartItem" 
            v-on:updateCartItem="updateCartItem"
            v-on:fomatPrice="fomatPrice"/>
    <div class="cart-bottom row">
      <div class="back-shopping col-6">
        <router-link :to="{ name: 'product'}" class="">
            <i class="fa-solid fa-backward"></i>
            <span>Tiếp tục mua hàng</span>
        </router-link>
      </div>
      <table class="cart-total col-6">
         <h3>Tổng đơn hàng</h3>
         <tr class="discount">
            <td>Giảm giá:</td>
            <td>0đ</td>
         </tr>
         <tr class="total">
            <td>Tổng cộng:</td>
            <td>{{fomatPrice(totalPrice)}}</td>
         </tr>
         <tr></tr>
         <tr class="deal">
            <td  colspan="2">
                <router-link :to="{ name: 'order'}" class="">
                    <button class="banner-button" >Đặt hàng</button> 
                </router-link>
           </td>
        </tr>
      </table>
   </div>
   </div>
</template>

<script>
  import MyHeader from "@/components/MyHeader.vue";
  import MyFooter from "@/components/MyFooter.vue";
  import CartList from "@/components/CartList.vue";
  import CartService from '@/services/cart.service.js';
//   import OrderService from '@/services/order.service.js';
  export default{
    components:{
      MyHeader,
      MyFooter,
      CartList,
    },
    data(){
        return{
            // totalprice: totalPrice(),
          cart: [],
        };
    },
    computed:{
        totalPrice(){
           var total=0;
           this.cart.forEach((item, index)=>{
            total += item.quatity*item.price;
            });
            return total;
            }
        },      
    methods:{
        // async addOrder(product){
        //         var order={
        //             "imageUrl": product.imageUrl,
        //             "title": product.title,
        //             "price": product.price,
        //             "quatity": 1,
        //         };
        //         try {
        //             await CartService.create(cartItem);
        //             // this.message = "Liên hệ đã được thêm mới.";
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     }
        // }
        async retrieveCart(){
            try{
                this.cart = await CartService.getAll();
            } catch(error){
                console.log(error);
            }
        },

        refreshList(){
            this.retrieveCart();
        },


        async deleteCartItem(id) {
            if (confirm("Bạn muốn xóa sản phẩm này?")) {
                try {
                    await CartService.delete(id);
                    this.retrieveCart();
                    // this.$router.push({ name: "contactbook" });
                } catch (error) {
                    console.log(error);
                }
            }
        },

        async updateCartItem(data) {
            try {
                await CartService.update(data._id, data);
                this.message = "Liên hệ được cập nhật thành công.";
                this.retrieveCart();
            } catch (error) {
                console.log(error);
            }
        },

        fomatPrice(price){
            const VND = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            });
            return VND.format(price);
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

            addCart() {
                this.$router.push({ name: "cart.create" });
            },
        },
      mounted() {
        this.refreshList();
        },
  };
</script>
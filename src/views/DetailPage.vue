<script>
    import ProductService from '@/services/product.service.js';
    import CartService from '@/services/cart.service.js';
    export default{
       props:{
        id:{type: String, default:""}
       },
       data(){
        return{
            product: {}
        }
       },
       methods:{
        async getProduct(){
            try{
                this.product = await ProductService.get(this.id);
            } catch(error){
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
       async addCart(product){
                var cartItem={
                    "idproduct": product._id,
                    "imageUrl": product.imageUrl,
                    "title": product.title,
                    "price": product.price,
                    "quatity": 1,
                };
                var has=false;
                try {
                    this.cart=await CartService.getAll();
                    for(var i=0; i < this.cart.length; i++){
                        // CartService.update(this.cart[i]._id, this.cart[i]);
                        if(product._id == this.cart[i].idproduct)
                        {
                            this.cart[i].quatity += 1;
                            // alert(this.cart[0]);
                            has=true;
                            await CartService.update(this.cart[i]._id, this.cart[i]);
                            alert("Sản phẩm đã được cập nhật vào giỏ hàng.");
                        };
                    };
                    if(!has){
                        await CartService.create(cartItem);
                        alert("Sản phẩm đã được thêm vào giỏ hàng.");
                    }
                } catch (error) {
                    console.log(error);
            }
            },
      },
       mounted(){
        this.getProduct();
       }

    };
</script>
<template>
    <div class="container p-5">
    <div class="row form-border px-5">
      <div class="col-5 px-3 ms-3">
        <img v-bind:src="product.imageUrl" alt="">
      </div>
      <div class="col-7">
        <h3 >{{product.title}}</h3>
         <p class="product-price">{{fomatPrice(product.price)}}</p> 
        <p class="product-description">{{product.description}}</p> 
        <button class="banner-button" @click="addCart(product)">Thêm vào giỏ hàng</button>
      </div>
      </div>
      <ul class="list-service row mx-3">
      <div class="col-4 p-3">
        <li >
          <span>
            <img src="https://theme.hstatic.net/200000244895/1000651353/14/product_deliverly_1_icons.png?v=2319" alt="">
            "Cam kết 100% chính hãng"
          </span>
        </li>
    </div>
    <div class="col-4 p-3">
     <li >
       <span>
         <img src="https://theme.hstatic.net/200000244895/1000651353/14/product_deliverly_2_icons.png?v=2319" alt="">
         "Giao hàng dự kiến:
         Thứ 6 - Thứ 4"
         </span>
     </li>
    </div>
    <div class="col-4 p-3">
     <li>
       <span>
         <img src="https://theme.hstatic.net/200000244895/1000651353/14/product_deliverly_3_icons.png?v=2319" alt="">
         "Sản phẩm không nhận đổi trả"
         </span>
     </li>
    </div>
   </ul>
  </div>
</template>

<script>
    import CartService from '@/services/cart.service.js';
    export default{
        props:{
            products: {type: Array, default: []},
        },
        methods:{
            async addCart(product){
                var cartItem={
                    "imageUrl": product.imageUrl,
                    "title": product.title,
                    "price": product.price,
                    "quatity": 1,
                };
                try {
                    await CartService.create(cartItem);
                    // this.message = "Liên hệ đã được thêm mới.";
                } catch (error) {
                    console.log(error);
                }

            //     try {
            //         // console.log(contact);
            //         await CartService.create(product);
            //         this.message = "Liên hệ đã được thêm mới.";
            //     } catch (error) {
            //         console.log(error);
            //     }
            // },
            }
        }
    };
</script>
<template>
    <div class="container p-5">
        <div class="row" >
            <div class="col-4 product"
                v-for="(product, index) in products"
                :key="product._id" >
            <img v-bind:src="product.imageUrl" alt="">
            <div class="product-info p-3">
                <div class="product-title">
                    {{product.title}}
                </div>
                <div class="row pt-3" >
                    <div class="product-price">
                        ${{product.price}}
                    </div>
                    <button v-on:click="addCart(product)" class="product-cart">
                        <i class="fa-solid fa-cart-shopping product-cart"></i>
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

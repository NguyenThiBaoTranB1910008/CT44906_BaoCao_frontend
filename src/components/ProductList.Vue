<script>
    import CartService from '@/services/cart.service.js';
    import InputSearch from '@/components/InputSearch.vue';
    export default{
        props:{
            products: {type: Array, default: []},
        },
        data(){
            return{
                cart:[],
            }
        },
        methods:{
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
            gotodetail(product){
                this.$router.push({ name: 'product.detail', params: {id: product._id} })
            },
            
            fomatPrice(price){
            const VND = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            });
            return VND.format(price);
        }

        }
    };
</script>
<template>
    <div class="container p-3">
        <!-- <div class="col-md-10"> -->
            <!-- <InputSearch v-model="searchText" /> -->
        <!-- </div> -->
        <div class="row" >
            <div class="col-4 product"
                v-for="(product, index) in products"
                :key="product._id">
            <img v-bind:src="product.imageUrl" alt="" @click="gotodetail(product)">
            <div class="product-info p-3">
                <div class="product-title">
                    {{product.title}}
                </div>
                <div class="row pt-3" >
                    <div class="product-price">
                        {{fomatPrice(product.price)}}
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

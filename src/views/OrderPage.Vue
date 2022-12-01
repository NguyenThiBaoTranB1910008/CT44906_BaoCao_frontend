 <template>
    <div class="container-fluild p-5 orderpage">
      <h2 class="form-title">Đơn hàng</h2>
      <div class="row form-border">
          <AdressForm v-bind:adress="adress" v-on:submitAdress="createAdress" />
          <OrderList v-bind:cart="cart"/>
      </div>
    </div>
</template>

<script>
  import MyHeader from "@/components/MyHeader.vue";
  import MyFooter from "@/components/MyFooter.vue";
  import OrderList from "@/components/OrderList.vue";
  import AdressForm from "@/components/AdressForm.vue";
  // import CartList from "@/components/CartList.vue";
  import OrderService from '@/services/order.service.js';
  import CartService from '@/services/cart.service.js';
  export default{
    components:{
      MyHeader,
      MyFooter,
      OrderList,
      AdressForm
    },

    data(){
        return{
          cart: [],
          adress: {},
        };
    },    
    methods:{
        async getCart(){
           try{
                this.cart = await CartService.getAll();
            } catch(error){
                console.log(error);
            }
        },

        async createAdress(adress) {
          if(this.cart.length ==0){
            alert("Vui lòng chọn thêm sản phẩm vào giỏ hàng");
          }
          else{
            try {
              adress.products= this.cart;
                alert("Đơn hàng được đặt thành công!!");
                await OrderService.create(adress);
                await CartService.deleteAll();
                window.location.href = "/order";
            } catch (error) {
                console.log(adress.firstname);
            }
          }
        },
    },
    mounted() {
        this.getCart();
    },
  };
</script> 


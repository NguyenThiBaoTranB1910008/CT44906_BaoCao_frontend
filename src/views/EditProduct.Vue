<template>
    <div class="container-fluild editpage">
      <!-- <h2 class="form-title">Quản lý sản phẩm</h2> -->
      <div class="row form-border">
          <NameProductList 
              v-bind:products="products" 
              v-on:updateActiveIndex="updateActiveIndex"/>
        <div class="col-9 login p-5">  
          <Form
            @submit="submitProduct"
            :validation-schema="adressFormSchema"
          >
          <h4 class="form-title">Thông tin sản phẩm:</h4>
          <div class="form-group">
              <label for="title">Tên sản phẩm</label>
              <Field type="text" class="form-control" name="title" v-model="product.title" />
              <ErrorMessage name="title" class="error-feedback" />
          </div>    
          <div class="form-group">
              <label for="imageUrl">Hình ảnh</label>
              <Field type="text" class="form-control" id="imageUrl" name="imageUrl" v-model="product.imageUrl" />
              <ErrorMessage name="imageUrl" class="error-feedback" />
          </div>
          <div class="form-group">
              <label for="description">Mô tả</label>
              <Field type="text" class="form-control" id="description" name="description" v-model="product.description" />
              <ErrorMessage name="description" class="error-feedback" />
          </div>
          <div class="form-group">
              <label for="price">Giá</label>
              <Field type="number" class="form-control" id="price" name="price" v-model="product.price" />
              <ErrorMessage name="price" class="error-feedback" />
          </div>
          <div class="row px-5 pt-2" @click="updateActiveIndex" >
              <div class="col-4">
                  <button type="text" class="btn banner-button mt-0" @click="deleteProduct">Xóa</button>
              </div>
              <div class="col-4"></div>
              <div class="col-4">
                  <button type="submit" class="btn banner-button mt-0" @click="submitProduct">Lưu thông tin</button>
              </div>
          </div>
      </Form>
    </div> 
    </div>
    </div>
</template>

<script>
  import MyHeader from "@/components/MyHeader.vue";
  import MyFooter from "@/components/MyFooter.vue";
  import NameProductList from "@/components/NameProductList.vue";
  // import EditProductForm from "@/components/EditProductForm.vue";
  import ProductService from '@/services/product.service.js';
  import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
  export default{
    components:{
      MyHeader,
      MyFooter,
      NameProductList,
      Form,
      Field,
      ErrorMessage,
    },
    data() {
      const adressFormSchema = yup.object().shape({
        title: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
        imageUrl: yup
                .string()
                .required("Đường link phải có giá trị."),
            
        description: yup
                .string()
                .max(500, "Mô tả tối đa 100 ký tự."),
                
        price: yup.number(),
      });
        return {
          products: [],
          activeIndex: -1,
          product: {},
          adressFormSchema,
        };
    },
    methods:{
        updateActiveIndex(index){
          // alert(index);
          this.activeIndex = index;
          this.product= this.products[this.activeIndex];
          if(this.activeIndex==-1){
            this.product={};
          }
          // alert(this.product.title);
        },
        
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
        
        async submitProduct() {
          if(this.activeIndex!=-1){
                try{
                  await ProductService.update(this.product._id, this.product);
                  alert("Cập nhật sản phẩm thành công!!");
                  window.location.href = "/productedit";
                } catch(error){
                    console.log(error);
            }
            }else{
              try{
                await ProductService.create(this.product);
                alert("Thêm mới sản phẩm thành công!!");
                window.location.href = "/productedit";
                } catch(error){
                    console.log(error);
            }
            }
        },

        async deleteProduct() {
            if (confirm("Bạn muốn xóa sản phẩm này?")) {
                try {
                    await ProductService.delete(this.product._id);
                    window.location.href = "/productedit";
                    // this.$router.push({ name: "contactbook" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
      },
    mounted() {
      this.refreshList();
    },
}
</script>

<script>
   import * as yup from "yup";
   import { Form, Field, ErrorMessage } from "vee-validate";
   import AccountService from '@/services/account.service.js';
    export default{
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
      const signupFormSchema = yup.object().shape({
        name: yup
            .string()
            .required("Tên phải có giá trị.")
            .min(2, "Tên phải ít nhất 2 ký tự.")
            .max(50, "Tên có nhiều nhất 50 ký tự."),
        phone: yup
            .number()
            .required("SĐT phải có giá trị."),
         password: yup
            .string()
            .required("Vui lòng nhập password"),
         confirm_password: yup
         .string()
         .required("Chưa nhập lại password")
         .oneOf([yup.ref('password')], 'Password không khớp'),
      });
        return {
         account:{},
         signupFormSchema,
         message: ""
        };
    },
    methods: {
       async submitAccount() {
         var account={
            "name": this.account.name,
            "phone": this.account.phone,
            "pass": this.account.password,
         };
         try {
            var acc= await AccountService.findName(this.account.name);
            if(acc.name == this.account.name){
               this.account.name="";
               this.message="Tài khoản đã tồn tại"
            }
            else{
               await AccountService.create(account);
               alert("Đăng ký thành công!!"); 
            }
         }catch (error) {
             alert(error);
         }
      }
   },
};
</script>
<template>
    <div class="container-fluid p-5 dkmain">
    <div class="row m-3 form-border aroundform p-5">
       <div class="col-6 login px-5">
       <h1 class="form-title">Signup</h1>
         <Form id="signup" 
            method="post"
            @submit="submitAccount"
            :validation-schema="signupFormSchema"
          >
            <div class="form-group">
                <label for="name" class="col-sm-5 col-form-label"><i class="fa-solid  fa-user label-icon"></i>Tên tài khoản</label>
                <div>
                  <Field type="text" class="form-control" id="name" name="name" v-model="account.name" @click="this.message=''" />
                  <ErrorMessage name="name" class="error-feedback" />
                </div>
                <div class="incorectmess">
                  <span>{{this.message}}</span>
               </div>
             </div>
             <div class="form-group ">
                <label for="inputPassword" class="col-sm-3 col-form-label"><i class="fa-solid fa-phone label-icon"></i>SĐT</label>
                <div>
                  <Field type="text" class="form-control" id="phone" name="phone" v-model="account.phone"/>
                  <ErrorMessage name="phone" class="error-feedback" />
                </div>
             </div>
             <div class="form-group"> 
                <label for="inputPassword" class="col-sm-5 col-form-label"><i class="fa-solid fa-key label-icon"></i>Mật khẩu</label>
                <div>
                   <Field type="password" class="form-control" id="password" name="password" v-model="account.password"/>
                   <ErrorMessage name="password" class="error-feedback" />
                </div>
             </div>
             <div class="form-group">
                <label for="inputPassword" class="col-sm-5 col-form-label"><i class="fa-solid fa-key label-icon"></i>Nhập lại mật khẩu</label>
                <div>
                  <Field type="password" class="form-control" id="confirm_password" name="confirm_password" v-model="account.confirm_password" />
                  <ErrorMessage name="confirm_password" class="error-feedback" />
                </div>
             </div>
             <div class="row py-1">
                <div class="col-sm-8">
                  <router-link :to="{ name: 'login'}" class="">
                     <i class="fa-solid fa-backward"></i>
                     <span>Đăng nhập vào hệ thống</span>
                  </router-link>
                </div>
                <div class="px-3 mt-0">
                   <button type="text" class="btn banner-button" @lick="submitAccount">Đăng ký</button>
                </div>
             </div>
         </Form>
       </div>
       <div class="col-6 signup-img p-0">
          <div class="container">
            <div class="row signup-img1">
              <img src="https://t4.ftcdn.net/jpg/02/99/06/03/360_F_299060393_2kkwSCSx36oUXfrdEDrYkP2PlDAteMHW.jpg" alt="">
            </div>
            <div class="row signup-img2 pt-3">
              <div class="col-6 p-0">
                <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbWV0aWN8ZW58MHx8MHx8&w=1000&q=80" alt="">
              </div>
              <div class="col-6 p-9">
                <img src="https://media.istockphoto.com/id/1317086199/photo/three-cosmetic-product-mockups-on-geometric-podiums-background-for-presentation-of-cosmetic.jpg?s=612x612&w=0&k=20&c=SsCoujHbI9__g-ANgq3SD1Yy2bzXW1jlR9bB909pGvI=" alt="">
              </div>
            </div>
          </div>
       </div>
    </div>
 </div>
</template>

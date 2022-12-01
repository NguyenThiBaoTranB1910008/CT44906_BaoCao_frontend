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
         const loginFormSchema = yup.object().shape({
         name: yup
               .string()
               .required("Tên phải có giá trị.")
               .min(2, "Tên phải ít nhất 2 ký tự.")
               .max(50, "Tên có nhiều nhất 50 ký tự."),
         password: yup
               .string()
               .required("Vui lòng nhập password"),
      });
        return {
         account:{},
         loginFormSchema,
         message:"",
        };
      },
      methods: {
         async submitAcc(){
            var check= await AccountService.findAccount(this.account);
            if(check){
               window.location.href = "/productedit";
            }
            else{
               this.message="Tên tài khoản hoặc mật khẩu không đúng"
            }
            // console.log(a.pass);
               // if(a.pass == this.account.password){
               // }
         },
      },
    };
</script>
<template>
    <div class="container-fluid p-5 dkmain" >
    <div class="row m-3 form-border aroundform p-5">
       <div class="col-6 login px-5">
       <h1 class="form-title">Login</h1>
       <Form id="signup" 
            method="post"
            @submit="submitAcc()"
            :validation-schema="loginFormSchema"
      >
            <div class="form-group">
                <label for="name" class="col-sm-5 col-form-label"><i class="fa-solid fa-user label-icon"></i>Tên tài khoản</label>
                <div>
                  <Field type="text" class="form-control" id="name" name="name" v-model="account.name" @click="this.message=''"/>
                  <ErrorMessage name="name" class="error-feedback" />
                </div>
             </div>
             <div class="form-group">
                <label for="inputPassword" class="col-sm-5 col-form-label"><i class="fa-solid fa-key label-icon"></i>Mật khẩu</label>
                <div>
                   <Field type="password" class="form-control" id="password" name="password" v-model="account.pass"/>
                   <ErrorMessage name="password" class="error-feedback" />
                </div>
                <div class="incorectmess">
                  <span>{{this.message}}</span>
               </div>
            </div>
             <div class="row py-1">
                <div class="col-sm-8">
                  <router-link :to="{ name: 'signup'}" class="">
                     <i class="fa-solid fa-backward"></i>
                     <span>Đăng ký tài khoản mới</span>
                  </router-link>
                </div>
                <div class="px-3 m-0">
                   <button type="text" class="btn banner-button m-0" @lick="submitAcc">Đăng nhập</button>
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

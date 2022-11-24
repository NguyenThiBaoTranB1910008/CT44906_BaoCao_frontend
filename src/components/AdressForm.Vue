  <template>
        <div class="col-6 login pt-3 pe-5" >
          <Form 
            @submit="submitAdress"
            :validation-schema="adressFormSchema"
          >
          <!-- <form method="get" action="/order" id="signup"  @submit="submitAdress"> -->
              <h4 class="form-title">Thông tin liên hệ:</h4>
              <div class="form-group">
                <Field type="email" class="form-control" name="email" v-model="adressLocal.email" placeholder="Email"/>
                   <ErrorMessage name="email" class="error-feedback" />
                  </div>    
            <div class="pt-5">
            <h4 class="form-title">Địa chỉ giao hàng</h4>
            <div class="row pb-3">
                <div class="form-group col-6">
                      <Field type="text" class="form-control" id="name" name="lastname" placeholder="Họ" v-model="adressLocal.lastname"/>
                      <ErrorMessage name="lastname" class="error-feedback" />
                  </div>  
                <div class="form-group col-6">
                    <Field type="text" class="form-control" id="name" name="firstname" placeholder="Tên" v-model="adressLocal.firstname"/>
                     <ErrorMessage name="firstname" class="error-feedback" /> 
                   </div>
            </div>
            <div class="form-group ">
                  <Field type="text" class="form-control" id="email" name="adress" placeholder="Số nhà" v-model="adressLocal.adress"/> 
                  <ErrorMessage name="adress" class="error-feedback" />
             </div>
              <div class="row py-3">
                <div class="form-group col-6 ">
                      <Field type="text" class="form-control" id="name" name="city" placeholder="Tên thành phố" v-model="adressLocal.city"/>
                      <ErrorMessage name="city" class="error-feedback" />
                </div>
                <div class="form-group col-6">
                  <select class="form-select form-control" v-model="adressLocal.country" name="country">
                    <option selected>Việt Nam</option>
                    <option value="tl">Thái Lan</option>
                    <option value="nb">Nhật Bản</option>
                    <option value="tq">Trung Quốc</option>
                  </select>  
                  <ErrorMessage name="country" class="error-feedback" />
                  </div> 
              </div>
            </div>
                 <div class="row py-3 ">
                    <router-link :to="{ name: 'product'}" class="">
                      <i class="fa-solid fa-backward"></i>
                      <span>Tiếp tục mua hàng</span>
                    </router-link>
                    <div class="col-6">
                        <button type="submit" class="btn banner-button mt-0" @submit="submitAdress">Xác nhận</button>
                    </div>
              </div>
          <!-- </form> -->
        </Form>
      </div> 
</template>

<script>
// import ContactForm from "@/components/ContactForm.vue";
// import ContactService from "@/services/contact.service";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
// import {Form} from "vee-validate"; 
export default {
    props: {
      adress: { type: Object, required: true }
    },
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
      const adressFormSchema = yup.object().shape({
        firstname: yup
            .string()
            .required("Tên phải có giá trị.")
            .min(2, "Tên phải ít nhất 2 ký tự.")
            .max(50, "Tên có nhiều nhất 50 ký tự."),
        lastname: yup
            .string()
            .required("Họ phải có giá trị.")
            .max(50, "Họ có nhiều nhất 50 ký tự."),
          
        email: yup
            .string()
            .email("E-mail không đúng.")
            .max(50, "E-mail tối đa 50 ký tự."),

        adress: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
        city : yup.string().max(100, "Thành phố tối đa 100 ký tự."),
      });
        return {
           adressLocal:{},
            adressFormSchema,
        };
    },
    methods: {
        submitAdress() {
        // alert(this.adressLocal.name);
        this.$emit("submitAdress", this.adressLocal);
    },

    },
};
</script>

    
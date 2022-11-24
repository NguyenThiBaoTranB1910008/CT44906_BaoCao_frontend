<script>
    export default{
       
    };
</script>
<template>
    <div class="container-fluid p-5">
    <div class="row m-5 form-border">
       <div class="col-6 login">
       <h1 class="form-title">Signup</h1>
          <form method="post" action="/signup" id="signup" class="">
             <div class="form-group">
                <label for="name" class="col-sm-3 col-form-label">Tên tài khoản</label>
                <div class="col-sm-9">
                   <input type="text" class="form-control" id="name" name="name" placeholder="">
                </div>
             </div>
             <div class="form-group py-2">
                <label for="inputPassword" class="col-sm-3 col-form-label">SĐT</label>
                <div class="col-sm-9">
                   <input type="text" class="form-control" id="phone" name="phone" placeholder="">
                </div>
             </div>

             <div class="form-group py-2">
                <label for="inputPassword" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                   <input type="email" class="form-control" id="email" name="email" placeholder="">
                </div>
             </div>
             <div class="form-group py-2">
                <label for="inputPassword" class="col-sm-3 col-form-label">Mật khẩu</label>
                <div class="col-sm-9">
                   <input type="password" class="form-control" id="password" name="password" placeholder="">
                </div>
             </div>
             <div class="form-group py-2">
                <label for="inputPassword" class="col-sm-3 col-form-label">Nhập lại mật khẩu</label>
                <div class="col-sm-9">
                   <input type="password" class="form-control" id="confirm_password" name="confirm_password" placeholder="">
                </div>
             </div>
             <div class="row py-3">
                <div class="col-sm-5"></div>
                <div class="col-sm-7 p-3">
                   <button type="submit" class="btn btn-view gradient-butto">Đăng ký</button>
                </div>
             </div>
          </form>
       </div>
       <div class="col-6 signup-img pr-0">
          <div class="container">
            <div class="row signup-img1">
              <img src="https://t4.ftcdn.net/jpg/02/99/06/03/360_F_299060393_2kkwSCSx36oUXfrdEDrYkP2PlDAteMHW.jpg" alt="">
            </div>
            <div class="row signup-img2 pt-3">
              <div class="col-6">
                <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbWV0aWN8ZW58MHx8MHx8&w=1000&q=80" alt="">
              </div>
              <div class="col-6">
                <img src="https://media.istockphoto.com/id/1317086199/photo/three-cosmetic-product-mockups-on-geometric-podiums-background-for-presentation-of-cosmetic.jpg?s=612x612&w=0&k=20&c=SsCoujHbI9__g-ANgq3SD1Yy2bzXW1jlR9bB909pGvI=" alt="">
              </div>
            </div>
          </div>
       </div>
    </div>
 </div>
</template>

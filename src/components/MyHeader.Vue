<script>
    export default{
       
    };
</script>



<template>
    <header>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-sm p-0">
            <div class="container-fluid">
            <a class="navbar-brand" href="#"><img :style="{'height': 50 + 'px'}" id="logo" class="img-fluid" src="../images/mylogo.png" alt=""></a>
              <ul class="nav navbar-nav navbar-right">
                <li class='nav-item'><a href="/" class='nav-link dt'>TRANG CHỦ</a></li>
                <li class='nav-item'><a href="/product" class='nav-link dt'>SẢN PHẨM</a></li>
                <!-- <li class='nav-item'><a href="/login" class='nav-link'>ĐĂNG KÝ/ ĐĂNG NHẬP</a></li> -->
                <!-- <li class='nav-item'><a href="/booktable" class='nav-link'>GIỚI THIỆU</a></li> -->
                <!-- <li class='nav-item'><a href="/out" class='nav-link'>ĐĂNG XUẤT</a></li> -->
                <li class='nav-item'><a href="/cart" class='nav-link'><i class="fa-solid fa-cart-shopping product-cart"></i></a></li>
              </ul>
            </div>
        </nav>
    </div>
  </header>  
</template>



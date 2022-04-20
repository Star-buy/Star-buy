<template>
  <h1>test</h1>
  <h1>test</h1>
  <h1>test</h1>
  <nav class="topbar">
    <div class="top">
      <img src="/images/sale.png" class="brand-logo" alt="" />
      <div class="nav-items">
        <div class="search">
          <input
            type="text"
            class="search-box"
            placeholder="search brand/Product"
          />
          <button class="search-btn">Search</button>
        </div>
        <a href="#"><img src="/images/user.png"></a>
        <a href="#"><img src="/images/cart.png"></a>
      </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">Men</a></li>
        <li class="link-item"><a href="#" class="link">Women</a></li>
        <li class="link-item"><a href="#" class="link">Kids</a></li>
        <li class="link-item"><a href="#" class="link">Accessories</a></li>
    </ul>
  </nav>
  <div class="hero-section">
    <div class="content">
        <!-- <img src="/images/logo-websites-31330.png" class="logo" alt="">
        <p class="sub-heading">best fashion collection of all time</p> -->
    </div>
</div>
</template>

<script>
export default {};
</script>

<style>
.topbar {
  top: 0;
  left: 0;
  width: 100%;
  background-color:#bcbfe4;
  z-index: 9;
}
.top {
  padding: 10px 10vw;
  display: flex;
  justify-content: space-between;
}
.brand-logo {
      height: 127px;
}
.nav-items{
    display:flex;
    align-items:center;
}
.search{
    width:500px;
    display:flex;
}
.search-box{
    width:80%;
    height:50px;
    padding:20px;
    border-top-left-radius: 17px;
    border: 1px solid #000000;
    text-transform:capitalize;
    font-size: medium;
    background:none;
    color:#000000;
    outline:none;
}
.search-btn{
    width:20%;
    height:50px;
    padding:10px 20px;
    border:none;
    outline:none;
    cursor:pointer;
    background: #181925;
    color:#fff;
    text-transform: capitalize;
    font-size:15px;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
}
.nav-items a{
    margin-left: 20px;
}
.nav-items a img{
    width:30px;
}
.links-container {
    width:100%;
    display:flex;
    padding:10px 10vw;
    justify-content: center;
    list-style: none;
    border-top:1px solid #d1d1d1;
}
.link {
    text-transform: capitalize;
    padding: 8px 16px;
    margin: 11px 0px;
    font-size: 22px;
    text-decoration: none;
    color: #000000;
    opacity: 14.5;
    transition: 0.5s;
}
 .link:hover{
    color:red;
    opacity:1;
}
.hero-section{
    width: 100%;
    height: calc(100vh - 120px);
    background-image: url('/images/cart_8.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* 
.hero-section .logo{
    height: 150px;
    display: block;
    margin: auto;
}

.hero-section .sub-heading{
    margin-top: 10px;
    text-align: center;
    color: rgb(0, 0, 0);
    text-transform: capitalize;
    font-size: 35px;
    font-weight: 300;
}  */
</style>

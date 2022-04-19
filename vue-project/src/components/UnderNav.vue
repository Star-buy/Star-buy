<template>
  <h1>test</h1>
  <h1>test</h1>
  <h1>test</h1>
  <nav class="topbar">
    <div class="top">
      <img src="/images/logo-websites-31330.png" class="brand-logo" alt="" />
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
</template>

<script>
export default {};
</script>

<style>
.topbar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(235, 238, 238);
  z-index: 9;
}
.top {
  padding: 10px 10vw;
  display: flex;
  justify-content: space-between;
}
.brand-logo {
  height: 100px;
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
    border-top-left-radius:10px;
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
    background:#000000;
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
.link{
    text-transform: capitalize;
    padding: 0 10px;
    margin:0 5px;
    font-size: 20px;
    text-decoration: none;
    color:#000000;
    opacity:0.5;
    transition:.5s;
}
.link:hover{
    color:red;
    opacity:1;
}
</style>

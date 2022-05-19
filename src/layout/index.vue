<template>
  <div class="layout">
    <header>
      <div class="logo">
        <img src="../assets/image/logo.png" alt="">
      </div>
      <div class="login/register">
          <router-link class="link" :to="{ name: 'Login' }">
            Login/Register
          </router-link>
      </div>
    
    </header>
  </div>

  <section class="content">
  </section>

  <footer>
      <h2>
        <div id="leftbox">
          <div class="item">About BOOKit@NUS</div>
          <div class="item">About Us</div>
          <div class="item">Resources & policies</div>
        </div>
        <div id="rightbox">
          <div class="item">Help Us Improve</div>
          <div class="item">Contact Us</div>
          <div class="item">Write a Review</div>
        </div>
      </h2>
    </footer>

</template>

<script>
export default {
  name: 'LayoutPage'
}
</script>

<style scoped>
.bookitnus{
  cursor:pointer;
}

.layout {
  background: #ccc;
  height: 100%;
  padding-top: 105px;
  width: 100%;
}

footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #5581b0;
  color: white;
  text-align: center;
}

footer #leftbox{
    background-color: #5581b0;
    float:left; 
    width:50%;
    height:150px;
    align-items: center;
    justify-content: center;
}

footer #rightbox{
    background-color: #5581b0;
    float:right; 
    width:50%;
    height:150px;
    align-items: center;
    justify-content: center;
}

div.item {
    flex-shrink: 0;
    margin-right: 100px;
    width: 287px;
    font-size: 20px;
    color: #fff !important;
    cursor: pointer;
}

div.item:hover {
    color: #000 !important;
}

</style>



<template>
  <footer>
    <link href='https://css.gg/twitter.css' rel='stylesheet'>
    <link href='https://css.gg/facebook.css' rel='stylesheet'>
    <link href='https://css.gg/instagram.css' rel='stylesheet'>
    <div class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'HomePage' }"
          >BOOKit@NUS</router-link
        >
      </div>
      <div class="nav-links">
        <div class="item">
          <h3>About</h3>
          <ul>
            <router-link class="link" to="/AboutPage">About Us</router-link><br>
            <router-link class="link" to="/">Join US</router-link><br>
          </ul>
        </div>
        <div class="item">
          <h3>Quick Links</h3>
          <ul>
            <router-link class="link" to="/RegisterPage">Register / Login</router-link><br>
            <router-link class="link" to="/AllFac">Booking</router-link><br>
            <router-link class="link" to="/BlogMain">Forum</router-link><br>
            <router-link class="link" to="/ContactPage">Contact Admin</router-link><br>
          </ul>
        </div>
      </div>
      <div class="col item social">
        <a href="https://www.facebook.com/"><i class="gg-facebook"></i></a
        ><a href="https://twitter.com/"><i class="gg-twitter"></i></a
        ><a href="https://www.instagram.com/?hl=en"><i class="gg-instagram"></i></a>
      </div>
    </div>
    <p class="copyright">BOOKit@NUS © 2022</p>
  </footer>
</template>

<script>
export default {
  name: "FooterVue",
};
</script>

<style lang="scss" scoped>

footer {
  margin-top: auto;
  padding: 25px 25px;
  background: rgb(145,181,240);
  background: linear-gradient(0deg, rgba(145,181,240,1) 6%, rgba(250,232,194,1) 100%);
}

.branding {
    display: flex;
    align-items: center;
    .header {
      font-size: 24px;
      color: #000;
      text-decoration: none;
      font-weight: 600;
    }
    .logo {
       max-width: 20px;
       max-height: 10px;
    }
  }

h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
  display: inline-flex;
  position: relative;

  top: 10px;
}
ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.6;
}

ul a:hover {
  opacity:0.8;
}

@media (max-width:767px) {
  .item:not(.social) {
    text-align:center;
    padding-bottom:10px;
  }
}

.item.text {
  margin-bottom:36px;
}

@media (max-width:767px) {
  .item.text {
    margin-bottom:0;
  }
}

.item.text p {
  opacity:0.6;
  margin-bottom:0;
}
  
.nav-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.item.social {      
  display: inline-flex;
  position: relative;
  left: -10px;
  top: -30px;

}

@media (max-width: 991px) {
  .item.social {
    text-align: left;
    margin-top: 10px;
  }
}

.item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
  margin: 0 8px;
  color: #fff;
  opacity: 0.75;
}

.item.social > a:hover {
  opacity: 0.9;
}

i {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 20px;
    height: 20px;
    margin: 8px 8px 8px 8px;
}


.copyright {
  text-align: right;
  padding-top: 24px;
  opacity: 0.8;
  font-size: 13px;
  margin-bottom: 0;
}
</style>
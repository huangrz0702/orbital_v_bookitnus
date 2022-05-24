<template>
<div class = "message-wrapper">
    <div class = "message-content">
      <h1>  Welcome to BOOKit@NUS</h1>
      <p>
      <br> Where you can book Every facility you want ON CAMPUS!
      <br> You can also communicate with your 
      <br> fellow schoolmates and rate the facilities!
      <br>Login to explore full functionality!</p>
      <router-link class = "link" :to="{ name: 'LoginPage' }">LOGIN / REGISTER</router-link>
    </div>

    <div class = "NUS-photo">
        <img alt="NUS" src="../assets/image/clavon-nus-university-town.webp" />
    </div>

</div>

</template>

<script>
  export default {
      name: "HomePage",
      Components: {},
  };
</script>

<style lang="scss" scoped>
  .message-wrapper {
    color:#271e05;
    display:flex;
    flex-direction: column;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #f0e6cb;
    @media (min-width: 700px) {
      min-height: 650px;
      max-height: 650px;
      flex-direction: row;
    }

    .message-content {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    @media(min-width:700px) {
        order: 1;
    }
    @media(min-width:800px) {
        flex: 3;
    }

    p {
      position: relative;
      left:-14px;
      font-size: 14px;

    }

    .link {
      display: inline-flex;
      position: relative;
      left:-120px;
      margin-top: 32px;
      padding-bottom: 4px;
      border-bottom: 1px solid; 
      &:hover {
          color: #135c97ae;
      }
    }


    }
  }


    .NUS-photo {
        order: 1;
        flex: 3;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

        @media(min-width:700px) {
            order: 2;
        }
        @media(min-width:800px) {
            flex: 4;
        }

        img {
            display: block;
            width:100%;
            height: 100%;
            object-fit: cover;
        }

    }

</style>
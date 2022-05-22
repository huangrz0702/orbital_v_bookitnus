<template>
  <footer>
    <div class="container">
      <div class="top">
        <div class="row-1">
          <router-link class="header" :to="{ name: 'home' }">BOOKit@NUS</router-link>
        </div>
      </div>
      <div class="middle">
        <div class="row-1">
          <ul>
            <router-link class = "link" :to="{ name: 'home' }">Home</router-link>
            <router-link class = "link" to = "#will update"> Book Facilities</router-link>
            <router-link class = "link" to = "#will update"> Forum</router-link>
          </ul>
        </div>
        <div class = "row-2">
           <ul> 
            <router-link class = "link" to = "#will update"> User</router-link>
            <router-link class = "link" to = "#will update">   Login / Register</router-link>
           </ul>
        </div>
      </div>
      <div class="bottom">
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: #135c97ae;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (min-width: 800px) {
    flex-direction: row;
    gap: 0px;
  }

  > div {
    display: flex;
    flex: 1;
  }

  .top {
    gap: 32px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      flex-direction: row;
      align-items: initial;
      gap: 0;
    }

    .header {
      font-size: 24px;
      color: #fff;
      text-decoration: none;
      font-weight: 600;
    }

    .row-1{
      gap: 32px;
      display: flex;
      flex: 1;
      @media (min-width: 800px) {
        gap: 0;
      }
    }

    .row-1 {
      flex-direction: column;

      h2 {
        text-align: center;
        @media (min-width: 800px) {
          text-align: initial;
        }
      }
      ul {
        margin-top: auto;
      }
    }
  }

  .middle {
    gap: 32px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      flex-direction: column;
      align-items: initial;
      gap: 10px;
    }
    .row-1,
    .row-2 {
      ul {
        height: 100%;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        @media (min-width: 800px) {
          flex-direction: row;
        }
        .link {
          font-size: 20px;
          font-weight: 500;
          color: #fff;
          text-decoration: none;
          gap: 20px;
          
        }
      }
    }

  }

  .bottom {
    gap: 32px;
    color: #fff;
    align-items: center;
    flex-direction: column;
    @media (min-width: 800px) {
      align-items: flex-end;
      gap: 0;
    }
  }

  p {
    margin-top: auto;
  }
}
</style>
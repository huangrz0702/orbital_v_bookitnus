<template>
  <link href="https://css.gg/chevron-double-down.css" rel="stylesheet" />
  <header>
    <nav>
      <div class="container">
        <div class="branding">
          <router-link class="header" :to="{ name: 'HomePage' }"
            >BOOKit@NUS</router-link
          >
        </div>
        <div class="nav-links">
          <router-link class="link" to="/">Home</router-link>
          <div class="dropdown">
            <button class="dropbtn">
              FACILITIES
              <i class="gg-chevron-double-down"></i>
              <div class="dropdown-content">
                <router-link class="link" to="/Searchmain"
                  >Find Facilities</router-link
                >
                <router-link class="link" to="/AllFac"
                  >All Facilities</router-link
                >
              </div>
            </button>
          </div>

          <div class="dropdown">
            <button class="dropbtn">
              FORUM
              <i class="gg-chevron-double-down"></i>
              <div class="dropdown-content">
                <router-link class="link" to="/BlogCreate"
                  >Blog Create</router-link
                >
                <router-link class="link" to="/BlogMain">Forum</router-link>
              </div>
            </button>
          </div>

          <div class="dropdown">
            <button class="dropbtn">
              USER
              <i class="gg-chevron-double-down"></i>
              <div class="dropdown-content">
                <router-link class="link" to="/ProfilePage"
                  >User Profile</router-link
                >
                <router-link class="link" to="/LoginPage"
                  >Login / Register</router-link
                >
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navigationBar",
};
</script>


<style lang="scss" scoped>
header {
  background: rgb(235, 170, 155);
  background: linear-gradient(
    180deg,
    rgba(235, 170, 155, 1) 0%,
    rgba(255, 207, 134, 1) 51%,
    rgba(241, 235, 190, 1) 100%
  );
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
}

.dropdown {
  float: right;
  display: flex;
  overflow: hidden;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown:hover .dropbtn {
  color: #253db3;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.gg-chevron-double-down {
    display: inline;
    color:rgba(235, 170, 155, 1)
}

.container {
  display: flex;
  padding: 25px 100px 25px 25px;

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

  .nav-links {
    position: relative;
    min-height: 40px;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .link {
      color: black;
      &:hover {
        color: #253db3;
      }
    }
  }
}

.link {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  padding: 0 25px;
  text-transform: uppercase;
  transition: 300ms color ease;

  &:hover {
    color: #1eb8b8;
  }
}
</style>
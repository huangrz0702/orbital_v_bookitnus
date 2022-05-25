<template>
<header>
    <nav>
        <div class = "container">
            <div class = "branding">
                <router-link class="header" :to="{ name: 'HomePage' }">BOOKit@NUS</router-link>
            </div>
            <div class = "nav-links">
                <ul>
                    <router-link class = "link" to = "/">Home</router-link>
                    <router-link class = "link" to = "#">Book Facilities</router-link>
                    <router-link class = "link" to = "#">Forum</router-link>
                    <router-link class = "link" to = "/ProfilePage">User Profile</router-link>
                    <router-link class = "link" to = "/LoginPage">Login / Register</router-link>
                </ul>
            </div>
        </div>
    </nav>

</header>
</template>

<script>

export default {
    name: 'navigationBar'
};
</script>


<style lang="scss" scoped>
header {
  background-color: rgba(237, 209, 96, 0.669);
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
}

.container {
  display: flex;
  padding: 25px 0;

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

    ul {
      margin-right: 32px;
      display: none;
      @media (min-width: 500px) {
        display: initial;
      }

      .link {
        margin-right: 32px;
      }

      .link:last-child {
        margin-right: 0;
      }
    }

    .link {
      color: black;
      &:hover {
        color: #253db3;
      }
    }
  }

  .profile {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #303030;

    span {
      pointer-events: none;
    }

    .profile-menu {
      top: 60px;
      right: 0px;
      position: absolute;
      width: 250px;
      background-color: #303030;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

      span {
        position: absolute;
        right: 10px;
        top: -10px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #303030;
      }

      .info {
        display: flex;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #fff;

        .initials {
          position: initial;
          width: 40px;
          height: 40px;
          background-color: #fff;
          color: #303030;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        div {
          flex: 1;
          margin-left: 24px;
        }

        p:nth-child(1) {
          font-size: 14px;
        }

        p:nth-child(2),
        p:nth-child(3) {
          font-size: 12px;
        }
      }

      .options {
        padding: 15px;
        .option {
          text-decoration: none;
          color: #fff;
          display: flex;
          align-items: center;
          margin-bottom: 12px;

          .icon {
            width: 18px;
            height: auto;
          }

          i {
            font-size: 18px;
          }

          p {
            font-size: 14px;
            margin-left: 12px;
          }
        }
        .option:last-child {
          margin-bottom: 0px;
        }
      }
    }

    img {
      width: 35px;
      height: 35px;
    }
  }
}

.link {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  padding: 0 8px;
  text-transform: uppercase;
  transition: 300ms color ease;

  &:hover {
    color: #1eb8b8;
  }
}

</style>
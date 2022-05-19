<template>
  <main class="Container">
      <section class="form">

          <form class="register" >
              <p class="login">
        ALready have an account?
        <router-link class="router-link" to="/login">Login</router-link>
      </p>

            <h2>Register</h2>
            <div class = "inputBox">
            <input
            type="email"
            placeholder="Email"
            required
          />
          <svg-icon class="icon" iconClass="email"></svg-icon>
          </div>
          
          <div class = "input">
            <input
            type="password"
            placeholder="Password"
            required
          />
          <svg-icon class="icon" iconClass="lock"></svg-icon>
          </div>

            <div class = "input">
                <input
                type="place of residence"
                placeholder="Place of Residence"
                required/>
                <svg-icon class="icon" iconClass="house"></svg-icon>
            </div>

            <input
                class="btn"
                type="submit"
                value="Register" />
            
          </form>

      </section>
  </main>
</template>


<style scoped>

.Container{
  padding:10vh;
  height: 60%;
  display: flex;
  background-color: white;
}

h2 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 5vh;
  font-weight: bold;
}

.login {
  font-size: 13px;
  margin-bottom: 30px
}

.form {
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 85vh;
  width:100%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
}

.form .login{
    width:40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  align-items: center;
  text-align: center;

}

p {
  font-size: 20;
}

.input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 5vh;
  width: 50%
}

.input input {
  width: 100%;
  border: none;
  padding: 4px 4px 4px 30px;
  height: 50px;
  border-radius: 10px;
  font-size:15px      
}

.btn {
  width:30%;
  padding:10px;
  border: 0ch;
  border-radius: 30px;
  
}

.icon {
    width: 16px;
    position: absolute;
    left: 6px;
}
</style>
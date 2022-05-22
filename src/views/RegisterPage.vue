<template>
  <main class="Container">
      <section class="form">

          <form class="register" >
              <p class="login">
        Already have an account?
        <router-link class="router-link" to="/LoginPage">Login</router-link>
      </p>

            <h2>Register</h2>
            <div class = "input">
            <input
            type="email"
            placeholder="Email"
            v-model="register_form.email"
            required
          />
          <svg-icon class="icon" iconClass="email"></svg-icon>
          </div>
          
          <div class = "input">
            <input
            type="password"
            placeholder="Password"
            v-model="register_form.password"
            required
          />
          <svg-icon class="icon" iconClass="lock"></svg-icon>
          </div>

          <div class = "input">
                <input
                type="displayname"
                placeholder="Display name"
                v-model="register_form.name" 
                required/>
          </div>

            <div class = "input">
                <input
                type="place of residence"
                placeholder="Place of Residence"
                required/>
                <svg-icon class="icon" iconClass="house"></svg-icon>
            </div>

            <button @click="register">Register</button>
            
          </form>

      </section>
      <div class = "background-login"></div>

  </main>
</template>


<script>
import { ref } from 'vue';
import { createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import { auth, db } from '../firebase/firebaseinit'
import { doc, setDoc } from "firebase/firestore"

export default {

    name: "RegisterPage",

    setup() {
        const register_form = ref({});

        return {
            register_form,
        }
    },
    methods: {
        async register() {
            try {
                await createUserWithEmailAndPassword(auth, 
                this.register_form.email, 
                this.register_form.password)
                sendEmailVerification(auth.currentUser)
                .then(() => {
                  alert("Email verification sent!")
                });
            } catch (error) {
             switch(error.code) {
                case 'auth/email-already-in-use':
                    alert("Email already in use")
                    break
                case 'auth/invalid-email':
                    alert("Invalid email")
                    break
                case 'auth/operation-not-allowed':
                    alert("Operation not allowed")
                    break
                case 'auth/weak-password':
                    alert("Weak password")
                    break
                default:
                    alert("Something went wrong")
                }
                return
            }

            await setDoc(doc(db, "users", auth.currentUser.uid), {
                name: this.register_form.name
            })
        }
    }

}


</script>

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
  margin-bottom: 30px;
  margin-left: 26%
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

button {
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

.background-login {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("../assets/image/NUS.jpeg");
    width: 100%;
    height: 100%;
  }

</style>
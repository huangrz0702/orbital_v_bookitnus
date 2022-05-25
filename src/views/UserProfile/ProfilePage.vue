<template>
    <div class="container-profile">
        <h2>My account</h2>
        <p>View and edit your personal info below.</p>
        <hr/>

        <h2>Display Name</h2>
        <p>Change your display name here.</p>
        <hr/>

        <h2>Place of Residence</h2>
        <p>Change your place of residence here.</p>
        <hr/>

        <form class="login" @submit.prevent="changepassword">
        <h2>Change your password</h2>
        <p>Send an email to change your password. </p>
        <div class = "input">
        <input
            type="email"
            placeholder="Please Enter Your Email"
            v-model="profile.email"
            required
          />
        </div>
        <input class="btn" type="submit" value="Change Password" />
        
        </form>
    </div>

</template>

<script>
import { ref } from "vue";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebaseinit.js";
import 'firebase/compat/auth';

export default{
    setup() {
        const profile = ref({});
        return {
            profile,
        };
    },
    methods: {
        async changepassword() {
            try{
                await sendPasswordResetEmail(auth, this.profile.email)
                .then(() => {
                  alert("Password Reset Email Sent!")
                });
            } catch(error) {
                switch (error.code) {
                    default:
                        alert("Something went wrong");
                }
                return;
            }
        },
    },
};
</script>

<style scoped>
.container-profile {
    height: 75vh;
    padding-left: 5vw;
    padding-right:5vw;
    padding: 1vh 10vw 1vh 10vw;
    background-size: 100% 100%;
    background-image: url(../../assets/image/profile.png);
}
h2{
    font-size: 18px;
    padding: 1vh 5vw 1vh 5vw;
    font-weight:bold
}
p{
    font-size: 15px;
    padding: 1vh 5vw 1vh 5vw;
}
hr {
    width: 90%;
    color: gray;
    size: 1;
}



.input input {
  width: 30%;
  border: none;
  padding: 4px 4px 4px 30px;
  height: 30px;
  border-radius: 10px;
  font-size:13px;
  display: block;
  position: relative;
  top: 15px;
  left: 70px;   
}

.btn {
    width: 250px;
    height: 30px;
    border: none;
    background: rgba(237, 209, 96, 0.669);
    color: black;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
    display: block;
    padding:10px,10px;
    border: 0ch;
    border-radius: 30px;
    position: relative;
    top: 30px;
    left: 70px;
}
</style>
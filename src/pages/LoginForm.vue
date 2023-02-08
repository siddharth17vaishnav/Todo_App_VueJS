<script setup>
import { reactive } from 'vue';
import router from "../Routes"

const data = reactive({
    email: "test@test.com",
    password: "password",
    error: null
})
const onsubmit = (e) => {
    e.preventDefault();
    if (data.email === 'test@test.com' && data.password === "password") {
        data.error = null
        localStorage.setItem("isLoggedIn", true)
        router.push('/home')
    }
    else { data.error = "Incorrect email or password!" }
}
</script>
<template>
    <div >
        <h2>LOGIN INTO TODO APP</h2>
        <form class="form" @submit="onsubmit">
         <input type="email" placeholder="Email" v-model="data.email" required/>
        <input type="password" placeholder="Password" v-model="data.password" required/> 
        <button type="submit">SUBMIT</button>
        <p class="error">{{ data.error }}</p>
    </form>
    </div>
</template>
<style>
.form {
    display: flex;
    flex-direction: column;
}

.form input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.form button {
    background-color: darkslateblue;
    color: whitesmoke;
}

.error {
    color: red
}
</style>
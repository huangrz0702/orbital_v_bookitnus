<template>
<header>
    <nav class = "container">
        <div class = "branding">
            <router-link class = "header" :to = "{name : 'Home'}">BOOKit@NUS</router-link>
        </div>
        <div class = "nav-links">
            <ul>
                <router-links class = "link" to = "#will update">Home</router-links>
                <router-links class = "link" to = "#will update">Book Facilities</router-links>
                <router-links class = "link" to = "#will update">Forum</router-links>
                <router-links class = "link" to = "#will update">User</router-links>
                <router-links class = "link" to = "#will update">Login/Register</router-links>
            </ul>
        </div>
    </nav>
</header>
</template>

<script>
export default {};
</script>

<style lang = "scss" scoped></style>
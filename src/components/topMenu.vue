<template>
    <div class="topMenu">
        <div class="logo">
            <img src="../assets/img/darth_white.svg" alt="logo">
        </div>
        <div class="menu">
            <router-link tag="a" to="/vuejs">VueJS</router-link>         
            <router-link tag="a" to="/cpp">C++</router-link>
            <router-link tag="a" to="/js">JavaScript</router-link>
            <router-link tag="a" to="/linux">Linux</router-link>
        </div>
        <div class="auth">
            <router-link tag="a" to="/auth">ENTER</router-link>
        </div>
    </div>
</template>

<script>

</script>

<style lang="stylus" scoped>
  @import '../assets/style/topMenu'
</style>

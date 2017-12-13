<template>
    <div class="notFound">
        <img src="../assets/img/darth_black.svg" alt="logo">        
        <div class="output">
            <div class="notMessage">
                <h2>404</h2>
                <h3>Page not found</h3>
            </div>
            <div class="notLink">
                <router-link tag="a" to="/vuejs"> < Main page</router-link>
            </div>
        </div> 
    </div>
</template>

<script>
  
</script>

<style lang="stylus" scoped>


.notFound
    text-align center
    margin -8px
    
    img 
        padding 100px 0 0
        width 280px
        height 280px

    .output
        width 400px
        margin auto

        .notMessage
            display inline-block

            h2
                font-size 2.2em
                font-weight 800
                color darkred
                margin-top .8em
                letter-spacing: 1.6px
                text-transform uppercase

            h3
                font-size 2em
                font-weight 600
                margin-top .8em
                letter-spacing: 1.6px
                text-transform uppercase
        
        .notLink
            display inline-block
            left 0

            a
                color darkblue
                text-decoration none
                font-family Geneva, Arial, Helvetica, sans-serif
                font-size 2em

            a:hover
                color #B9A7C2
</style>
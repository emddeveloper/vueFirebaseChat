<template>
    <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo" v-if="type==='Header'"><router-link to="/">{{title}}</router-link></a>
            <p v-else>{{title}}</p>
            <ul id="nav-mobile" class="right">
                <li><a v-if="type==='Header'">{{ time }}</a></li>
            </ul>
            </div>
        </nav>
    </div>
</template>
<script>
import moment from 'moment'
export default {
   name:'Header' ,
   props:['title','type'],
   data(){
       return{
           time:null
       }
   },
   methods:{
       update(){
            this.time=moment().format('LTS')
       }
   },
   created(){
       setInterval(()=>{this.update()},1000)
   }
}
</script>
<style scoped>
.nav-wrapper{
   padding-left: 20px;
   padding-right: 20px;
}
p{
    margin:0;
}
.brand-logo{
        color: #ff00a5 !important;
}
</style>
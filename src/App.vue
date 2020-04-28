<template>
  <div id="app" >
    <Header :title="headertitle" :type="htype"></Header>
    <router-view/>
    <Header :title="footertitle" :type="ftype" class="footer"></Header>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components:{
    Header
  },
  data(){
    return{
      headertitle:"SK Chat World",
      footertitle:"Developed & Maintained By Sk Aminul Islam",
      htype:"Header",
      ftype:"Footer"
    }
  }
}
</script>

<style>
.footer{
   position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
}
</style>

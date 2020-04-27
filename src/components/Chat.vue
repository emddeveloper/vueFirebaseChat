<template>
   <div class="chat container">
      <h2>Chat</h2> 
      {{name}}
    </div> 
</template>
<script>
export default {
    name:'Chat',
    props:['name'],
    data(){
        return{

        }
    }
}
</script>

<style scoped>

</style>
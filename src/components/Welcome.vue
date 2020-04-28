<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name" class="pink-text">Enter your name:</label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
           <button class="btn waves-effect waves-light pink" type="submit" name="action">Enter the chat
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name:null,
      feedback:null
    }
  },
  methods: {
    enterChat(){
      if(this.name){
         this.feedback=null
         this.$router.push({name:'Chat', params:{ name : this.name }})
      }
      else{
        this.feedback="You must enter a name to join chat"
      }
     
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome{
  max-width: 400px;
  margin-top:60px
}

.welcome .btn{
  margin-top:30px;
}

.welcome h2{
  font-size: 1.8em;
  margin:10px auto;
         color: #ee6e73 !important;
}
.btn{
    background-color: #ee6e73 !important;
}
</style>

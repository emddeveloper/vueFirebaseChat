<template>
    <div class="new-message">
        <form class="add-message" @submit.prevent="addMessage">
            <label for="new-message">New message (Enter to add)</label>
            <p v-if="feedback" class="red-text error">{{ feedback }}</p>
            <input type="text" name="new-message" v-model="newMessage">
        </form>
    </div>
</template>
<script>
import db from '@/firebase/init'
export default {
    name:'NewMessage',
    props:['name'],
    data(){
        return{
            newMessage:null,
            feedback:null
        }
    },
    methods:{
        addMessage(){
            if(this.newMessage){
                this.feedback=null
                db.collection('messages').add({
                    content:this.newMessage,
                    name:this.name,
                    time:Date.now()
                }).catch(err =>{
                    console.log(err )
                })
                this.newMessage=null
            }
            else{
                this.feedback="Type a message!"
            }
        }
    }
}
</script>
<style scoped>
.error{
    font-size: 0.7em;
    margin:0;
}
</style>
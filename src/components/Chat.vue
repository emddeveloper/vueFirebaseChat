<template>
   <div class="chat container">
        <h2 class="center teal-text">Chat Room</h2>
        <div class="card">
            <div class="card-content">
                <ul class="message" v-chat-scroll="{smooth: true, notSmoothOnInit: true}">
                    <li v-for="message in messages" :key="message.id">
                        <span class="teal-text">{{ message.name }}</span>
                        <span class="grey-text text-darken-3">{{message.message}}</span>
                        <span class="grey-text time">{{message.time}}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name"></NewMessage>
            </div>
        </div>
    </div> 
</template>
<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'
export default {
    name:'Chat',
    props:['name'],
    components:{
        NewMessage
    },
    data(){
        return{
            messages:[]
        }
    },
    created(){
        let ref = db.collection('messages').orderBy("time")

        ref.onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change =>{
                if(change.type=="added"){
                    let doc = change.doc
                    this.messages.push({
                        id:doc.id,
                        name:doc.data().name,
                        message:doc.data().content,
                        time:moment(doc.data().time).format('lll')
                    })
                }
            })
        })
    }
}
</script>

<style scoped>
.chat h2{
    font-size: 2.6em;
    margin-bottom: 50px;
}
.chat span{
    font-size: 1.4em;
}
.chat .time{
    font-size: 1em;
    display: block;
}
.chat .message{
    max-height:300px;
    overflow: auto;
}
.card .card-content{
    padding-bottom: 0;
}
.message::-webkit-scrollbar{
    width:3px;
}
.message::-webkit-scrollbar-track{
    background:#ddd;
}
.message::-webkit-scrollbar-thumb{
    background:#aaa;
}
@media( max-width:500px){
.chat h2{
    font-size: 2em;
   margin: 5px;
}
.chat span{
    font-size: 1em;
}
.chat .time{
    font-size: 0.6em;
    display: block;
}
}
</style>
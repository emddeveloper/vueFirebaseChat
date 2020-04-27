<template>
   <div class="chat container">
        <h2 class="center teal-text">Chat Room</h2>
        <div class="card">
            <div class="card-content">
                <ul class="message">
                    <li>
                        <span class="teal-text">Name</span>
                        <span class="grey-text text-darken-3">Message</span>
                        <span class="grey-text time">Time</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <input type="text">
            </div>
        </div>
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
@media( max-width:500px){
.chat h2{
    font-size: 2em;
    margin-bottom: 40px;
}
.chat span{
    font-size: 1em;
}
.chat .time{
    font-size: 0.8em;
    display: block;
}
}
</style>
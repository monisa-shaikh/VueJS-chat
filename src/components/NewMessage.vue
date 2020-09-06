<template>
    <div class="new-message">
        <!-- <h2>{{ this.name}}</h2> -->
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (plz press enter to add):</label>
            <i class="material-icons send" @click="addMessage">send</i>
            <input type="text" name="new-message" v-model="newMessage" >
            <p class="red-text">{{  feedback }}</p>
        </form>
    </div>
</template>
<script>
import db from '@/firebase/init'
export default {
    name:'newMessage',
    props:['name'],
    data(){
        return{
             newMessage:null,
             feedback:null
        }
       
    },
    methods:{
        addMessage(){
            // console.log(this.newMessage,this.name,Date.now())
            if(this.newMessage){
                db.collection('message').add({
                    content:this.newMessage,
                    name:this.name,
                    timestamp:Date.now()
                }).catch(err=>{
                    console.log(err)
                })
                this.newMessage=null
                this.feedback=null
            }
            else{
                this.feedback="You must enter a message in order to send one"
            }
        }
    }
}
</script>
<style >

.send{
       position: absolute;
    right: 20px;
    bottom: 40px;
    color: #aaa;
    cursor: pointer;
    font-size: 2.4em;
}
</style>
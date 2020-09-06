<template>
<div class="chat container">
<!-- <h2>Chat Component {{ this.name }}</h2> -->
<h2 class="center teal-text">VueJS Chat</h2>
   <div class="row">
         <div class="col-xs-12 col-sm-4">
             <div class="card">
                 <div class="card-content">
                     <ul class="messages" v-chat-scroll>
                         <li v-for="message1 in message" :key="message1.id">
                            <span class="teal-text">{{ message1.name }}</span>
                            <span class="gray-text text-darken-3">{{ message1.content }}</span>
                            <span class="gray-text time">{{ message1.timestamp }}</span>
                         </li>
                     </ul>
                 </div>
                 <div class="card-action">
                  <NewMessage :name="name" />
                 </div>
             </div>
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
            message:[]
        }
    },
    created(){
        let ref=db.collection('message').orderBy('timestamp')

        ref.onSnapshot(snapshot=>{
            snapshot.docChanges().forEach(change => {
                if(change.type== 'added')
                {
                    let doc=change.doc
                    this.message.push({
                        id:doc.id,
                        name:doc.data().name,
                        content:doc.data().content,
                        timestamp:moment(doc.data().timestamp).format('lll')
                    })
                }
            });
        })
    }
    // created(){
    //     let ref=db.collection('messages')
    //     ref.onSnapshot(snapshot=>{
           // // snapshot.docChanges for lower version4.12/4.13
            // console.log(snapshot.docChanges ())
            // snapshot.docChanges.forEach(change => {
            //     if(change.type== 'added')
            //     {
            //         let doc=change.doc
            //         this.message.push({
            //             id:doc.id,
            //             name:doc.data().name,
            //             content:doc.data().content,
            //             timestamp:doc.data().timestamp
            //         })
            //     }
            // });
    //     })
    // }
}
</script>
<style >
.chat{
    /* font-size: 2.6em; */
    margin-bottom: 40px;
}
.chat span{
    font-size: 1.4em;
}
.chat .time{
    display: block;
    font-size: 0.8em;
}
.messages{
    max-height: 300px;
    overflow: auto;
}
.messages::-webkit-scrollbar{
    width:3px;
}
.messages::-webkit-scrollbar-track{
    background: #ddd;
}
.messages::-webkit-scrollbar-thumb{
    background: #aaa;
}
</style>
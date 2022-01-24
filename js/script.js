new Vue({
    el:"#app",
    data:{
        mailList:[],
    },
    mounted(){
        for(i=0;i<10;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result)=>{       
                this.mailList.push(result.data.response);
            })
        }
    }
})
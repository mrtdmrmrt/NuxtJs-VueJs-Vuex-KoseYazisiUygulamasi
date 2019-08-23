<template>

    <PostDetail :post="fetchedPost"/>
    
</template>

<script>
import PostDetail from "@/components/post/PostDetail"
import axios from "axios"
export default {
    components : {
        PostDetail
        
    },
    asyncData(context){
        return axios.get("https://kose-yaziliri-nuxtjs.firebaseio.com/posts/" + context.params.postId +".json")
        .then(res=>{
            return {
                fetchedPost : res.data
            }
        })
    }

    //this.$route.params._postId  --> context bunu bize verir
/*
    asyncData (context,callback){
        setTimeout(()=>{
            //callback(null,{}) null burda hata oluşturmamak için yazıldı
            callback(null, {
                fetchedPost : {
                
                    id: 1 , 
                    title : "NuxtJs" , 
                    subTitle : "Yeni Teknoloji Postun ID si ("+ context.params.postId +")",
                    text : "Herzaman gelişime açık olun.",
                    author : "Mert DEMİR"
                }

            })
        },500)
    }
    */
  
}
</script>


<style>
</style>
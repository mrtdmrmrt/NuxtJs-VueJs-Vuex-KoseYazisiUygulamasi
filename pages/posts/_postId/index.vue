<template>

    <PostDetail :post="fetchedPost"/>
    
</template>

<script>
import PostDetail from "@/components/post/PostDetail"

export default {
    components : {
        PostDetail
        
    },
    //this.$route.params._postId  --> context bunu bize verir

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
  
}
</script>


<style>
</style>
<template>
<div>
    <PostList :posts="fetchedPosts"/>
    
</div>

</template>

<script>
import PostList from "@/components/post/postList"

export default {
    components : {
        PostList
        
    },
    
    
    asyncData(context, callback){
        //callback(hatalarla uğraşmak istiyorsak , ikici geri döndürelecek object)
        setTimeout(()=>{

            callback(null,{
            
            fetchedPosts : [
                  {
                    id: 1 , 
                    title : "NuxtJs" , 
                    subTitle : "Yeni Teknoloji",
                    text : "Herzaman gelişime açık olun.",
                    author : "Mert DEMİR"
                },
                {
                    id: 2 , 
                    title : "VueJs" , 
                    subTitle : "Süper Teknoloji",
                    text : "Herzaman gelişime açık olun.",
                    author : "Mert DEMİR"
                }
            ]
        })
        },1000)
        
        
    }
  
}
</script>


<style>
</style>
<template>
<div>
    <PostList :posts="fetchedPosts"/>
    <about />
</div>

</template>

<script>
import PostList from "@/components/post/postList"
import About from "@/components/home/About"
export default {
    components : {
        PostList,
        About
    },
    /*
    data(){
        return {
            fetchedPosts : []
        }
    },
    */
    created(){ 
        //dispatch actions a tekabil eder
       // this.$store.dispatch("setPosts",this.fetchedPosts)
    },
    computed : {
        fetchedPosts(){
            return this.$store.getters.getPosts
        }
    },
    
    //verileri server tarafında yapmamızı sağlar nuxtjs e aittir.
    //asyncData sayesinde sayfa rander edidi.
    //asyncData içinde this kullanılmaz

    //promise yaklaşımında callback yazılmaz yoksa sayfa sonsuz döngüye girer
    //asyncData dışında fetch() de kullanılabilir faydası this anahtar kelimesini kullanabiliriz 
    //fetch() farkı server üzerinde çalışıp satate i güncellemek
/*
    fetch(context){
        //ilk başta sunucu tarafında çalışır sonra spa ya dönüşür
        //console.log(context);
        //callback(hatalarla uğraşmak istiyorsak , ikici geri döndürelecek object)



        //Hata Fırlatmak için 2. yaklaşım
       
        return new Promise((resolve,reject)=>{
            //başarılı ise
            /*
            resolve(
                {
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
                }
            );
           


           context.store.dispatch("setPosts",
          )
           resolve();
           //reject(new Error())

        })
        //data = fetchedPosts
        /*
        .then(data=>{
            //console.log(data);
            return data;
        })
        
        .catch(e=>{
            context.error(e);
        })
        
/*
        setTimeout(()=>{
             //callback(null,{}) null burda hata oluşturmamak için yazıldı
             //callback(new Error(),{})
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
 */
  
}
</script>


<style>
</style>
<template>
<div>
    <div class="container d-flex justify-content-center align-items-center">
        <button @click="$router.push('/admin/new-post')" class="btn btn-dark">Yeni Bir Yazı Ekle</button>
    </div>
    <PostList 
    :posts="fetchedPosts"
    :is-admin="true"/>
    
</div>

</template>

<script>
import PostList from "@/components/post/postList"

export default {
    head : {
        title : 'Admin | Köşe Yazısı'
    },
    layout : "admin",
    components : {
        PostList
        
    },
    //verileri vuex de tuttuğumuz için computed oluşturduk
    computed : {
        fetchedPosts(){
            return this.$store.getters.getPosts
        }
    }
  
}
</script>


<style>
</style>
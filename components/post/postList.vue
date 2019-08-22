<template>
<div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <post
    :post="post" 
    v-for="post in posts" 
    :is-admin="isAdmin" 
    :key="post.id"/>
</div>
    
</template>
<script>
import Post from "@/components/post/Post"
export default {
    components : {
        Post
    },
    props : {
        isAdmin : {
            type : Boolean,
            required : false,
            default : false
        },
        posts : {
            require : true,
            type : Array,
            default : []
        }
    }
    
}
</script>
<template>
    <PostForm
    @submit="updatePost($event)" 
    :is-update="true" 
    :post="fetchedPost"/>
</template>
<script>
import PostForm from "@/components/admin/PostForm"
import axios from "axios"
export default {
    components : {
        PostForm
    },
     asyncData(context){
        return axios.get("https://kose-yaziliri-nuxtjs.firebaseio.com/posts/" + context.params.postId +".json")
        .then(res=>{
            return {
                fetchedPost : res.data
            }
        })
    },
    methods : {
        updatePost(editedPost){
            this.$store.dispatch("updatePost",{...editedPost , id : this.$route.params.postId})
            .then(res=>{
                this.$router.push("/admin")
            })
        }
    }

}
</script>
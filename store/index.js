import Vuex from "vuex"
import axios from "axios"

const createStore = ()=>{
    return new Vuex.Store({
        state : {
            fetchedPosts : []
        },
        mutations : {
            setPosts(state,posts){
                state.fetchedPosts = posts
            },
            addPost(state,post){
                state.fetchedPosts.push(post)
            },
            updatePost(state,editedPost){
                let postIndex= state.fetchedPosts.findIndex(post=>post.id == editedPost.id)
                if(postIndex)
                {
                    state.fetchedPosts[postIndex]=editedPost
                }
            }
        },
        actions : {
            addPost(vuexContext,post){
                return axios.post("https://kose-yaziliri-nuxtjs.firebaseio.com/posts.json",post)
                .then(res=>{
                    //vuexContext.commit("addPost",{id:res.data.name, ...post}) bu durumda id ezilir ve null gelir onun için ...postu başa aldık
                    vuexContext.commit("addPost",{...post, id:res.data.name})
                    //this.$router.push("/admin")

                })
            },
            updatePost(vuexContext,editedPost){
                return axios.put("https://kose-yaziliri-nuxtjs.firebaseio.com/posts/" + editedPost.id +".json",editedPost)
                .then(res=>{
                vuexContext.commit("updatePost",editedPost)
            })
            .catch(e=>console.log(e))
            },
            //fetch() , ayncData altarnatir nuxtServerInit
            nuxtServerInit(vuexContext,context){
                return axios.get("https://kose-yaziliri-nuxtjs.firebaseio.com/posts.json")
                .then (res => {
                    //console.log(res)
                    let postArray = []
                    let data = res.data;
                    for(let key in data)
                    {
                        //data["id"]=key
                       //postArray.push(data[key])
                       //...data[key] --> data nın içinde ki her bir keye ait value ları getir demek
                       postArray.push({id : key, ...data[key] })
                    }
                    vuexContext.commit("setPosts" , postArray)
                })
                //process bize server da mı yoksa clientde miyiz onun bilgisini verir.
                /*
                if(!process.client)
                {
                    console.log("Server üzerinde çalışıyoruz")
                }
                */
                
                /*
                vuexContext.commit("setPosts", [
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
              ])
              */
            },
            setPosts(vuexContext,posts){
                vuexContext.commit("setPosts" , posts)
            }
        },
        getters : {
            getPosts(state){
                return state.fetchedPosts
            }
        }
    })
}

export default createStore
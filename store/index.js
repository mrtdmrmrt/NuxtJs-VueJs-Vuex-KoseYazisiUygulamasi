import Vuex from "vuex"

const createStore = ()=>{
    return new Vuex.Store({
        state : {
            fetchedPosts : []
        },
        mutations : {
            setPosts(state,posts){
                state.fetchedPosts = posts
            }
        },
        actions : {
            //fetch() , ayncData altarnatir nuxtServerInit
            nuxtServerInit(vuexContext,context){
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
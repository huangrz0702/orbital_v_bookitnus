import router from "../router";
import Vuex from 'vuex'
import { db, auth } from "../firebase/index";
import { signOut} from "firebase/auth";
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    state :{
        user: null,
        username: "",
        blogs: [],
    },

    mutations: {
        //change the state

        SET_USER(state, user) {
            state.user = user;
        },

        SET_PROFILE(state, data) {
            state.username = data.name;

            if (data.blogs) {
                //if user has created blogs before
                state.blogs = data.blogs;
            }
        },

        SET_USERNAME(state, name) {
            state.username = name;
        },

        CLEAR_USER(state) {
            state.user = null;
        },
    },
    actions: {
        async logout({ commit }) {
            await signOut(auth);

            commit("CLEAR_USER");
            router.push({ name: "LoginPage" });
        },

        createBlog ({commit, getters}, payload) {
            const blog = {
                creatorId: getters.user.auth.email,
                title: payload.title,
                venue: payload.location,
                date: payload.date,
                content: payload.content,
                imageUrl: payload.imageUrl,
            }
            firebase.database().ref('blogs').push(blog)
                .then((data) => {
                    const key = data.key;
                    return key
            })
            .then((key) => {
                const filename = payload.image.name
                const ext = filename.slice(filename.lastIndexOf('.'))
                firebase.storage().ref('blogs/' + key + '.' + ext).put(payload.image)
            })
            .then(fileData => {
                imageUrl = fileData.metadata.downloadURLs[0]
                return firebase.database().ref('blogs').child(key).update({imageUrl: imageUrl})

            })
            .then(() => {
                commit('createBlog', {
                    ...blog,
                    imageUrl:imageUrl,
                    id:key
                })
            })
            .catch((error) => {
                console.log(error)
            })

        }

    }
})
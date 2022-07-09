<template>
    <div class="header-title">
    <h2>{{ post.title }}</h2>
    </div>
</template>

<script>
import { ref as Ref } from "vue";
import { db} from "@/firebase/firebaseinit";
import {
  doc,
  getDoc,
} from "firebase/firestore";
//import { getDownloadURL, ref } from '@firebase/storage';
export default {
  props: ["id"],

  setup(props) {
    const post = Ref("");
    //const imgurl = Ref("")

    const load = async () => {
      try {
        const res = await getDoc(doc(db, "blogDetails", props.id));
        post.value = res.data();
        // console.log(res.data().coverPhoto)
        //getDownloadURL(ref(storage, res.data().picture)).then((url) => {
          //imgurl.value = url;
        //})
      } catch (err) {
        alert(err.message);
      }
    };
    load();

    //const comments = Ref([]);
    //const dbRef = collection(db, "blogs/" + props.id + "/comments");
   

    return { post, load };
  }
}
</script>
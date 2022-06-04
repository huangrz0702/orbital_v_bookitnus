import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SvgIcon from "@/components/svgIcon.vue"
import "./assets/icons/index";
require("vue-ionicons/ionicons.css");

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import BlogCard from "./components/BlogCard.vue";


const app = createApp(App)

app.use(router)
app.component("svg-icon", SvgIcon);
app.component("QuillEditor", QuillEditor);
app.component("BlogCard", BlogCard)
app.mount('#app')



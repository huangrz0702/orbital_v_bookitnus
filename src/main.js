import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SvgIcon from "@/components/svgIcon.vue"
import "./assets/icons/index";
require("vue-ionicons/ionicons.css");
import navigationBar from './components/Navigation.vue'
import BlogCard from "./components/BlogCard.vue";
import FacCard from "./components/FacCard.vue";
import FiltersF from "./components/FiltersF.vue";
import Filters2F from "./components/Filters2F.vue";
import PopUp from "./components/PopupF.vue";
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const app = createApp(App)


app.use(router)
app.component("navigationBar", navigationBar);
app.component("svg-icon", SvgIcon);
app.component("BlogCard", BlogCard);
app.component("FacCard", FacCard);
app.component("FiltersF",FiltersF);
app.component("Filters2F",Filters2F);
app.component("PopUp",PopUp);
app.component("VueperSlides",VueperSlides)
app.component("VueperSlide",VueperSlide)


app.mount('#app')



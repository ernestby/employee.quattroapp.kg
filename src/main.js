import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
import Buefy from "buefy";
import Loader from "@/components/Loader";

import messagePlugin from "@/utils/message.plugin";

Vue.use(Vuelidate);
Vue.use(Buefy);
Vue.use(messagePlugin);

Vue.component(Loader);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

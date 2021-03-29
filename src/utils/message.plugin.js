import { ToastProgrammatic as Toast } from "buefy";

export default {
  install(Vue, options) {
    Vue.prototype.$message = function(html) {
      Toast.open({
        duration: 2000,
        message: `${html}`,
        position: "is-bottom",
      });
    };

    Vue.prototype.$error = function(html) {
      Toast.open({
        duration: 2000,
        message: `${html}`,
        position: "is-bottom",
        type: "is-danger",
      });
    };
  },
};

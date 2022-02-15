import Progress from "./components/CoProgress.vue";

const ProgressBarSimple = {
    install(Vue) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("cProgress", Progress);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ProgressBarSimple);
}

export default ProgressBarSimple;
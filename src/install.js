import Progress from "./components/CoProgress.vue";

const CoProgress = {
    install(Vue) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("CoProgress", Progress);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(CoProgress);
}

export default CoProgress;
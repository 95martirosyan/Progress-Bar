import CoProgress from "./components/CoProgress.vue";

const CoProgressBar = {
    install(Vue) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("Progress", CoProgress);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(CoProgressBar);
}

export default CoProgress;
import Vue from 'vue';
import PaperRockScissors from './PaperRockScissors';

new Vue({
    render: createElement => createElement(PaperRockScissors)
}).$mount('#root');
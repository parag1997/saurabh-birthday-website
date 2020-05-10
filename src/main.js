import Vue from 'vue'
import Vuesax from 'vuesax'
require('~/main.css')

import 'vuesax/dist/vuesax.css'


import PatterCSS from 'pattern.css/dist/pattern.css'

export default function(Vue, { router, head, isClient, appOptions }) {

    Vue.use(Vuesax)
    Vue.use(PatterCSS)
}
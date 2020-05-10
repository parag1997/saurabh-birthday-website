import Vue from 'vue'
import Vuesax from 'vuesax'
require('~/main.css')

import 'vuesax/dist/vuesax.css'


import PatterCSS from 'pattern.css/dist/pattern.css'

export default function(Vue, { router, head, isClient, appOptions }) {
    // Add an external Javascript before the closing </body> tag
    head.script.push({
        src: '//instant.page/3.0.0',
        type: 'module',
        integrity: 'sha384-OeDn4XE77tdHo8pGtE1apMPmAipjoxUQ++eeJa6EtJCfHlvijigWiJpD7VDPWXV1',
        body: true
    })

    Vue.use(Vuesax)
    Vue.use(PatterCSS)
}
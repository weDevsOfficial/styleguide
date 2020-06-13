import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Buttons from './views/Buttons.vue'
import Table from './views/Table.vue'
import Popover from './views/Popover.vue'
import Switch from './views/Switch.vue'
import DateTimePicker from './views/DateTimePicker.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'current',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/buttons', name: 'buttons', component: Buttons },
        { path: '/table', name: 'table', component: Table },
        { path: '/popover', name: 'popover', component: Popover },
        { path: '/switch', name: 'switch', component: Switch },
        { path: '/date-time-picker', name: 'date-time-picker', component: DateTimePicker },
    ]
})

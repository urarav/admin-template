import './styles/index.scss'
import 'modern-css-reset'

import { createApp } from 'vue'
import store from './stores/index'

import App from './App.vue'
import router from './router'

import '@/utils/auth'
import 'virtual:svg-icons-register'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { installPublicComponents } from '@/components'

const app = createApp(App)
app.use(installPublicComponents)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

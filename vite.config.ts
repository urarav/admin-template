import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import autoImportApi from 'unplugin-auto-import/vite'
import autoImportComponent from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        autoImportApi({
            imports: ['vue', 'pinia', 'vue-router'],
            resolvers: [ElementPlusResolver()],
        }),
        autoImportComponent({
            dirs: ['src/**/*'],
            resolvers: [ElementPlusResolver()],
            extensions: ['vue']
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css:{
        preprocessorOptions:{
            scss:{
                additionalData: '@import "@/styles/variables.scss";'
            }
        }
    }
})

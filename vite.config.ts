import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImportApi from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImportComponent from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    console.log(fileURLToPath(new URL('./src/assets/icons/svg', import.meta.url)))
    return {
        plugins: [
            vue(),
            vueJsx(),
            AutoImportApi({
                dts: fileURLToPath(new URL('./src/types/auto-import-api.d.ts', import.meta.url)),
                imports: ['vue', 'pinia', 'vue-router'],
                resolvers: [
                    ElementPlusResolver(),
                    IconsResolver({
                        prefix: 'Icon'
                    })
                ],
            }),
            AutoImportComponent({
                dts: fileURLToPath(new URL('./src/types/auto-import-component.d.ts', import.meta.url)),
                dirs: ['src/**/*'],
                extensions: ['vue'],
                resolvers: [
                    ElementPlusResolver(),
                    IconsResolver({
                        enabledCollections: ['ep']
                    })
                ],
            }),
            Icons({
                autoInstall: true
            }),
            createSvgIconsPlugin({
                iconDirs: [fileURLToPath(new URL('./src/assets/icons/svg', import.meta.url))],
                symbolId: 'icon-[dir]-[name]',
                inject: 'body-last',
                svgoOptions: command === 'build'
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '#': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/styles/variables.scss";'
                }
            }
        },
        server: {
            port: 8888,
            host: true,
            open: false,
            proxy: {
                '/dev-api': {
                    target: 'http://localhost:3000',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/dev-api/, '')
                }
            }
        }
    }
});

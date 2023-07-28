import type { App } from 'vue'

const publicComponentModules = import.meta.glob<any>(['./*/index.vue', './*/index.tsx'], {
  eager: true
})
export function installPublicComponents(app: App) {
  for (const [path, module] of Object.entries(publicComponentModules)) {
    const [, componentName] = path.match(/\.\/(.*)\/.*\.(vue|tsx)/) ?? []
    console.log(componentName)
    app.component(componentName, module.default)
  }
}

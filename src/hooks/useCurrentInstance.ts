export function useCurrentInstance() {
    const { appContext, proxy } = getCurrentInstance()!
    const { config: { globalProperties } } = appContext
    return { vm: globalProperties, vc: proxy }
}

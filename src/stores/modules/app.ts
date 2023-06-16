import Cookies from "js-cookie";

const useAppStore = defineStore('app', {
    state: () => {
        return {
            sidebar: {
                opened: true,
                withoutAnimation: false
            }
        }
    },
    actions: {
        toggleSidebar() {
            const { sidebar: { opened } } = this
            this.sidebar.opened = !opened
            Cookies.set('sidebarStatus', String(Number(opened)))
        }
    },
    getters: {
        sidebarStatus(): boolean {
            return this.sidebar.opened
        }
    }
})

export default useAppStore

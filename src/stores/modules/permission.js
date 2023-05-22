import constantRoutes from "@/router/constantRoutes";
const usePermissionStore = defineStore('permission', {
    state: () => ({
        constantRoutes,
        asyncRoutes: [],
        accessRoutes: [],
        routes: []
    }),
    actions() {
    }
});
export default usePermissionStore;

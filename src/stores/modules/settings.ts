interface ISettingStore {
  tagsView: boolean
  fixedHeader: boolean
  sidebarLogo: boolean
}

const useSettingStore = defineStore('settings', {
  state: (): ISettingStore => {
    return {
      tagsView: true,
      fixedHeader: false,
      sidebarLogo: false
    }
  },
  actions: {
    changeSetting(key: keyof ISettingStore, val: boolean) {
      this.$patch({
        [key]: val
      })
    }
  }
})

export default useSettingStore

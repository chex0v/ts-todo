import { App, Plugin } from "vue"
import axios from "@/http/axios"

export const AxiosPlugin: Plugin = {
  install(app: App) {
    app.config.globalProperties.$axios = axios
  },
}

import { createApp } from "vue"
import App from "./App.vue"
import plugins from "@/plugins"

require("../node_modules/materialize-css/dist/css/materialize.min.css")
require("./assets/icons.scss")

const app = createApp(App)

plugins.forEach((plugin) => app.use(plugin))

app.mount("#app")

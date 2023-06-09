import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [
				ElementPlusResolver({
					importStyle: "sass",
				}),
			],
		}),
		Components({
			resolvers: [
				ElementPlusResolver({
					importStyle: "sass",
				}),
			],
		}),
		// ElementPlus(),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
		extensions: [".js", ".json", ".ts"],
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/styles/element/index.scss" as *;`,
			},
		},
	},
})

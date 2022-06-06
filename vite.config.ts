import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import viteElectron from "vite-plugin-electron-builder";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    viteElectron({
      mainProcessFile: "src/background.ts",
      builderOptions: {
        appId: "com.example.app",
        productName: "example app",
        win: {
          icon: "build/icons/icon.ico",
          publisherName: "name",
        },
        nsis: {
          installerIcon: "build/icons/icon.ico",
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/",
});

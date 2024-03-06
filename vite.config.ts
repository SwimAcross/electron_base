import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import electron from 'vite-plugin-electron';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({
      entry: 'background.js',
    }),

    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  /*开发服务器选项*/
  server: {
    // 端口
    port: 3000,
  },
});

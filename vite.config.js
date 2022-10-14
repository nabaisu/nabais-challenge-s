import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  return {
    root: command,
    plugins: [vue()],
    resolve: {
      extensions: ['.js', '.json', '.vue', '.scss'],
    },
  };
});

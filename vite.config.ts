import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import legacy from '@vitejs/plugin-legacy';
import tailwindcss from '@tailwindcss/vite';
import { copyFileSync } from 'fs';
import path from 'path';

export default defineConfig(({ mode }) => ({
  base: '',
  build: {
    outDir: 'build',
  },
  plugins: [
    react(),
    {
      name: 'inject-script-env',
      enforce: 'pre',
      transformIndexHtml(html) {
        try {
          if (mode === 'development') {
            const env = loadEnv(mode, process.cwd(), '');
            const devScript = `<script>
              var DEBUG = "${env.VITE_DEBUG}" === 'true';
              var DEBUG_HOST = "${env.VITE_DEBUG_HOST}";
              var DEBUG_PORT = "${env.VITE_DEBUG_MDS_PORT}";
              var DEBUG_MINIDAPPID = "${env.VITE_DEBUG_MINIDAPPID}";
              var DEBUG_UID = "${env.VITE_DEBUG_UID}";
            </script></head>`;
            return html.replace('</head>', devScript);
          }
          return html;
        } catch (error) {
          console.warn(
            'Could not inject development environment variables, please check that the environment variables are set: ',
            error instanceof Error ? error.message : String(error)
          );
          return html;
        }
      },
    },
    tailwindcss(),
    {
      name: 'copy-changelog',
      closeBundle() {
        try {
          copyFileSync('CHANGELOG.md', 'build/CHANGELOG.md');
        } catch (error) {
          console.warn(
            'Could not copy CHANGELOG.md, please check that it exists in the root directory: ',
            error instanceof Error ? error.message : String(error)
          );
        }
      },
    },
    legacy({
      targets: ['defaults', 'not IE 11', 'Android >= 9'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}));

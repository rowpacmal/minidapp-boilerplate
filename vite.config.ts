import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  let devEnv = '';
  const env = loadEnv(mode, process.cwd(), '');

  if (mode === 'development') {
    devEnv = `<script>
      var DEBUG = "${env.VITE_DEBUG}" === 'true';
      var DEBUG_HOST = "${env.VITE_DEBUG_HOST}";
      var DEBUG_PORT = "${env.VITE_DEBUG_MDS_PORT}";
      var DEBUG_MINIDAPPID = "${env.VITE_DEBUG_MINIDAPPID}";
      var DEBUG_UID = "${env.VITE_DEBUG_UID}";
    </script></head>`;
  }

  return {
    base: '',
    build: {
      outDir: 'build',
    },
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'inject-script-env',
        transformIndexHtml(html) {
          return html.replace('</head>', devEnv);
        },
      },
    ],
  };
});

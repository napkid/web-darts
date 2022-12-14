import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        preact(),
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: [
                    '**/*.{js,css,html,png,ttf,svg,json}'
                ],
            }
        })
    ],
    resolve: {
        alias: {
            'react': 'preact/compat',
            'react-dom': 'preact/compat'
        }
    },
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        jsxInject: `import { h, Fragment } from 'preact'`
    },
    // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vite-plugin-ssr's CI
    optimizeDeps: {
        include: ['preact', 'preact/devtools', 'preact/debug', 'preact/jsx-dev-runtime', 'preact/hooks']
    }
})

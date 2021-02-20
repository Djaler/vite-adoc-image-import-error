import { defineConfig } from 'vite';
import asciidoc from 'rollup-plugin-asciidoc';

export default defineConfig({
    plugins: [
        asciidoc(),
    ],
});

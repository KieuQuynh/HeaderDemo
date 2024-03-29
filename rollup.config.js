import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel' 
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';
const cssExportMap = {};
const config = {
    input: 'src/index.js',
    external: ['react'],
    output: {
        format: 'umd',
        name: 'countdown',
        globals: {
            react: "React"
        },
        file:"dist/bundle.js"
    },
    
    
      plugins: [
        postcss({
            plugins: [
              postcssModules({
                getJSON (id, exportTokens) {
                  cssExportMap[id] = exportTokens;
                }
              })
            ],
            getExportNamed: false,
            getExport (id) {
              return cssExportMap[id];
            },
            extract: 'dist/style.css',
          }),
        babel({
          exclude: 'node_modules/**'
        }),
        uglify
      ]
}
export default config
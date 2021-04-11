const path = require('path');

module.exports = {
  plugins: [
    [
      '@electron-forge/plugin-webpack',
      {
        mainConfig: path.join(process.cwd(), 'tools/webpack/webpack.main.js'),
        renderer: {
          config: path.join(process.cwd(), 'tools/webpack/webpack.renderer.js'),
          entryPoints: [
            {
              html: path.join(process.cwd(), 'src/index.html'),
              js: path.join(process.cwd(), 'src/renderer.js'),
              name: 'main_window',
            },
          ],
        },
      },
    ],
  ],
};

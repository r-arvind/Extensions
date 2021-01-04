const path = require('path');


module.exports = {

    entry: './src/mmd-loader.ts',
    output: {
      path: path.resolve(__dirname , 'dist/'),
    //   publicPath: '/public',
      filename: 'mmdloader.js',
      library: 'MMDLoader',
      libraryTarget: 'umd',
      libraryExport: "default",
      umdNamedDefine: true,
    },
    devServer: {
      contentBase: './dist'
    },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
                {
            test: /\.css$/,
            use: [
                { loader: 'style-loader', options: { injectType: 'singletonStyleTag' } },
                                { loader: 'css-loader' },
            ]
        }
      ]
        },
    resolve: {
      extensions: ['.ts', '.js', '.pcss']
    },
     
  };
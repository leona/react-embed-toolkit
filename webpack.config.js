module.exports = {
    entry: {
        regular: './api.jsx'
    },
    output: {
        path: 'build/tmp',
        filename: 'build_raw.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
  		alias: {
  			'react': 'preact-compat',
  			'react-dom': 'preact-compat'
  		}
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015', 'react']
          }
        }]
    }
}
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './client/index.js',
    output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname, 'public')
    },
    module: {
	rules: [
	    {
		test: /\.js$/,
		exclude: /node_modules/,
		loader: "babel-loader"
	    }
	]
    },
    plugins: [
	new HtmlWebpackPlugin({
	    template: './client/index.html'
	})
    ]
};

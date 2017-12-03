const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var extractPlugin = new ExtractTextPlugin({
	filename: "main.css"
})

const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
	entry: APP_DIR + '/main.js',
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: 'bundle.js',
	},
	devServer: {
		inline: true,
		port: 6030,
		contentBase: path.resolve(__dirname, 'src')
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				include: APP_DIR,
				loader: 'babel-loader',
				query: {
			    cacheDirectory: true,
			    "presets" : ["es2015", "react", "stage-0"],
  				"plugins": ["transform-decorators-legacy", "transform-class-properties"]
			  }
			},
			{
				test: /\.css/,
				use: extractPlugin.extract({
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		extractPlugin
	]
}
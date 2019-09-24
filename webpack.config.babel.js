import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import Port from './.moi/port'
export default {
	entry: path.join(__dirname, 'src/main.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'pack',
			template: path.join(__dirname, 'public/index.html')
		}),
		new ScriptExtHtmlWebpackPlugin({
			defaultAttribute: 'defer'
		})
	],
	stats: {
		colors: true
	},
	devtool: 'source-map',
	mode: 'development',
	devServer: {
		contentBase: './dist',
		inline: true,
		port: Port() //my prefered port for development, but change as you see fit
	}
};

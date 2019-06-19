import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
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
			title: 'moi-vr',
			template: path.join(__dirname, 'src/public/index.html')
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
		port: 8085 //my prefered port for development, but change as you see fit
	}
};

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	// context: path.resolve(__dirname),
	entry: path.resolve(__dirname, './src/index.js'),
	watch: true,
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin(
			// {template: './src/index.html'}
		),
		new MiniCssExtractPlugin(
			// {filename: 'style.css',}
			),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, './src/public/'),
					to: path.resolve(__dirname, './build/') 
				},
				// { from: "other", to: "public" },
			],
		}),
	],//plugins
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/, /\.html$/],
				use: {
					loader: 'babel-loader',
					options: {
						"presets": ["@babel/preset-env", "@babel/preset-react"],
						// "plugins": []
					}
				}
			},//js
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, './src/scss/'),
				use: [
					MiniCssExtractPlugin.loader, 
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
					// {
					// 	loader: "postcss-loader",
					// 	// loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]_[hash:base64:5]&camelCase!postcss'
					// 	options: {
					// 		postcssOptions: {
					// 			plugins: [
					// 				[
					// 					"postcss-preset-env",
					// 				],
					// 			],//plugins
					// 		},
					// 	}//options
					// }//postcss
				],//use
			},//scss
			{
				test: /\.(jpg|jpeg|png|gif|svg)$/,
				// test: [/\.jpg$/, /\.png$/, /\.svg$/, /\.gif$/],
				exclude: /node_modules/,
				use: [
					'file-loader'//fail?
				]
			},
			// {
			//   test: /\.css$/i,
			//   use: ["style-loader", "css-loader", "postcss-loader"],
			// },
		],
	},
	// resolve: {
	//   extensions: ['*', '.js', '.jsx'],
	// },

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
	},
	devServer: {
		contentBase: '/build/',
		// contentBase: path.resolve(__dirname, './build'),
		// publicPath: '/build/',
		// watchContentBase: true,
		port: 9900,
		hot: true,
		// overlay: true,
		// watchOptions: {
		//   poll: true
		// }
	},
};
const isProductionMode = process.env.NODE_ENV === 'production'
const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const cssnano = require('cssnano')
const copyPlugin = require('copy-webpack-plugin')
const stylelintPlugin = require('stylelint-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const env_prod = process.env.NODE_ENV === 'production'

module.exports = {
	// context: path.resolve(__dirname),
	entry: path.resolve(__dirname, './src/index.js'),
	watch: true,
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/, /\.html$/],
				use: {
					loader: 'babel-loader',
					options: {
						'presets': ['@babel/preset-env', '@babel/preset-react'],
						// 'plugins': []
					}
				}
			},//js
			{
				test: /\.(scss|css)$/,
				exclude: /node_modules/,
				// include: path.resolve(__dirname, './src/scss/'),
				use: [
					// 'style-loader',//no need if miniCssExtractPlugin is used!!
					// 'url-loader',
					// 'file-loader',
					{
						loader: miniCssExtractPlugin.loader, 
						// options: {
						// 	publicPath: path.resolve(__dirname, './src/assets/')
						// }
					},
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[name]_[local]-[hash:base64:3]',
								exportLocalsConvention: "camelCase",
								// exportGlobals: true,
								// namedExport: true,
							},
							url: false,//!!!
							importLoaders: 2,//num of loaders after css-loader
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								// publicPath: path.resolve(__dirname, './src/assets/'),
								plugins: [
									'postcss-preset-env',
									env_prod &&
									new cssnano({
										preset: 'default'
									})
								],
								minimize: true
							}//postcssOptions
						}//options
					},//postcss
					'sass-loader',//!
				],//use
			},//css
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				// use: [
				// 	{
				// 		// loader: 'url-loader',
				// 		loader: 'file-loader',
				// 	},
				// ],
			},//img

		],//rules
	},//module

	// resolve: {//?
	//   extensions: ['*', '.js', '.jsx'],
	// },

	// resolve: {//may be needed later
  //   alias: {
  //     Utilities: path.resolve(__dirname, 'src/utilities/'),
  //     Templates: path.resolve(__dirname, 'src/templates/')
  //   }
  // }
	//then use in js: import Utility from 'Utilities/utility';

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ESLintPlugin(),
		new htmlWebpackPlugin(
			{template: './src/assets/index.html'}
		),
		new stylelintPlugin(),
		new miniCssExtractPlugin(
			{filename: 'style.css',}
		),
		new copyPlugin({
			patterns: [
				{//don't copy *html to avoid index.html rewriting
					globOptions: {
						// gitignore: true,
						dot: true,
						ignore: "**/*.html",
					},
					from: path.resolve(__dirname, './src/assets/'),
					to: path.resolve(__dirname, './build/')
				},
			],
		}),//copyPlugin
	],//plugins

	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'index.js',
		// publicPath: '/build/',
	},

	devServer: {
		port: 9900,
		historyApiFallback: true,//!!!
		contentBase: path.resolve(__dirname, './build'),
		watchContentBase: true,
		hot: true,//fail
		// publicPath: '/build/',
		// liveReload: true,//fail
		inline: true,
		overlay: true,
	},
};
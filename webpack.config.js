const isProductionMode = process.env.NODE_ENV === 'production';
const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');//fails, wait for upd or what?
const cssnano = require('cssnano');
const copyPlugin = require('copy-webpack-plugin');
const stylelintPlugin = require('stylelint-webpack-plugin');
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
					miniCssExtractPlugin.loader, 
					// isProductionMode ? miniCssExtractPlugin.loader : 'style-loader',
					// 'style-loader',//no need if miniCssExtractPlugin is used!!
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[name]_[local]__[hash:base64:3]',
							},
							importLoaders: 2,//num of loaders after css-loader
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
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
		new htmlWebpackPlugin(
			{template: './src/public/index.html'}
		),
		new stylelintPlugin(),
		new miniCssExtractPlugin(
			{filename: 'style.css',}
		),
		new copyPlugin({
			patterns: [
				{//don't copy entire /public, index.html rewriting causes problems!
					from: path.resolve(__dirname, './src/public/images'),
					to: path.resolve(__dirname, './build/images') 
				},
				// { from: 'other', to: 'public' },//if needed more
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
		// publicPath: '/build/',
		// contentBase: '/build/',
		contentBase: path.resolve(__dirname, './build'),
		watchContentBase: true,
		hot: true,//fail
		// liveReload: true,//fail
		inline: true,
		overlay: true,
		// watchOptions: {
		//   poll: true
		// }
	},
};
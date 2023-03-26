const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const copyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const isProductionMode = process.env.NODE_ENV === "production";

module.exports = {
	entry: path.resolve(__dirname, "./src/index.js"),
	watch: true,
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/, /\.html$/],
				use: {
					loader: "babel-loader",
					options: {
						"presets": [
							"@babel/preset-env",
							"@babel/preset-react"
						],
						"plugins": [
							// Make readable classes
							["babel-plugin-styled-components",
								{
									"displayName": true,
									"fileName": false,
									"ssr": true,
									"transpileTemplateLiterals": true,
									"preprocess": false,// experimental feature turned off explicitly
								}
							]
						]
					}
				}
			}, // js

			{// CSS Modules + + sass + tiny css for fouc-fix
				test: /\.(scss|css)$/,
				exclude: "/node_modules/",
				use: [// order matters!
					{
						loader: "style-loader",//1 - Creates `style` from JS OR miniCssExtractPlugin here
						// options: { injectType: "styleTag" }
					},
					// {
					// 	loader: miniCssExtractPlugin.loader,// OR style-loader
					// },
					{
						loader: "css-loader", // 2 - Translates CSS into CommonJS
						options: {
							modules: {
								mode: "local",
								localIdentName: "[local]-[hash:base64:3]",
								// exportLocalsConvention: "camelCase",
							},
							url: false,//!!!
							importLoaders: 1//num of loaders after css-loader
						}
					},
					"sass-loader"// 3
				],
			}, // css

		]//rules
	},//module

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ESLintPlugin({
			quiet: true
		}),
		new htmlWebpackPlugin(
			{template: "./src/assets/index.html"}
		),
		// new miniCssExtractPlugin(
		// 	{filename: "style.css"}
		// ),
		new copyPlugin({
			patterns: [
				{// Don't copy *html to avoid index.html rewriting
					globOptions: {
						dot: true,
						ignore: "**/*.html",
					},
					from: path.resolve(__dirname, "./src/assets/"),
					to: path.resolve(__dirname, "./build/")
				},
			],
		})
	],//plugins

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@data": path.resolve(__dirname, "src/data"),
			"@style": path.resolve(__dirname, "src/style"),
			"@components": path.resolve(__dirname, "src/components"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@assets": path.resolve(__dirname, "src/assets")
		}
	},

	output: {
		path: path.resolve(__dirname, "./build"),
		publicPath: "/",// otherwise react nested routes fail
		filename: "index.js"
	},

	devServer: {
		port: 9900,
		historyApiFallback: true,//!!!
		compress: true,
		hot: "only",
		watchFiles: ["src/**/*.*"],
		liveReload: true,
		client: {
			logging: "error",
		},
		headers: {
			"Access-Control-Allow-Origin": "*",// TMP, security
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
		},
		static: {
			watch: true,
			directory: path.resolve(__dirname, "./build"),
			publicPath: "/",
			serveIndex: true
		}
		// Provide an array of objects in case you have multiple static folders:
		// static: [
		// 	{
		// 		directory: path.join(__dirname, "assets"),
		// 		publicPath: "/serve-public-path-url",
		// 	},
		// 	{
		// 		directory: path.join(__dirname, "css"),
		// 		publicPath: "/other-serve-public-path-url",
		// 	},
		// ],
	}// devServer
}

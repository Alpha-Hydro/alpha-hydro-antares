const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./src/libs/parts');
const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
	app: path.join(__dirname, 'src'),
	root: path.join(__dirname, '.'),
	public: path.join(__dirname, 'public/js'),
	backend: path.join(__dirname, 'backend/js')
};

const common = merge(
	{
		resolve: {
			extensions: ['', '.js', '.jsx']
		},
	},
	/*parts.setFreeVariable(
		'process.env.NODE_ENV',
		'production'
	),*/
	parts.jQuery(),
	parts.extractBundle({
		name: 'vendor',
		entries: Object.keys(pkg.dependencies)
	}),
	parts.loadJSX(PATHS.app),
	parts.loadTS(PATHS.app)
	//parts.optimiseBuild(),
	//parts.minify()
);

const build = merge(
	parts.setFreeVariable(
		'process.env.NODE_ENV',
		'production'
	),
	parts.optimiseBuild(),
	parts.minify()
);

var config;

// Detect how npm is run and branch based on that
switch(TARGET) {
	case 'public:build':
		config = merge(common,
			{
				devtool: 'source-map',
				entry: {
					public: path.join(PATHS.app, 'public.js')
				},
				output: {
					path: PATHS.public,
					filename: '[name].js'
				}
			},
			build
		);
		break;
	case 'public:dev':
		config = merge(common, {
			devtool: 'eval-source-map',
			entry: {
				public: path.join(PATHS.app, 'public.js')
			},
			output: {
				path: PATHS.public,
				filename: '[name].js'
			}
		});
		break;
	case 'backend:build':
		config = merge(common,
			{
				devtool: 'source-map',
				entry: {
					backend: path.join(PATHS.app, 'backend.js')
				},
				output: {
					path: PATHS.backend,
					filename: '[name].js'
				}
			},
			build
		);
		break;
	case 'backend:dev':
		config = merge(common, {
			devtool: 'inline-source-map',
			entry: {
				backend: path.join(PATHS.app, 'backend.js')
			},
			output: {
				path: PATHS.backend,
				filename: '[name].js'
			}
		});
		break;
	default:
		config = merge(
			common,
			{
				devtool: 'eval-source-map',
				entry: {
					app: path.join(PATHS.app)
				},
				output: {
					path: PATHS.root,
					filename: '[name].js'
				},
				plugins: [
					new HtmlWebpackPlugin({
						title: 'Webpack demo'
					})
				]
			},
			parts.devServer({
				host: process.env.HOST,
				port: process.env.PORT
			})
		);
}

module.exports = validate(config);
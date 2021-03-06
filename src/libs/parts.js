const webpack = require('webpack');

exports.devServer = function(options) {
	return {
		watchOptions: {
			// Delay the rebuild after the first change
			aggregateTimeout: 300,
			// Poll using interval (in ms, accepts boolean too)
			poll: 1000
		},
		devServer: {
			// Enable history API fallback so HTML5 History API based
			// routing works. This is a good default that will come
			// in handy in more complicated setups.
			historyApiFallback: true,

			// Unlike the cli flag, this doesn't set
			// HotModuleReplacementPlugin!
			hot: true,
			inline: true,

			// Display only errors to reduce the amount of output.
			stats: 'errors-only',

			// Parse host and port from env to allow customization.
			//
			// If you use Vagrant or Cloud9, set
			// host: options.host || '0.0.0.0';
			//
			// 0.0.0.0 is available to all network devices
			// unlike default `localhost`.
			host: options.host, // Defaults to `localhost`
			port: options.port // Defaults to 8080
		},
		plugins: [
			// Enable multi-pass compilation for enhanced performance
			// in larger projects. Good default.
			new webpack.HotModuleReplacementPlugin({
				multiStep: true
			})
		]
	};
};

exports.minify = function() {
	return {
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			})
		]
	};
};

exports.optimiseBuild = function() {
	return {
        watch: false,
		plugins: [
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.OccurrenceOrderPlugin()
		]
	};
};


exports.setFreeVariable = function(key, value) {
	const env = {};
	env[key] = JSON.stringify(value);

	return {
		plugins: [
			new webpack.DefinePlugin(env)
		]
	};
};

exports.extractBundle = function(options) {
	const entry = {};
	entry[options.name] = options.entries;

	return {
		// Define an entry point needed for splitting.
		entry: entry,
		plugins: [
			// Extract bundle and manifest files. Manifest is
			// needed for reliable caching.
			new webpack.optimize.CommonsChunkPlugin({
				names: [options.name, 'manifest']
			})
		]
	};
};

exports.loadJSX = function(paths) {
	return {
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					// Enable caching for improved performance during development
					// It uses default OS directory by default. If you need
					// something more custom, pass a path to it.
					// I.e., babel?cacheDirectory=<path>
					loaders: ['babel?cacheDirectory'],
					// Parse only app files! Without this it will go through
					// the entire project. In addition to being slow,
					// that will most likely result in an error.
					include: paths
				}
			]
		}
	};
};

exports.loadTS = function(paths) {
	return {
		module: {
			loaders: [
				{
					test: /\.tsx?$/,
					loaders: ['awesome-typescript-loader'],
					include: paths
				}
			]
		},
		resolve: {
			extensions: ['', '.ts']
		}
	};
};

exports.enableReactPerformanceTools = function() {
	return {
		module: {
			loaders: [
				{
					test: require.resolve('react'),
					loader: 'expose?React'
				}
			]
		}
	};
};

exports.jQuery = function () {
	return {
		plugins: [
			new webpack.ProvidePlugin({
				jQuery: 'jquery',
				$: 'jquery',
				jquery: 'jquery'
			})
		]
	}
};
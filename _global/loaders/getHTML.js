const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (relative, files, same) {
	let templates = [];

	files.forEach(function (file, index) {
		let options = {};

		options["template"] = relative + "/" + path.basename(file);
		options["filename"] = path.basename(file);
		options["inject"] = 'body';
		if(!same) options["chunks"] = [path.basename(file, ".js")];

		templates.push(
			new HtmlWebpackPlugin(options)
		)
	});

    return templates;
};
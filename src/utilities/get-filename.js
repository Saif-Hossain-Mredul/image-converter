var path = require('path');

const getFileName = (filePath) => {
	try {
		var fileName = path.parse(filePath).base;

		const index = fileName.lastIndexOf('.');
        
		return fileName.substring(0, index);
	} catch (err) {
		console.log(chalk.redBright(err.message));
	}
};

module.exports = getFileName;

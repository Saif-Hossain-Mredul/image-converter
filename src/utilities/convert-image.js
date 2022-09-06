const sharp = require('sharp');
const chalk = require('chalk');

const getFileName = require('./get-filename');

const convertImage = async (filePath) => {
	try {
		filePath = filePath.split('\\').join('/');

		const fileName = getFileName(filePath);

		sharp(filePath)
			.webp()
			.toFile(`./images/${fileName}.webp`, function (err) {
				if (err) return console.log(chalk.redBright(err.message));

				console.log(chalk.greenBright('Successfully converted to .webp!'));
			});
	} catch (err) {
		console.log(chalk.redBright(err.message));
	}
};

module.exports = convertImage;

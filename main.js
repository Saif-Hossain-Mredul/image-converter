const yargs = require('yargs');
const convertImage = require('./src/utilities/convert-image');

yargs.command({
	command: 'convert',
	describe: 'Convert file to webp',
	builder: {
		path: {
			type: 'string',
			demandOption: true,
		},
	},
	handler: ({ path }) => {
		convertImage(path);
	},
});

yargs.parse();

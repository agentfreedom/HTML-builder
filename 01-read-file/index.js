const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, 'text.txt');

fs.readFile(pathToFile, 'UTF-8', (error, data) => {
	console.log(data);
});
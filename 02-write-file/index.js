const path = require('path');
const fs = require('fs');
const { stdin, exit } = require('process');

const pathToFile = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(pathToFile);
const sayBye = () => console.log('Thank you! Bye bye!');

console.log('Hi! Enter "exit" or "ctrl+c" for exit or your message for me and press enter:');

stdin.on('data', (chunk) => {
	if (chunk.toString().trim() === 'exit') {
		sayBye();
		exit();
	} 
	output.write(chunk);
});

process.on('SIGINT', () =>{
	sayBye();
	exit();
});
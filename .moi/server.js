import '@babel/polyfill';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
dotenv.config();

const app = express();
const port = 3030;

app.use(
	express.static(path.join(__dirname, '/../../dist')) ||
		express.static(path.join(__dirname, '/../dist'))
);


app.listen(port, () => {
	console.log(`Server running on: http://localhost:${port}`);
});

import '@babel/polyfill';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
dotenv.config();

const app = express();
const port = process.env.PORT || 3030;

app.use(cors());

app.use(express.static(path.join(__dirname, '/../dist')));


app.listen(port, () => {
	console.log(`Server running on: http://localhost:${port}`);
});

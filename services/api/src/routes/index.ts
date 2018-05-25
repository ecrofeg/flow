import * as express from 'express';
import { connect, db } from '../db';

const router = express.Router();

connect('mongodb://localhost:27017/flow').catch(error => console.warn(error));

router.get('/', async (req, res) => {
	await db().collection('tasks').insertOne({ text: 'some text' });

	res.send('test');
});

export default router;

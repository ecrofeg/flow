import * as express from 'express';
import { MongoClient, ObjectID } from 'mongodb';

const router = express.Router();

router.get('/', async (req, res) => {
	const client: MongoClient = await MongoClient.connect('mongodb://localhost:27017/flow');
	const db = client.db();
	await db.collection('tasks').insertOne({ text: 'some text' });

	res.send('test');
});

export default router;

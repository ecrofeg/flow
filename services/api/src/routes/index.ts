import * as express from 'express';
import { connect } from 'mongoose';

const router = express.Router();

connect('mongodb://localhost:27017/flow').catch(error => console.warn(error));

router.get('/', async (req, res) => {
	res.send('test');
});

export default router;

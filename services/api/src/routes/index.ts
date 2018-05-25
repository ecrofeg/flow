import * as express from 'express';
import { connect } from 'mongoose';
import User from '../models/User';

const router = express.Router();

connect('mongodb://localhost:27017/flow').catch(error => console.warn(error));

router.get('/', async (req, res) => {
	const user = new User({
		email: 'test@mail.com'
	});

	user.save();

	res.send('test');
});

export default router;

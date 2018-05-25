import * as express from 'express';
import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import User, { UserInterface } from '../models/User';

const router = express.Router();
export const jwtSecret = 'fvasdg124sadg#1234';

router.get('/', async (req, res) => {
	res.send('test');
});

router.post('/user', async (req, res) => {
	try {
		res.send(await User.create(req.body));
	}
	catch (error) {
		res.status(400);
		res.send(error);
	}
});

router.post('/login', async (req, res) => {
	await passport.authenticate('local', (err, user: UserInterface) => {
		if (!user) {
			res.send('Failed!');
		}
		else {
			const payload = {
				id: user.id,
				firstName: user.firstName,
				email: user.email
			};

			const token = jwt.sign(payload, jwtSecret);

			res.send({
				user: user.firstName,
				token: token
			});
		}
	})(req, res);
});

router.get('/custom', async (req, res) => {
	await passport.authenticate('jwt', function (err, user) {
		if (user) {
			res.send('hello ' + user.firstName);
		}
		else {
			res.send('No such user');
			console.log('err', err);
		}
	})(req, res);
});

export default router;

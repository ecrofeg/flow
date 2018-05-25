import { config as dotenv } from 'dotenv';
import { connect } from 'mongoose';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import routes, { jwtSecret } from './routes';
import User from './models/User';

dotenv();
connect('mongodb://localhost:27017/flow').catch(error => console.warn(error));

const app = express();

app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));

passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	session: false
}, async (email, password, done): Promise<void> => {
	try {
		const user = await User.findOne({ email });

		if (!user || !user.checkPassword(password)) {
			return done(null, null, { message: 'Нет такого пользователя или пароль неверен.' });
		}

		return done(null, user);
	}
	catch (error) {
		return done(error);
	}
}));

passport.use(new JwtStrategy({
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: jwtSecret
}, async ({ id }, done): Promise<void> => {
	console.log(id);
	try {
		const user = await User.findById(id);

		if (user) {
			return done(null, user);
		}
		else {
			return done(null, null);
		}
	}
	catch (error) {
		return done(error);
	}
}));

app.use('/', routes);
app.set('port', process.env.PORT || 5555);
app.listen(app.get('port'));

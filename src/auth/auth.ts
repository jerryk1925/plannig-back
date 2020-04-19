import * as bcrypt from 'bcryptjs';
import * as passport from 'koa-passport';
import { Strategy } from 'passport-local';

import { User } from '../entity/user';

const comparePassword = (userPw: string, databasePw: string): boolean => {
	return userPw === databasePw;
	// return bcrypt.compareSync(userPw, databasePw);
};

passport.use('local', new Strategy({
	usernameField: 'username',
	passwordField: 'password',
}, async (username, password, done) => {
	console.log(done)
	try {
		const dbUser = await User.getRepository()
		.createQueryBuilder('user')
		.where('user.username = :username', { username })
		.addSelect('user.password') // get hidden column
		.getOne();
		console.log(password)
		console.log('--',dbUser.password)
		console.log(comparePassword(password, dbUser.password))
		if (dbUser && comparePassword(password, dbUser.password)) {
			console.log('log')
			return done(null, dbUser);
		} else {
			console.log('notlog')
			return done(null, false);
		}
		
	} catch (error) {
		return done(error);
	}
}));

passport.serializeUser((user: any, done): void => {
	done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
	const user = await User.getRepository().findOne({ id });
	done(null, user);
});

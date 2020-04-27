import  passport from 'koa-passport';
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
	try {
		const dbUser = await User.getRepository()
		.createQueryBuilder('user')
		.where('user.username = :username', { username })
		.addSelect('user.password') // get hidden column
		.getOne();
		console.log('dbuser', dbUser)
		if (dbUser && comparePassword(password, dbUser.password)) {
			console.log('norm')
			return done(null, dbUser);
		} else {
			return done(null, false);
		}
		
	} catch (error) {
		console.log('error', error)
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

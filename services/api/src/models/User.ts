import { Document, Schema, model } from 'mongoose';
import * as crypto from 'crypto';

export interface UserInterface extends Document {
	email: string;
	firstName: string;
	lastName: string;
	passwordHash: string;
	salt: string;
	checkPassword: typeof schema.methods.checkPassword;
}

const schema = new Schema({
	email: String,
	firstName: String,
	lastName: String,
	passwordHash: String,
	salt: String
}, {
	timestamps: true
});

schema
	.virtual('password')
	.set(function (password: string): void {
		this._plainPassword = password;

		if (password) {
			this.salt = crypto.randomBytes(128).toString('base64');
			this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1');
		}
		else {
			this.salt = undefined;
			this.passwordHash = undefined;
		}
	})
	.get(function () {
		return this._plainPassword;
	});

schema.methods.checkPassword = function (password: string): boolean {
	console.log(password);
	console.log(this.passwordHash);

	return password && this.passwordHash ? crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1') == this.passwordHash : false;
};

export default model<UserInterface>('User', schema);

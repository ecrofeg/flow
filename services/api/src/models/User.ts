import { Model } from './Model';
import { Schema } from './Schema';

export interface UserSchema extends Schema {
	email: string;
	firstName: string;
	lastName: string;
}

export class User extends Model<UserSchema> {
	public fill(): void {

	}
}

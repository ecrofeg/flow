import { Document, Schema, model } from 'mongoose';
import { ModelInterface, modelSchema } from './Model';

export interface UserInterface extends Document, ModelInterface {
	email: string;
	firstName: string;
	lastName: string;
}

const schema = new Schema({
	...modelSchema,
	email: String,
	firstName: String,
	lastName: String
});

export default model<UserInterface>('User', schema);

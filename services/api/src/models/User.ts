import { Document, Schema, model } from 'mongoose';

export interface UserInterface extends Document {
	email: string;
	firstName: string;
	lastName: string;
}

const schema = new Schema({
	email: String,
	firstName: String,
	lastName: String
});

export default model<UserInterface>('User', schema);

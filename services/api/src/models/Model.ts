import { SchemaDefinition } from 'mongoose';

export const modelSchema: SchemaDefinition = {
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	}
};

export interface ModelInterface {
	created_at: string;
	updated_at: string;
}

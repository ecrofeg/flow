import { Document, model, Schema, Types } from 'mongoose';
import { ModelInterface, modelSchema } from './Model';

export interface ProductInterface extends Document, ModelInterface {
	author: Types.ObjectId
}

const schema = new Schema({
	...modelSchema,
	author: Types.ObjectId
});

export default model<ProductInterface>('Product', schema);

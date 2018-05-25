import { Document, model, Schema, Types } from 'mongoose';

export interface ProductInterface extends Document {
	author: Types.ObjectId
}

const schema = new Schema({
	author: Types.ObjectId
}, {
	timestamps: true
});

export default model<ProductInterface>('Product', schema);

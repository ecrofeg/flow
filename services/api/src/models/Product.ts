import { Model } from "./Model";
import { Schema } from "./Schema";
import { User } from "./User";

export interface ProductSchema extends Schema {
    author_id: number;
    name: string;
}

export class Product extends Model<ProductSchema> {
    public name: string;
    public author: User;

    public fill(schema: ProductSchema): void {
        this.name = schema.name;
    }
}
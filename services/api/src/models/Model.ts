export abstract class Model<T> {
    public id: number;

    constructor(schema: T) {
        this.fill(schema);
    }

    public abstract fill(schema: T): void;
}
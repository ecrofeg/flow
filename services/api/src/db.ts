import { Db, MongoClient, MongoClientOptions } from 'mongodb';

let dbInstance: Db;

export const connect = async (uri: string, options?: MongoClientOptions): Promise<Db> => {
	// Connect to MongoDB.
	const client: MongoClient = await MongoClient.connect(uri, options);

	// Cache DB instance.
	dbInstance = client.db();

	return dbInstance;
};

export const db = (): Db => dbInstance;

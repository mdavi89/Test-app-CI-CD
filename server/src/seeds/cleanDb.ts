import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    const model = models[modelName];

    // Check if the model and the database exist
    if (!model?.db?.db) {
      throw new Error(`Database connection or model for ${modelName} is not available`);
    }

    const modelExists = await model.db.db.listCollections({
      name: collectionName,
    }).toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};

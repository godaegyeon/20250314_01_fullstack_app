// const { MongoClient } = require("mongodb");
import { MongoClient } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://demo_user:1982@cluster0.mfakl.mongodb.net/";
const client = new MongoClient(uri);
// const dbName = ''
export async function readMovies() {
  try {
    await client.connect();
    const db = client.db("sample_mflix");
    const coll = db.collection("movies");
    const cursor = coll.find().limit(10);
    const users = await cursor.toArray()
    return users;

  } catch (e) {
    console.log(e);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
readMovies().catch(console.dir);

// export default run

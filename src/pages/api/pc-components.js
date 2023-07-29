import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const collection = client.db('pc-builder').collection('products');
    const data = await collection.find({}).toArray();

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong.' });
  } finally {
    await client.close();
  }
}

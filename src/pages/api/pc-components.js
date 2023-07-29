// import { MongoClient } from 'mongodb';

// export default async function handler(req, res) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET');
//   const uri = process.env.MONGODB_URI;
//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//   try {
//     await client.connect();
//     console.log("database connected");
//     const collection = client.db('pc-builder').collection('products');
//     const data = await collection.find({}).toArray();

//     res.status(200).json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Something went wrong.' });
//   } finally {
//     await client.close();
//   }
// }
import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Database connected");
    const collection = client.db('pc-builder').collection('products');

    const  id  = req.params;

    if (id) {
      // Fetch single data based on the provided ID
      if (!ObjectId.isValid(id)) {
        res.status(400).json({ message: 'Invalid component ID.' });
        return;
      }

      const component = await collection.findOne({ _id: new ObjectId(id) });

      if (!component) {
        res.status(404).json({ message: 'Component not found.' });
        return;
      }

      res.status(200).json(component);
    } else {
      // Fetch all data
      const data = await collection.find({}).toArray();
      res.status(200).json(data);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong.' });
  } finally {
    await client.close();
  }
}



import { MongoClient } from 'mongodb'
 const uri = process.env.MONGODB_URI;
 const options = {
  useNewUrlParser: true,
 };

 let clint 
 let clientPromise

 if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    clint = new MongoClient(uri, options)
    global._mongoClientPromise = clint.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  clint = new MongoClient(uri, options)
  clientPromise = clint.connect()
}
export default clientPromise


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://yashkumar9ipo:<db_password>@cluster0.icsmb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// export async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

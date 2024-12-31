
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
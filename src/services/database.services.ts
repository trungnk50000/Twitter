import { MongoClient, Db, Collection } from 'mongodb'
import User from '~/models/schemas/User.schema'
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ojgys4e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }
  async connect() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error: any) {
      await this.client.close()
    } finally {
      // Ensures that the client will close when you finish/error
      // await this.client.close()
    }
  }
  get users(): Collection<User> {
    return this.db.collection(process.env.DB_USERS_COLLECTION as string)
  }
}

const databaseService = new DatabaseService()
export default databaseService

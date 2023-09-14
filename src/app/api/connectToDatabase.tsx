import { Db } from "mongodb";
const { MongoClient, ServerApiVersion } = require('mongodb');

async function connectToDatabase() {

    const username = encodeURIComponent(process.env.MONGO_USERNAME);
    const password = encodeURIComponent(process.env.MONGO_PASSWORD);
    const cluster = process.env.MONGO_CLUSTER;

    let uri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`

    let cacheDb: Db = null;
    cacheDb && cacheDb



    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect()

        const database = client.db('cinemaport'); // Nome do banco de dados
        const collection = database.collection('projetos'); // Nome da coleção
    
        const projetos = await collection.find({}).toArray();
        return projetos

    } catch (err) {
        console.error(err)
    } finally {
        await client.close()
    }
}

connectToDatabase().catch(console.error)

export default connectToDatabase
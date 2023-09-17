const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s5nou2l.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const propertyCollection= client.db('ddProperty').collection('propertyType');

    app.get('/property/:type',async (req,res)=>{
        const propertyType = req.params.type;
        console.log(propertyType)
        
        if(propertyType ==='residential'){
            const result = await propertyCollection.find().toArray();
            return res.send(result)
        }
        else{
            const query={propertyType:propertyType}
            const result = await propertyCollection.find(query).toArray();
            return res.send(result)
        }
        
      })



    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('DD-Property server is runing')
  })
  
app.listen(port, () => {
    console.log(`DD-Property server is runing on port ${port}`)
})
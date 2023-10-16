const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(cors());
app.use(express.json());

// coffeeMaster
// V5w0m2r7Yazm09Pn


const uri = "mongodb+srv://coffeeMaster:V5w0m2r7Yazm09Pn@cluster0.ublbqgg.mongodb.net/?retryWrites=true&w=majority";

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
    await client.connect();

    const database = client.db("insertCoffeeDB");
    const coffeeCollection = database.collection("CoffeeCollection");

    app.get('/coffee', async(req, res) => {
      const result = await coffeeCollection.find().toArray();
      res.send(result);
    })
    // For delete operation
    app.delete('/coffee/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result =await coffeeCollection.deleteOne(query)
      res.send(result);
    })

    app.post('/coffee', async(req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee)
      const result = await coffeeCollection.insertOne(newCoffee);
      res.send(result);
    })



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
  res.send('Coffe Shop server is running')
})

app.listen(port, () => {
  console.log(`Coffee Shop server in running on port ${port}`)
})
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
const {ObjectId} =require('mongodb')

// Middleware to parse JSON requests
app.use(express.json());


// Enable CORS for all routes
app.use(cors());


// MongoDB connection string with environment variables
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.glsynkd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db, jobsCollections;

async function connectToDatabase() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Create database and collection objects
    db = client.db("Online-Job-Portal");
    jobsCollections = db.collection("demoJobs");

    // Post a job
  app.post('/post-job', async (req, res) => {
    try {
      const body = req.body;
      body.createAt = new Date();
      const result = await jobsCollections.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: "Cannot insert! Try again later",
          status: false
        });
      }
    } catch (error) {
      return res.status(500).send({
        message: "An error occurred while posting the job",
        status: false,
        error: error.message
      });
    }
  });


    //get all jobs
    app.get("/all-jobs", async(req, res) => {
      const jobs = await jobsCollections.find({}).toArray()
      res.send(jobs);
    })

    

    // get single job using id
    app.get("/all-jobs/:id",async(req,res)=>{
      const id = req.params.id;
      const job = await jobsCollections.findOne({
        _id:new ObjectId(id)
      })
      res.send(job)
    })
    

    //get jobs by email
   app.get("/myJobs/:email",async(req,res)=>{
    const jobs = await jobsCollections.find({postedBy : req.params.email}).toArray();
    res.send(jobs)
   })

   //delete a job
   app.delete("/job/:id", async(req, res) => {
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)}
    const result = await jobsCollections.deleteOne(filter);
    res.send(result)
  })

  // update a jobs
  app.patch("/update-job/:id",async(req,res)=>{
    const id = req.params.id;
    const jobData = req.body;
    const filter = {_id:new ObjectId(id)};
    const options = {upsert:true};
    const updateDoc = {
      $set:{
        ...jobData
      },
    };
    const result = await jobsCollections.updateOne(filter,updateDoc,options)
    res.send(result)
  })

    // Resume Submission
  // API endpoint to handle job applications (POST request)
app.post('/job/:id', async (req, res) => {
  const { jobId, resumeLink } = req.body;

  try {
    const newApplication = new JobApplication({ jobId, resumeLink });
    await newApplication.save();

    res.json({ message: 'Application submitted successfully!' });
    console.log('Application saved:', newApplication);
  } catch (error) {
    console.error('Error saving application:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

     app.get("/delete",(req,res)=>{
      demoJobs.remove({postedBy:"rajesh@gmail.com"},(err,data)=>{
        if(err){
          return res.status(500).send(err)
        }else{
          return res.status(200).send(data)
        }
      })
     })

    // Ping the database to confirm connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Setup routes only after successful connection
    setupRoutes();

    // Start the Express server
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });

  } catch (error) {
    console.error('Failed to connect to the database', error);
  }
}

function setupRoutes() {
  

  

  // Root endpoint
  app.get('/', (req, res) => {
    res.send("Hello Developer");
  });
}

// Connect to the database and setup the server
connectToDatabase();

// Don't close the client connection here as it needs to stay open to handle requests

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ApplicantModel = require("./models/Applicants");
const ClientModel = require("./models/Clients");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', // for frontend only
    methods: ['GET','POST','PUT','DELETE'],//allowed HTTP methods
    credentials:true //for using cookies or credentials
 })); // Replace with your frontend's URL


// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://suhanibhardwaj252000:mnb9vcxz@cluster0.4dvtj.mongodb.net/ShivsysInc?retryWrites=true&w=majority&appName=Cluster0",

  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the app if the connection fails
  });

{/*Career Form starts */}
// Route for handling Careerform submissions
app.post("/careerForm", async (req, res) => {
  try {
    console.log("Received data:", req.body);

    // Create a new applicant in the database
    const applicant = await ApplicantModel.create(req.body);
    
    // Respond with the created applicant data
    res.status(201).json({
      success: true,
      message: "Applicant created successfully!",
      data: applicant,
    });
  } catch (err) {
    console.error("Error creating applicant:", err);

    // Respond with an error message
    res.status(500).json({
      success: false,
      message: "Failed to create applicant",
      error: err.message,
    });
  }
});
{/*Career Form ends */}


{/*Contact Form starts */}
// Route for handling Contactpage submissions
// app.post("/ContactPage", async (req, res) => {
//     try {
//       console.log("Received data:", req.body);
  
//       // Create a new client in the database
//       const Client = await ClientModel.create(req.body);
      
//       // Respond with the created client data
//       res.status(201).json({
//         success: true,
//         message: "Client created successfully!",
//         data: applicant,
//       });
//     } catch (err) {
//       console.error("Error creating Client:", err);
  
//       // Respond with an error message
//       res.status(500).json({
//         success: false,
//         message: "Failed to create Client",
//         error: err.message,
//       });
//     }
//   });  
app.post('/ContactPage', async (req, res) => {
    try {
      const { fullName, workEmail, phoneNumber, company, message } = req.body;
      
      // Make sure to correctly define 'applicant'
      const Client = new ClientModel({
        fullName,
        workEmail,
        phoneNumber,
        company,
        message,
      });
      
      await Client.save();
      res.status(200).send({ success: true, message: 'Client created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ success: false, message: 'Failed to create Client', error: error.message });
    }
  });
  

{/*Contact Form ends */}

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./modelRoutes");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", userRoutes);

/*
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`connected to database: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

*/

mongoose
  .connect(
    "mongodb+srv://test:test@cluster1.d6vbnhi.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// ... Other middleware and setup ...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from "express";

const PORT = process.env.PORT;

const app = express();

app.get("/learning-express", (req, res) => {
  res.send({
    message: "Learning Express.js",
    status: "SUCCESS",
    data: {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com"
    }
  });
  // CONNECT KE DATABASE (MONGODB / FIREBASE)
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

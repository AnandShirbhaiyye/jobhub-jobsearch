import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());


app.get("/health", (req, res) => {
    res.json({
      success: true,
      message: "All Good🥳🥳",
    });
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

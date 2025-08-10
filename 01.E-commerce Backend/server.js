require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 3000;

// connectDB
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on : http://localhost:${PORT}`);
  });
});

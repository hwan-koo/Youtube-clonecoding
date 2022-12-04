import "regenerator-runtime"

import "dotenv/config";
import "./db";
import  "./models/Video";
import "./models/User";
import app from "./server";
 
// start our application
const PORT = process.env.PORT || 4000;
const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
const express = require('express');
const cors = require("cors");
const PORT = 8000;
const app = express();
app.use(cors({}));


app.get("/help", (req,res) => {
    res.send("test");
}); 








app.listen(PORT, () => console.log("Server running on port ${PORT}"));

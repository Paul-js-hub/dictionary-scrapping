const app = require("express")();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res)=>{
    res.send("Hello world");
})


module.exports = app;
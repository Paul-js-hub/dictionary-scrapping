import  express  from "express";
import cors from "cors"

const app = express();
app.use(cors());

app.post("/", (req, res)=>{
    // fetch the text of the web page
    // clean the text of the page
    // count the words occurrences and sort them
    res.send("Hello world again!!!!!");
})


export default app;
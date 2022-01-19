import  express  from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getUrlText } from "./get-url-text";
import { cleanUrlContent } from "./clean-url-content";
import { countWord } from "./count-word";
const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded(({ extended: false })))

app.get("/", (req, res)=>{
    res.send("Welcome to node application");
});

app.post("/", async(req, res)=>{
    // fetch the text of the web page
    // https://www.gutenberg.org/files/863/863-0.txt
    const url = req.body.url;
    const text = await getUrlText(url);
    // clean the text of the page
    const cleanUrl = cleanUrlContent(text);
    // count the words occurrences and sort them
    const result = countWord(cleanUrl);

    return res.send(result);
    
})


export default app;
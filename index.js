import express from 'express';
import cors from 'cors';
import axios from 'axios';
import https from 'https'

const PORT = 5000;
const app = express();

const corsOptions = {
    origin: "https://youtube-clone-nine-vert.vercel.app/"
};
app.use(cors(corsOptions));

const requestEndpoint = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

app.get('/getSearchResults', async (req, res) => {
    // console.log(requestEndpoint+req.query.q)
    try {
        const response = await axios.get(requestEndpoint+req.query.q, { 
            httpsAgent: new https.Agent({ rejectUnauthorized: false }) })
        console.log(response.data)
        const x = response.data
        res.send(x)
    } catch (error) {
        console.error(error);
    }
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});

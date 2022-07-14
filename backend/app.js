import csv from 'csvtojson';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const csvFilePath='./public/file/TA_PRECO_MEDICAMENTO.csv';
const file = await csv({delimiter:"auto"}).fromFile(csvFilePath);

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get("/", (req, res) =>{
    return res.json(file);
});

app.listen(8080, () => {
    console.log("Backend rodando!!!")
})
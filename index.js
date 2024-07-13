import express from 'express';
const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());

app.get('/', (req, res) => {
  res.send( );
});

app.get('/api/v1/message/getall', (req, res) => {
  res.send( );
});


app.listen(port, () => {
    console.log(`Server is running on port http://localhost${port}`);
});

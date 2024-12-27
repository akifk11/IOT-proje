const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const dht = require('./routes/dht');
const connectDB = require('./db/connect');
const port = process.env.PORT || 3000;
const path = require('path')

app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, './client/build')));

app.use("/dht",dht);

const start = async () => {
  
    try {
      console.log(process.env.MONGO_URI)
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error); 
    }
  };
  
  start();



 






// app.post('/dht', (req, res) => {
//   const { temperature, humidity } = req.body;

//   console.log(`Sıcaklık: ${temperature}°C, Nem: ${humidity}%`);

//   // Veriyi aldıktan sonra yanıt olarak başarı döndür
//   res.status(200).send({ message: "Veri alındı" });
// });

// // Sunucuyu başlat
// app.listen(port, () => {
//   console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
// });

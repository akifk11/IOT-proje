const Dht = require("../models/Dht")
const asyncWrapper = require('../middleware/async.js')

const postDht = asyncWrapper(async(req,res)=>{

    const dht = await Dht.create(req.body);
    // const { temperature, humidity } = req.body;

    // console.log(`Sıcaklık: ${temperature}°C, Nem: ${humidity}%`);
  
    // Veriyi aldıktan sonra yanıt olarak başarı döndür
    res.status(200).json({ dht});
})

const getDht = asyncWrapper(async(req,res)=>{
    const dht = await Dht.find({}).sort({ createdAt: 1 }).limit(100);  // Son 100 veriyi al
    res.status(200).json({ dht }) 
})



module.exports = {
    postDht,
    getDht
} 
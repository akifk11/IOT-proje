const mongoose = require('mongoose')



const connectDB = (url) => {
  return mongoose.connect(url).then(() => {
    console.log('MongoDB bağlantısı başarılı');
  })
  .catch(err => {
    console.error('MongoDB bağlantı hatası:', err);
  })
}

module.exports = connectDB
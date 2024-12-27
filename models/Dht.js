const { default: mongoose } = require("mongoose");

const DhtSchema = new mongoose.Schema({
    temperature: {
      type: String,
      required: [true, 'must provide name'],
      trim: true,
      maxlength: [20, 'name can not be more than 20 characters'],
    },
    humidity: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
    },
  })
  
  module.exports = mongoose.model('Dht', DhtSchema)
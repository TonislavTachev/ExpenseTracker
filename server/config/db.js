const mongoose = require('mongoose');
const db = 'mongodb+srv://Tachev:totosasa123@expensecalc-b7aas.mongodb.net/test'

const connectDB = async () =>{

    try{
   await mongoose.connect(db, {
       useNewUrlParser:true,
       useCreateIndex :true,
       useFindAndModify :false,
       useUnifiedTopology: true
   })
     console.log('Database connected!');
   } catch(error){
       console.log(error.message)
   }
}

module.exports = connectDB;
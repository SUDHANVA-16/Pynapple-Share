const mongoose = require('mongoose');
const url = process.env.MONGO_URL;
// mongoose.connect('mongodb+srv://Sudhanva_77:5OejLfUuZLz1GbBB@cluster0.r0ik23t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log('MongoDB Connected...');
    }).catch((err)=>{
        console.log('Error while creating MongoDB connection ',err);
    })
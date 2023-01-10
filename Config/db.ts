// import mongoose from "mongoose"

// const urlOffline:string = "mongodb://0.0.0.0:27017/microTodoDB"

// mongoose.connect(urlOffline).then(()=>{
//     console.log("database is connected.....!");
// })
// .catch(()=>{
//     console.log("failed to connect to database");
    
// })



import mongoose from "mongoose";

const urlOffline :string ="mongodb://0.0.0.0:27017/microTodoDB"

mongoose.connect(urlOffline).then(()=>{
  console.log("dataase is successfully connected");
}).catch((error)=>{
    console.log(`oops and error occurred.....${error}`);
    
})
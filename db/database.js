import mongoose from "mongoose"

export const connectdb=()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"loginsystem",
}).then((c)=>console.log(`database connected`)).catch((e)=>{
    console.log("error")
})

}
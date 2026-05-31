/*const express=require('express')
const app=express()
const port=4000

//router

app.get("/",(req,res)=>{
    res.send("my project")
})
app.listen(port,()=>{
    console.log("serevr is running")
})*/


/*

const express=require("express")

const app=express()
const port=4000
const total=[]
app.use(express.json())


app.post("/create",(req,res)=>{
    const {description,title}=req.body;

    const todos={
        id:total.length+1,
        description,
        title
    }
    total.push(todos)
    res.status(201).json(todos)

})
//get all

app.get("/take",(req,res)=>{
    res.json(total)
})


app.listen(port,()=>{
    console.log("server is running",port)
})*/

/*

const express=require("express")
const app=express()
//route
app.use(express.json())


const fi=[]
//post method
app.post("/create",(req,res)=>{
    const{description,title}=req.body
    const total={
        id:fi.length+1,
        description,
        title
    }
    fi.push(total)
    res.status(201).json(total)
})

//get method

app.get("/read",(req,res)=>{
    res.json(fi)
})


app.listen(4000,()=>{
    console.log("server is running")
})*/

/*
const express=require("express")
const mongoose=require("mongoose")
const app=express()
const port=4000

app.use(express.json())

//mongoose connect
mongoose.connect("mongodb://localhost:27017/mernapp")
.then(()=>{
    console.log("db connect")
})
.catch((er)=>{
    console.log("db error",er)
})

//create schema

const todoSchema=new mongoose.Schema(
    {
        description:String,
        title:String
    }
)

//create model

const todomodel=mongoose.model("Todo",todoSchema)





app.post("/create",async(req,res)=>{
    const {description,title}=req.body

    try{
        const total=new todomodel({title,description})
        await total.save()
        res.status(201).json(total)
    }
    catch(e){
        console.log(e,"error db save")
        res.status(500).json({message:"error saving data"});
    }
})

app.listen(port,()=>{
    console.log("server is running",port)
})*/



/*
const express=require("express")
const app=express()
const port=5000
const mongoose=require("mongoose")

app.use(express.json())
//mogodb connect

mongoose.connect("mongodb://localhost:27017/mernapp2")
.then(()=>{
    console.log("db connect")
})
.catch((er)=>{
    console.log(er,"db error")
})



//schema
const totalSchema=new mongoose.Schema({
   // title:String,
    title:{
        required:true,
        type:String
    },

    description:String
})

//model create

const totalmodel=mongoose.model("ToDo2",totalSchema)



app.post("/create",async(req,res)=>{
    const{title,description}=req.body
    try{
        const total=new totalmodel({title,description})


        await total.save()
        res.status(201).json(total)
    }
    catch(e){
        console.log(e,"save error")
        res.status(500).json({message:"data save error"})
    }

})






app.get("/read",async(req,res)=>{
    try{
        const fi=await totalmodel.find()
         res.json(fi)
    }

    catch(er){
        console.log(er,"fetch error")
        res.status(500).json({message:"data fetch error"})
    }
})










app.put("/update/:id", async (req, res) => {
    const { title, description } = req.body;
    const id = req.params.id;

    try {
        const updatetotal = await totalmodel.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
        );
        if(!updatetotal){
            return res.status(404).json({message:"data not found"})
        }

        res.json(updatetotal);
    }
    catch (e) {
        console.log(e, "update error");
        res.status(500).json({ message: "data update error" });
    }
});

app.listen(port,()=>{
    console.log("sever is running",port)
})*/








/*


const express=require("express")
const app=express()
const port=5000
const mongoose=require("mongoose")

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/todolist")
.then(()=>{
    console.log("db connect")
})
.catch((e)=>{
    console.log("db error",e)
})




const totalSchema=new mongoose.Schema(
    {
        title:{
            required:true,
            type:String
        },
        description:String
    }
)






const totalmodel=mongoose.model("todo3",totalSchema)


app.post("/create",async(req,res)=>{
    const{title,description}=req.body;

    try{
        const totalcreate=new totalmodel({title,description})
        await totalcreate.save()
        res.status(201).json({message:"create success"})
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"craete error"})
    }
})

app.get("/read",async(req,res)=>{

    try{
        const totalget=await totalmodel.find()
        res.json(totalget)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"read error"})
    }

})

app.put("/update/:id",async(req,res)=>{
    const id=req.params.id
    const{title,description}=req.body
    try{
        const totalupdate=await totalmodel.findByIdAndUpdate(
            
            id,
            {title,description},
            {new:true}
            
        )
        if(!totalupdate){
            return res.status(404).json({message:"not found id"})
        }
        res.json(totalupdate)
       // res.status(201).json({message:"update succe"})

    }
    catch(e){
        console.log(e,"update error")
        res.status(500).json({message:"update fail"})
    }
    
})


app.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    try{
        await totalmodel.findByIdAndDelete(id)
        res.status(204).end();

    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"delet fail"})
    }

})

app.listen(port,()=>{
    console.log("server is connect",port)

})*/



/*
const express=require('express')
const app=express()
const port=4000
const mongoose=require('mongoose')

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/mern3')
.then(()=>{
    console.log("db connect")
})
.catch(()=>{
    console.log("db error")
})



const totalSchema=new mongoose.Schema(
    {
        title:{
            required:true,
            type:String

        },
        description:String
    }
)


const totalmodel=mongoose.model("todo7",totalSchema)




app.post("/create",async(req,res)=>{
    const {title,description}=req.body
    try{
        const totalcreate=new totalmodel({title,description})
        await totalcreate.save()
        res.status(201).json({message:"create succe"})
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"create failed"})


    }
})


app.get("/read",async(req,res)=>{
    try{
        const totalread=await totalmodel.find();
        res.status(200).json(totalread)
    }

    catch(e){
        console.log(e)
        res.status(500).json({message:"read failed"})
    }

})




app.put("/update/:id",async(req,res)=>{
    const {title,description}=req.body 
    const id=req.params.id

    try{
        const totalupdate=await totalmodel.findByIdAndUpdate(
            id,
            {title,description},
            {new:true}
        )
        res.status(200).json(totalupdate)
    }

    catch(e){
        console.log(e)
        res.status(500).json({message:"update error"})
    }

})


app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id

    try {
        await totalmodel.findByIdAndDelete(id)
        res.status(200).json({ message: "delete success" })
    }
    catch (e) {
        console.log(e)
        res.status(500).json({ message: "delete error" })
    }
})





app.listen(port,()=>{
    console.log("serevr is connect")
})*/





/*
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 5000

app.use(express.json())

// DB Connection
mongoose.connect('mongodb://localhost:27017/mernapp3')
.then(() => {
    console.log("DB connected")
})
.catch((err) => {
    console.log("DB error", err)
})

// ✅ Correct Schema
const totalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String
})

// Model
const totalmodel = mongoose.model("todo3", totalSchema)


// ✅ CREATE
app.post("/create", async (req, res) => {
    const { title, description } = req.body

    try {
        const newData = new totalmodel({ title, description })
        await newData.save()

        res.status(201).json({
            message: "Created successfully",
            data: newData
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Create error" })
    }
})


// ✅ READ
app.get("/read", async (req, res) => {
    try {
        const data = await totalmodel.find()
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Read error" })
    }
})


// ✅ UPDATE
app.put("/update/:id", async (req, res) => {
    const { title, description } = req.body
    const id = req.params.id

    try {
        const updatedData = await totalmodel.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
        )

        if (!updatedData) {
            return res.status(404).json({ message: "ID not found" })
        }

        res.status(200).json({
            message: "Updated successfully",
            data: updatedData
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Update error" })
    }
})


// ✅ DELETE
app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id

    try {
        const deletedData = await totalmodel.findByIdAndDelete(id)

        if (!deletedData) {
            return res.status(404).json({ message: "ID not found" })
        }

        res.status(200).json({
            message: "Deleted successfully"
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Delete error" })
    }
})


// Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
    */



const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
const cors = require("cors");

// middleware (IMPORTANT)
app.use(express.json());
app.use(cors());

// DB CONNECT
mongoose.connect("mongodb://localhost:27017/mern2")
.then(() => {
    console.log("DB connected");
})
.catch((e) => {
    console.log(e, "DB error");
});

// SCHEMA
const totalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String
});

// MODEL
const totalmodel = mongoose.model("fita_stu", totalSchema);


// ✅ CREATE
app.post("/create", async (req, res) => {
    try {
        const { title, description } = req.body;

        const totalcreate = new totalmodel({ title, description });
        await totalcreate.save();

        res.status(201).json({ message: "Created successfully" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Create error" });
    }
});


// ✅ READ
app.get("/read", async (req, res) => {
    try {
        const totaldata = await totalmodel.find();
        res.status(200).json(totaldata);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Read error" });
    }
});


// ✅ UPDATE
app.put("/update/:id", async (req, res) => {
    try {
        const { title, description } = req.body;
        const id = req.params.id;

        const totalupdate = await totalmodel.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
        );

        res.status(200).json(totalupdate);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Update error" });
    }
});


// ✅ DELETE
app.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const totaldelete = await totalmodel.findByIdAndDelete(id);

        if (!totaldelete) {
            return res.status(404).json({ message: "ID not found" });
        }

        res.status(200).json({ message: "Deleted successfully" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Delete error" });
    }
});


// SERVER
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
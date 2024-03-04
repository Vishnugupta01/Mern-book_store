import express from "express";
import {PORT , mongodbURL } from "./config.js";
import mongoose from 'mongoose'; 
import {Book} from './models/bookmodel.js';

const app = express();

//midlle ware for parsing request body.

app.use(express.json());


app.get('/' , (request , response) => {
    
    console.log(request)
    return response.status(345).send('Welcome to this mern world ' )
});

app.post('/books' , async(request , response) => {
  try {
    if (
      !request.body.title ||  
      !request.body.author ||
      !request.body.PublishYear

    ){
        return response.status(400).send({
         message :'Send all the required fields : title , author , publishYear', 
        });
    }
    const newBook = {
      title : request.body.title ,
      author : request.body.author ,
      PublishYear : request.body.publishYear ,
    };

   const book = await Book.create(newBook);
   return response.status(201).send(book);
   
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message : error.message });
  }

});


mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log('App connected to the database');

    app.listen(PORT , () => {
        console.log('App is listening to the port : ${PORT}');                                                      
    }); 
    
  })
  .catch((error) => {
    console.log(error);
  });










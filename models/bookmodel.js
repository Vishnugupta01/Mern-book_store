import moongoose from 'mongoose';

const BookSchema = mongoose.Schema(
  {
    title :{
       type : 'string',
       required : 'true',
    } ,
    author:{
        type :'string',
        required :'true',
    },
    PublishYear:{
        type :'Number' ,
        required :'true',
    },
  },
  {
    timestamps :'true',
  }

);


export const Book = mongoose.model( 'Cat', BookSchema );




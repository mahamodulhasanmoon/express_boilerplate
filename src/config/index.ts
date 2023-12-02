import  'dotenv/config'

export const  mongoUrl:String | undefined = process.env.mongoDB_URI
export const  port = process.env.PORT

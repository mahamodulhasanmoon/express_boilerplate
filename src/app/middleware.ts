import express, { urlencoded, } from 'express';
import morgan from 'morgan';
import cors from 'cors';
const middleware = [morgan('dev'),cors(),express.json(),urlencoded({extended:true})]
export default middleware
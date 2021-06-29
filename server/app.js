// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser';
import logger from 'morgan'
import mongoose from 'mongoose'
import Redis from 'ioredis'
import session from 'express-session'
import connectRedis from 'connect-redis'

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
import indexRouter from './routes/index'
import usersRouter from './routes/users'
import keys from './config/keys'
import { REDIS_OPTIONS, SESSION_OPTIONS, IN_PROD } from './config'

mongoose.connect(keys.mongoURI, )
    .then(() => console.log('You are now connected to Mongo!'))
    .catch(err => console.error('Something went wrong\n', err))

// const RedisStore = connectRedis(session)
// let client = new Redis(REDIS_OPTIONS)

var app = express()

// app.use(
//     session({
//         ...SESSION_OPTIONS,
//         store: new RedisStore({ client: redisClient })
//     })
// )
 
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false })) //for html post form
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

// module.exports = app;
export default app;

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
import { login, logout, register } from './routes'

import { REDIS_OPTIONS, SESSION_OPTIONS, MONGO_URI, MONGO_OPTIONS } from './config'
import { guest } from './middlewares/auth';
import { serverError, notFound } from './middlewares';

mongoose.connect(MONGO_URI, MONGO_OPTIONS)
    .then(() => console.log('You are now connected to Mongo!'))
    .catch(err => console.error('Something went wrong\n', err))

const RedisStore = connectRedis(session)
let client = new Redis(REDIS_OPTIONS)
const store = new RedisStore({ client })

var app = express()

app.use(
    session({
        ...SESSION_OPTIONS,
        store
    })
)
 
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false })) //for html post form
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))

app.use('/login', login)
app.use('/logout', logout)
app.use('/register', guest, register)

app.use(notFound)

app.use(serverError)
// module.exports = app;
export default app;

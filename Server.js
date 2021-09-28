const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();
const server = express();
server.use(cors());
server.use(express.json());
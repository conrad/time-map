var path = require('path');

//=========================================================
//  ENVIRONMENT VARS
//---------------------------------------------------------
const NODE_ENV = process.env.NODE_ENV

const ENV_DEVELOPMENT = NODE_ENV === 'development'
const ENV_PRODUCTION = NODE_ENV === 'production'
const ENV_TEST = NODE_ENV === 'test'

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 3000


//=========================================================
//  LOADERS
//---------------------------------------------------------



//=========================================================
//  CONFIG
//---------------------------------------------------------
const config = {}
module.exports = config

config.entry = './client/helloWorld.js'

config.output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'public')
}

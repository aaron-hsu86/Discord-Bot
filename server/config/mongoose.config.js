const mongoose = require('mongoose')

// used info from config.json file
const { ATLAS_USERNAME, ATLAS_PASSWORD, ATLAS_CLUSTER, ATLAS_DB } = require('../config.json')

const connectionString = `mongodb+srv://${ATLAS_USERNAME}:${ATLAS_PASSWORD}@${ATLAS_CLUSTER}.mongodb.net/${ATLAS_DB}?retryWrites=true&w=majority`

mongoose.connect(connectionString, {
    // force newurlparcer
    useNewUrlParser: true,
    // force new topology use
    useUnifiedTopology: true
})
.then(()=>console.log(`>>ESTABLISHED CONNECTION TO: ${ATLAS_CLUSTER}\n>>DATABASE: ${ATLAS_DB}`))
.catch(err=>console.log(`Mongo connection failed!`, err))
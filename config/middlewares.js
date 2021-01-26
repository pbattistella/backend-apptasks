const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app =>{
    app.use(bodyParser.json())//interpreta todas as requisições da url usando JSON
    app.use(cors({
        origin:'*'
    }))
}
const X = require('express');
const GO = X.Router();
const CORS = require('cors');
const { PREP, log, DB } = require('./middleware.js');

// GO.all('*', (req, res, next) => { //TODO remove before deploy
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
//     next();
// });


GO.route('/poke').get((req, res) => {
    let t = Date();
    res.send(
        `${t} ::: checking for signs of life`
    );
})

GO.route('/test').get(CORS(),log(),(req, res) => {
    console.log("access...")
    res.send({response:"Hello all"})
})

GO.route('/naam/:eigennaam?').get(log(), (req, res) => {
    res.send(`Hallo ${req.params.eigennaam}`)
});
GO.route('/post').post((req, res) => {
    res.send('Hello post')
});



module.exports = GO;
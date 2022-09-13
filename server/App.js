const express = require('express');
const App = express();
const cors = require('cors');

App.use(cors({
    origin: '*'
}));

App.use('/findAnswer', require('./Routers/answerRouter.js'));

App.use('/', (req, res) => {
    return (
        res.status(404).json({
            status: false,
            msg: "Bad request..."
        })
    )
})

module.exports = App;
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/', async (req, res) => {
    const question = req.body.question;
    console.log(question);
    try {
        
            return (
                res.status(200).json({
                    status: true,
                    msg: "Answer finded...",
                    data: {
                        "recipient_id": "0d3b3ed1-0456-4fba-9d6f-c04edc432674",
                        "text": "How can I help you?",
                        "buttons": [
                            {
                                "payload": "/guidedrepair",
                                "title": "I need help with a diagnosis"
                            },
                            {
                                "payload": "/commonqueries",
                                "title": "I need help troubleshooting a common problem"
                            },
                            {
                                "payload": "/howto",
                                "title": "Show me how-to guides"
                            },
                            {
                                "payload": "/faultcode",
                                "title": "I need help understanding a fault code"
                            }
                        ]
                    }
                })
            );
       
    } catch (error) {
        console.log(error);
        return (
            res.status(401).json({
                status: false,
                msg: "Something went wrong, please try again later...",
                data: error
            })
        );
    }
})

module.exports = router;
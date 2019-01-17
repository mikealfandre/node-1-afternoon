let messages = []

let id = 0;

// WE ARE A (NODE) SERVER. WE ARE RECEIVING REQUESTS, TAKING ORDERS.
// WE NEED TO TAKE THOSE REQUESTS AND UPDATE OUR CURRENT INFORMATION TO MATCH THE REQUESTS THEN RETURN THE UPDATED INFORMATION

module.exports = {

    create: (req, res) => {
        const {text, time} = req.body
        messages.push({text, time, id})
        id++
        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        const {text} = req.body
        const updateID = req.params.id
        let messageIndex = messages.findIndex(message => message.id == updateID)

        let foundMessage = messages[messageIndex]
        // the "foundMessage" is ultimately the requested message coming into us.
        // -- we need to update the current message with the information on the requested message sent to us (foundMessage)


        messages[messageIndex] = {
            id: foundMessage.id,
            text: text || foundMessage.text, // <--  || shorthand for checking true or falsey. If 'text' doesn't
            time: foundMessage.time
        }

        res.status(200).send(messages)
     }, 

    delete: (req, res) => {
        const deleteID = req.params.id
        let deleteIndex = messages.findIndex(message => message.id === deleteID)
        messages.splice(deleteIndex, 1)
        res.status(200).send(messages)

    }


}
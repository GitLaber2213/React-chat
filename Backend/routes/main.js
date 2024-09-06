const fs = require('fs')
const cors = require('cors');
const bodyParser = require('body-parser')

const idConst = 100

const addDataInJsonFile = (jsonPath, newObject, id, type) => {
    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) throw err


        let jsonData
        try {
            jsonData = JSON.parse(data)
        } catch (parseErr) {
            jsonData = []
        }

        if (!Array.isArray(jsonData)) {
            jsonData = []
        }

        newObject.id = id
        newObject.type = type

        jsonData.push(newObject)

        fs.writeFile(jsonPath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) throw err
        })
    })
    return 0
}

const getMaxIdInGroupList = (obj, defaultValue = 100) => {

    let maxId = -Infinity;
    let foundId = false;

    const searchIds = (item) => {
        if (typeof item === 'object' && item !== null) {
            for (const key in item) {
                if (key === 'id' && typeof item[key] === 'number') {
                    if (item[key] > maxId) {
                        maxId = item[key];
                    }
                    foundId = true;
                } else {
                    searchIds(item[key]);
                }
            }
        }
    };

    searchIds(obj);

    return foundId ? ++maxId : defaultValue;
}

const getUsers = (jsonPath, userId) => {
    let users = JSON.parse(fs.readFileSync(jsonPath)).filter(user => user.id !== userId)
    users.sort((a, b) => b.favorite - a.favorite)
    return users
}

const getLoginUser = (jsonPath, inputText) => {
    return JSON.parse(fs.readFileSync(jsonPath)).find(user => user.username === inputText)
}

const getMessages = (jsonPath, userId, selectedUserId) => {
    const messages = JSON.parse(fs.readFileSync(jsonPath))

    return messages.filter(message => {
        const { userId: messageUserId, selectedUserId: messageSelectedUserId } = message.messageText

        return (
            (messageUserId === userId && messageSelectedUserId === selectedUserId) ||
            (messageUserId === selectedUserId && messageSelectedUserId === userId)
        )
    })
}

const deleteMessages = (jsonPath, selectedUserId, authUserId) => {
    const fileContent = fs.readFileSync(jsonPath);

    let messages = JSON.parse(fileContent);

    messages = messages.filter(message => {
        const { userId: messageUserId, selectedUserId: messageSelectedUserId } = message.messageText;

        return !(
            (messageUserId === authUserId && messageSelectedUserId === selectedUserId) ||
            (messageUserId === selectedUserId && messageSelectedUserId === authUserId)
        );
    });

    fs.writeFileSync(jsonPath, JSON.stringify(messages, null, 2));

    return 0;
}

const changeFavorite = (jsonPath, userId) => {
    const users = JSON.parse(fs.readFileSync(jsonPath))

    let user = users.find(user => user.id === userId)
    user.favorite = !user.favorite

    fs.writeFile(jsonPath, JSON.stringify(users, null, 2), (err) => {
        if (err) throw err
    })

    return 0
}


module.exports = function (app) {
    app.use(bodyParser.json())
    app.use(cors());
    const jsonUsersPath = 'files/users.json'
    const jsonMessagesPath = 'files/messages.json'
    const jsonGroupsPath = 'files/groups.json'

    app.post('/getUsers', (req, res) => {
        res.json(getUsers(jsonUsersPath, req.body.userId))
    });
    app.post('/login', (req, res) => {
        res.json(getLoginUser(jsonUsersPath, req.body.inputText))
    });
    app.post('/sendMessage', (req, res) => {
        addDataInJsonFile(jsonMessagesPath, req.body, null, 'message')
    });
    app.post('/getMessages', (req, res) => {
        res.json(getMessages(jsonMessagesPath, req.body.userId, req.body.selectedUserId))
    })
    app.post('/delMessages', (req, res) => {
        deleteMessages(jsonMessagesPath, req.body.selectedUserId, req.body.authUserId)
    })
    app.post('/changeFavorite', (req, res) => {
        res.json(changeFavorite(jsonUsersPath, req.body.selectedUserId))
    })
    app.post('/createGroup', (req, res) => {
        res.json(addDataInJsonFile(jsonGroupsPath, req.body, getMaxIdInGroupList(JSON.parse(fs.readFileSync(jsonGroupsPath))), 'group'))
    })
    app.post('/getGroups', (req, res) => {
        res.json(JSON.parse(fs.readFileSync(jsonGroupsPath)))
    })
}
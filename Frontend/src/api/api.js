import axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:8080/`,
    headers: {
        'Content-Type': 'application/json'
    },
})

export const UserAPI = {
    getUsers(userId) {
        return instance.post("/getUsers", { userId }).then(response => {
            return response.data
        })
    }
}

export const AuthAPI = {
    login(text) {
        return instance.post("/login", { inputText: text }).then(response => {
            return response.data
        })
    }
}

export const MessagingAPI = {
    sendMessage(messageText, userId, userName, selectedUserId, selectedUserName, timeStampMessage) {
        instance.post("/sendMessage", { messageText, userId, userName, selectedUserId, selectedUserName, timeStampMessage })
    },
    getMessages(userId, selectedUserId) {
        return instance.post("/getMessages", { userId, selectedUserId }).then(response => {
            return response.data
        })
    },
    deleteMessages(selectedUserId, authUserId) {
        return instance.post("/delMessages", { selectedUserId, authUserId }).then(response => {
            return response.data
        })
    },
    createGroup(nameGroupText, selectedUserInGroup, authUserId) {
        return instance.post("/createGroup", { nameGroupText, selectedUserInGroup, adminGroupId: authUserId }).then(response => {
            return response.data
        })
    },
    getGroups() {
        return instance.post("/getGroups").then(response => {
            return response.data
        })
    },
    changeFavorite(selectedUserId) {
        return instance.post("/changeFavorite", { selectedUserId }).then(response => {
            return response.data
        })
    }

}
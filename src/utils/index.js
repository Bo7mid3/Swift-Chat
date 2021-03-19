import store from "../store/";

export const getSocketId = (username) => {
    const friend = store.getState().friends.find((user) => user.username == username)
    if (friend)
        return friend.id;
    return null;
}
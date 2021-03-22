import store from "../store/";

export const getSocketId = (username) => {
    const friend = store.getState().friends.find((user) => user.username == username)
    if (friend)
        return friend.id;
    return null;
}

const getMonthShort = (number) => {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[number];
}

export const getLastMsgDate = (dateString) => {
    const date = new Date(dateString)
    return `${getMonthShort(date.getMonth())} ${date.getDate()}`;
}
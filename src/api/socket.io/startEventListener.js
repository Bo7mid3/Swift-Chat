import { io } from "socket.io-client";
import store from "../../store";
import { addFriend, setFriends, delFriend } from "store/actions/friends";
import setSocket from "store/actions/socket/setSocket";
import setLastMsg from "store/actions/lastMsg/setLastMsg";

const startEventListener = () => {
    const socket = io.connect("https://SwiftChatServer.ahmedbahloul.repl.co",{
      query: { token : store.getState().user.token }
    })
    store.dispatch(setSocket(socket));
    socket.on("on friends", (onFriends) => { store.dispatch(setFriends(onFriends)) });
    socket.on("friend on", (friend) => { store.dispatch(addFriend(friend)) });
    socket.on("friend off", (friend) => { store.dispatch(delFriend(friend)) });
    socket.on("message", (msg) => { store.dispatch(setLastMsg(msg)) });
}

export default startEventListener;
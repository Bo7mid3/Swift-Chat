import { io } from "socket.io-client";
import store from "../../store";
import { addFriend, setFriends, delFriend } from "store/actions/friends";

const startEventListener = () => {
    const socket = io.connect("https://SwiftChatServer.ahmedbahloul.repl.co",{
      query: { token : store.getState().user.token }
    })
    socket.on("on friends", (onFriends) => { console.log(onFriends); store.dispatch(setFriends(onFriends)) });
    socket.on("friend on", (friend) => { store.dispatch(addFriend(friend)) });
    socket.on("friend off", (friend) => { store.dispatch(delFriend(friend)) });
    //new Promise(r => setTimeout(r, 10000)).then(()=> {socket.emit("test", "see ya");console.log("emmited")});
    //socket.on("test",()=> console.log("test"))
}

export default startEventListener;
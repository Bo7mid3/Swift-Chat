import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import FriendElem from "./friend-elem";

const InboxChat = ({ token }) => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axios({
            method: "get",
            url: "https://SwiftChatServer.ahmedbahloul.repl.co/friends",
            headers: {
                'Authorization': `BEARER ${token}`
            }
        })
            .then(({ data }) => {
                setFriends(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="inbox_chat">
            {
                friends.map(({friendName, lastMsg}) => <FriendElem friendName={friendName} lastMsg={lastMsg} />)
            }
        </div>
    )
}

const mapStateToProps = (state) => ({ token: state.user.token })

export default connect(mapStateToProps, null, null, { areStatesEqual: (next, prev) => next.user.token == prev.user.token })(InboxChat);
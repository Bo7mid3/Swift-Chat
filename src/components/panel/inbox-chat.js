import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

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
                console.log(data)
                setFriends(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="inbox_chat">
            {
                friends.map(({name, history}) => (
                    <div className="chat_list active">
                        <div className="chat_people" >
                            <div className="chat_img">
                                <img
                                    src="https://ptetutorials.com/images/user-profile.png"
                                    alt="sunil"
                                />
                            </div>
                            <div className="chat_ib">
                                <h5>
                                    {name} <span className="chat_date">Dec 25</span>
                                </h5>
                                <p>
                                    {history[history.length-1]}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => ({ token: state.user.token })

export default connect(mapStateToProps, null, null, { areStatesEqual: (next, prev) => next.user.token == prev.user.token })(InboxChat);